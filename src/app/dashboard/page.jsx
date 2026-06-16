// pages/dashboard/index.js
'use client'
import React from "react";
import styles from "../../app/main.css";
import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';
import CreateTaskDiv from "../components/CreateTaskList";
import axios from "axios";
import SideBar from "../components/SideBar";
import themeSwitcher from "@/functions/themeSwitcher";
import Tutorial from "../components/Tutorial";
import MainContent from "../components/MainContent";
import scheduleApiCall from "@/functions/tokenRefresh";


function Dashboard(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addListVar, setAddListVar] = useState(false)
  const [listExists, setListExists] = useState(false);
  const [messageArray, setMessageArray] = useState([]);
  const [choosedListVar, setChoosedListVar] = useState(null)
  const [choosedListName, setChoosedListName] = useState(null)
  const [firstLogin, setFirstLogin] = useState(false)
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }
  
  const size = useWindowSize();


  // Function to fetch the lists from DB
  const fetchLists = async () => {
    try {
      let response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/lists`,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("JWT_SESSION")}`,
          'Content-Type': 'application/json',
        }
      });
      setMessageArray(response.data.message); // Update the state with the fetched array
      setListExists(true)
    }
    catch (error) {
      console.error('Error while receiving data:', error);
    }
  };


  useEffect(() => {
    themeSwitcher()
    const jwtSession = localStorage.getItem('JWT_REFRESH');

    if (!jwtSession) {
      router.push('/');
    } else {
      if(!localStorage.getItem("firstLogin")){
        localStorage.setItem("firstLogin", true);
        setFirstLogin(true);
      }
      else if(localStorage.getItem("firstLogin")==false){
        localStorage.setItem("firstLogin", true);
        setFirstLogin(true);
      }
      else if(localStorage.getItem("firstLogin")){
        setFirstLogin(localStorage.getItem("firstLogin"));
      }else{
        setFirstLogin(true);
        localStorage.setItem("firstLogin", true);
        localStorage.removeItem('intervalToken');
      }
      setIsAuthenticated(true);
      
      if (!localStorage.getItem('intervalToken') && firstLogin) {
        localStorage.removeItem('intervalToken');
        scheduleApiCall();
      }
      else if(localStorage.getItem('intervalToken') && firstLogin){
        scheduleApiCall();
      }
      else{
        localStorage.removeItem('interalToken')
      }
    }
    setIsLoading(false);
    if (isAuthenticated) {
      fetchLists();
    }
  }, [router, isAuthenticated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }
  // function that shows a div with a form for adding a new list
  function showAddLists(){
    setAddListVar(true)
  }
  // function that hides div responsible for adding new lists
  function hideAddLists(){
    setAddListVar(false)
  }
  // functions that sends info about witch list was clicked
  const handleListClick = (name) => {
    setChoosedListVar(name);
    setChoosedListName(messageArray.find(item => item.id === name)?.name || null);
    console.log(choosedListName)
  };


return (
    <main className={styles.page}>
      <SideBar
        showAddLists={showAddLists}
        messageArray={messageArray}
        choosedList={handleListClick}
        onListCreated={fetchLists}
        currentList={choosedListVar}
      />
      <section className="mainContent">
        {listExists ? choosedListVar ? <MainContent currentList={choosedListVar} onListDelete={fetchLists} currentListName={choosedListName}/> : size.width<1000? <h2>CLICK ON MENU BUTTON [TOP RIGHT] AND CHOOSE LIST</h2> : <h2>CHOOSE A LIST FROM A SIDEBAR BELOW + ICON</h2> : <Tutorial />}
        {addListVar ? <CreateTaskDiv onClose={hideAddLists} onListCreated={fetchLists} /> : ""} {/* Pass it to CreateTaskDiv too */}
      </section>
    </main>
  )
}

export default Dashboard;
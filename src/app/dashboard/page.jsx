'use client'
import React, { useRef } from "react";
import styles from "../../app/main.css";
import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';
import CreateTaskDiv from "../components/CreateTaskList";
import axios from "axios";
import SideBar from "../components/SideBar";
import themeSwitcher from "@/functions/themeSwitcher";
import Tutorial from "../components/Tutorial";
import MainContent from "../components/MainContent";



function Dashboard(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addListVar, setAddListVar] = useState(false)
  const [listExists, setListExists] = useState(false);
  const [messageArray, setMessageArray] = useState([]);
  const [choosedListVar, setChoosedListVar] = useState(null)

  useEffect(() => {
    themeSwitcher()
    const jwtSession = localStorage.getItem('JWT_REFRESH');

    if (!jwtSession) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
    //function that fetches lists from DB
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
  };

return (
  <main className={styles.page}>
      <SideBar showAddLists={showAddLists} messageArray={messageArray} choosedList={handleListClick}/>
      <section className="mainContent">
      {listExists ? choosedListVar ? <MainContent currentList={choosedListVar}/> : <h2>CHOOSE A LIST FROM A SIDEBAR BELOW + ICON</h2> : <Tutorial />}
      {addListVar ? <CreateTaskDiv onClose={hideAddLists}/> : ""}
    </section>
  </main>
  )
}

export default Dashboard;
// pages/dashboard/index.js
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
  // Declare a global variable to track if the token refresh is scheduled
  if(!localStorage.getItem("tokenRefresh")){
    localStorage.setItem("tokenRefresh", true);
  }
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addListVar, setAddListVar] = useState(false)
  const [listExists, setListExists] = useState(false);
  const [messageArray, setMessageArray] = useState([]);
  const [choosedListVar, setChoosedListVar] = useState(null)

  // Function to re-fetch the lists
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

  useEffect(() =>{
    if (isAuthenticated && localStorage.getItem("tokenRefresh")){
      scheduleApiCall();
    }
  },[isAuthenticated])

  useEffect(() => {
    themeSwitcher()
    const jwtSession = localStorage.getItem('JWT_REFRESH');

    if (!jwtSession) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
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
  };

  // Function to make the API call to refresh the tokens
  async function tokenRefresh() {
    console.log("refresh");
    try {
      let response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/refresh`, null, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("JWT_REFRESH")}`,
          'Content-Type': 'aplication/json'
        }
      });
      const sessionToken = response.data["session token"];
      const refreshToken = response.data["refresh token"];
      localStorage.setItem("JWT_SESSION", sessionToken);
      localStorage.setItem("JWT_REFRESH", refreshToken);
    }
    catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);
    }
  }
  // Function to schedule the API call every 1.5 hours
  function scheduleApiCall() {
    // const interval = 1.5 * 60 * 60 * 1000; // 1.5 hours in milliseconds
    const interval = 1*60*1000; //1 min

    // Call the API immediately when the function is executed
    // tokenRefresh();

    // Set up the interval to call the API repeatedly
    setInterval(tokenRefresh, interval);
  }

return (
    <main className={styles.page}>
      <SideBar
        showAddLists={showAddLists}
        messageArray={messageArray}
        choosedList={handleListClick}
        onListCreated={fetchLists} // Pass the fetchLists function as a prop
      />
      <section className="mainContent">
        {listExists ? choosedListVar ? <MainContent currentList={choosedListVar} onListDelete={fetchLists}/> : <h2>CHOOSE A LIST FROM A SIDEBAR BELOW + ICON</h2> : <Tutorial />}
        {addListVar ? <CreateTaskDiv onClose={hideAddLists} onListCreated={fetchLists} /> : ""} {/* Pass it to CreateTaskDiv too */}
      </section>
    </main>
  )
}

export default Dashboard;
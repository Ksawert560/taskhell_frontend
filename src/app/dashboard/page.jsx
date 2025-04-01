'use client'
import React, { useRef } from "react";
import styles from "../../app/main.css";
import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';
import CreateTaskDiv from "../components/CreateTask";
import axios from "axios";
import SideBar from "../components/SideBar";
import themeSwitcher from "@/functions/themeSwitcher";


function Dashboard(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addListVar, setAddListVar] = useState(false)

  useEffect(() => {
    themeSwitcher()
    const jwtSession = localStorage.getItem('JWT_REFRESH');

    if (!jwtSession) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }

  function showAddLists(){
    setAddListVar(true)
  }
  function hideAddLists(){
    setAddListVar(false)
  }

return (
  <main className={styles.page}>
      <SideBar showAddLists={showAddLists}/>
      <section className="mainContent">
      <div className="tutorial">
        <h2>ADD YOUR FIRST TO-DO-LIST</h2>
        <p>Click on + icon on the sidebar to add to-do-list</p>
      </div>
      {addListVar ? <CreateTaskDiv onClose={hideAddLists}/> : ""}
    </section>
  </main>
  )
}

export default Dashboard;
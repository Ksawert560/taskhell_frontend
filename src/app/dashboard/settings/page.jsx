'use client'
import React, { useRef } from "react";
import styles from "../../../app/main.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';


function Dashboard(){
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const settingsMenuRef = useRef(null);

  useEffect(() => {
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
  function handleLogout() {
    localStorage.removeItem('JWT_REFRESH');
    localStorage.removeItem('JWT_SESSION');  
    router.push('/');
  }

  function addLists(){
    alert("Add your first list");
  }
  function showSettings(){
    if (settingsMenuRef.current) {
        settingsMenuRef.current.style.zIndex = "99";
    }
  }
  function hideSettings(){
    if (settingsMenuRef.current) {
        settingsMenuRef.current.style.zIndex = "-10";
    }
  }
  function goToDashboard(){
    router.push("/dashboard")
  }
  const avatar = localStorage.getItem("userAvatar");
    return (
    <main className={styles.page}>
        <section className="sideBar">
            <div className="userMenu">
            {avatar && (
                <div className="userAvatar" onMouseOver={showSettings} onMouseOut={hideSettings} onClick={goToDashboard} dangerouslySetInnerHTML={{ __html: avatar }} />
            )}
            <div ref={settingsMenuRef} className="settingsHover">
                <div>
                    <p>dashboard</p>
                </div>
            </div>
            </div>
            <div className="tasksLists">
                <svg className="addList" onClick={addLists} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
            </div>
            <div className="logOut" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
            </div>
        </section>
        <section className="mainContent">
            <div className="tutorial">
                <h2>SETTINGS</h2>
                <p>----------------</p>
            </div>
        </section>
    </main>
    )
}

export default Dashboard;
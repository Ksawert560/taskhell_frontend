'use client'
import React from "react";
import Nav from "../components/Nav";
import styles from "../../app/main.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


function Dashboard(){
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const jwtSession = localStorage.getItem('JWT_REFRESH');
    const savedAvatar = localStorage.getItem('userAvatar')

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
    return null; // Or a message like "Redirecting..."
  }
  function handleLogout() {
    localStorage.removeItem('JWT_REFRESH');
    localStorage.removeItem('JWT_SESSION');  
    router.push('/');
  }

  if (localStorage.getItem("userAvatar")){
    console.log("Avatar exists");
  }
  const avatar = localStorage.getItem("userAvatar");
    return (
    <main className={styles.page}>
        <section className="sideBar">
            {avatar && (
                <div className="userAvatar" dangerouslySetInnerHTML={{ __html: avatar }} />
            )}
            <div className="tasksLists">

            </div>
            <div className="logOut" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
            </div>
        </section>
        <section className="mainContent">
            <div className="tutorial">
                <h2>ADD YOUR FIRST TO-DO-LIST</h2>
                <p>Click on + icon on the sidebar to add to-do-list</p>
            </div>
        </section>
    </main>
    )
}

export default Dashboard;
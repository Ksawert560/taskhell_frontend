'use client'
import React from "react";
import styles from "../../../app/main.css";
import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';
import SideBar from "@/app/components/SideBar";
import ChangeUsernameDiv from "@/app/components/ChangeUsername";
import ChangePasswordDiv from "@/app/components/ChangePassword";
import ChangeTheme from "@/app/components/ChangeTheme";
import ChangeLocation from "@/app/components/ChangeLocation";
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
        <div className="settingsWrap">
          <ChangeUsernameDiv />
          <ChangePasswordDiv />
          <ChangeLocation />
          <ChangeTheme />
        </div>
      </section>
    </main>
  )
}

export default Dashboard;
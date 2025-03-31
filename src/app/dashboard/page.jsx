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
        </section>
    </main>
    )
}

export default Dashboard;
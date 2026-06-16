'use client'
import React, { useRef } from "react";
import styles from "../../app/main.css";
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect} from 'react';
import axios from "axios";
import ListIcon from "../components/ListIcon";


function SideBar({showAddLists, messageArray, choosedList, currentList }){
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const settingsMenuRef = useRef(null);
  const [currentPlace, setCurrentPlace] = useState("");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

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

  useEffect(() => {
    const jwtSession = localStorage.getItem('JWT_REFRESH'); //load sesstion token on load

    if (!jwtSession) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
    if(pathname=="/dashboard") setCurrentPlace("settings");
    else if(pathname=="/dashboard/settings") setCurrentPlace("dashboard");

    }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) { //check if user is authenticated
    return null;
  }
  //function for handling a logout
  async function handleLogout() {
    try {
      let response = await axios.post(`${process.env.SERVER_URL}/logout`, null, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("JWT_REFRESH")}`,
            'Content-Type': 'application/json'
          }
        });
      localStorage.removeItem('JWT_REFRESH');
      localStorage.removeItem('JWT_SESSION');
      localStorage.removeItem("firstLogin")
      localStorage.removeItem('intervalToken')
      router.push('/');
    }
    catch (error) {
        console.error('Error while sending data:', error);
    }
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
  function goTo(){
    if(pathname=="/dashboard"){
        router.push("/dashboard/settings")
    }
    else{
        router.push("/dashboard")
    }

  }
const avatar = localStorage.getItem("userAvatar"); //load avatar from local storage

function showMobileMenu(){
  setMobileMenuVisible(true);
}
function hideMobileMenu(){
  setMobileMenuVisible(false);
}
function mobileListClick(listID){
  choosedList(listID);
  hideMobileMenu();
}

return (
    size.width > 1000 ? (
    <section className="sideBar" style={styles.page}>
      <div className="userMenu">
              {avatar && (
              <div className="userAvatar" onMouseOver={showSettings} onMouseOut={hideSettings} onClick={goTo} dangerouslySetInnerHTML={{ __html: avatar }} />
              )}
          <div ref={settingsMenuRef} className="settingsHover">
              <div>
                  <p>{currentPlace}</p>
              </div>
          </div>
      </div>
      <div className="tasksLists">
    {pathname=="/dashboard"?  <svg className="addList" onClick={showAddLists} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg> : null}
        {messageArray && messageArray.map((item, index) =>(
          <ListIcon key={item.id} listName={index+1} name={item.id} choosedList={choosedList} currentList={currentList} />
        ))}
      </div>
      <div className="logOut" onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
      </div>
  </section>
  ) : (
    <div>
      <svg className="mobileDashboardMenuBtn" onClick={showMobileMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
      {mobileMenuVisible ? (
        <div className="mobileMenuDashboard">
        <svg className="mobileMenuClose" onClick={hideMobileMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          {pathname=="/dashboard"? (
          <div className="mobileMenuDashboardLists">
          <h4>Your lists</h4>
            {messageArray && messageArray.map((item, index) =>(
            <p key={item.id} name={item.id} onClick={() => mobileListClick(item.id)} >List {index + 1}</p>
            ))}
            <p onClick={showAddLists} >add new list</p>
          </div>
          ) : null}
          <p onClick={goTo} >{pathname=="/dashboard"? "go to settings" : "go to dashboard"}</p>
          <p onClick={handleLogout} >log out</p>
        </div>
      )
        : null
      }
    </ div>

  )

  )
}

export default SideBar;
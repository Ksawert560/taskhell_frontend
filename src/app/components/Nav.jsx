'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import Link from "next/link";
import TaskHellLogo from "../../../public/logo/taskhell_concept.svg";


function Nav() {
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
  
  
  const [hiddenMenu, setHiddenMenu] = useState(null);
  const [closeMenuIcon, setCloseMenuIcon] = useState(null);
  const size = useWindowSize();

  useEffect(() => {
    setHiddenMenu(document.getElementsByClassName("hiddenMenu")[0]);
    setCloseMenuIcon(document.getElementsByClassName("menuClose")[0]);
  }, []);

  function showMenu() {
    hiddenMenu.style.display = "flex";
    closeMenuIcon.style.display = "flex";
  }
  function hideMenu() {
    setTimeout(() => {
      hiddenMenu.style.display = "none";
      closeMenuIcon.style.display = "none !important";
    }, 200);
  }

  if(size.width>1000){
    hideMenu();
  }

  return (
    <nav className={styles.page}>
      <div className="logo">
        <Link href="/">
          <TaskHellLogo />
          <h1>TaskHell</h1>
        </Link>
      </div>

      <section className="menu">
      <ul className="mainMenuList">
        <li>
          <Link href="/about">[about]</Link>
        </li>
        <li>
          <Link href="/login">[sign in]</Link>
        </li>
        <li>
          <Link href="/register">[register]</Link>
        </li>
      </ul>
      <svg className="hiddenMenuBtn" onClick={showMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
      </section>
      <section className="hiddenMenu">
      <svg className="menuClose" onClick={hideMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        <ul>
          <li>
            <Link href="/" onClick={hideMenu}>[home]</Link>
          </li>
          <li>
            <Link href="/about" onClick={hideMenu}>[about]</Link>
          </li>
          <li>
            <Link href="/login" onClick={hideMenu}>[sign in]</Link>
          </li>
          <li>
            <Link href="/register" onClick={hideMenu}>[register]</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
'use client';
import React, { useState, useRef } from "react";
import styles from "../../app/main.css";
import themeSwitcher from "@/functions/themeSwitcher";

function ChangeTheme() {
  const lightButtonRef = useRef(null);
  const darkButtonRef = useRef(null);
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("THEME") || "light"); // Initialize with saved theme or default

  function switchToLight() {
    localStorage.setItem("THEME", "light");
    setSelectedTheme("light");
    themeSwitcher()
  }

  function switchToDark() {
    localStorage.setItem("THEME", "dark");
    setSelectedTheme("dark");
    themeSwitcher()
  }

  return (
    <section className="changeThemeDiv" style={styles.page}>
      <h2>CHANGE THEME</h2>
      <div className="buttonWrap">
        <div
          className={`buttonTheme ${selectedTheme === 'light' ? 'selectedTheme' : ''}`}
          name="light"
          onClick={switchToLight}
          ref={lightButtonRef} // Use useRef
        >
          light
        </div>
        <div
          className={`buttonTheme ${selectedTheme === 'dark' ? 'selectedTheme' : ''}`}
          name="dark"
          onClick={switchToDark}
          ref={darkButtonRef} // Use useRef
        >
          dark
        </div>
      </div>
    </section>
  );
}

export default ChangeTheme;
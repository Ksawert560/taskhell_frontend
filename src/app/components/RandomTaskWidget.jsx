'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";

function RandomTaskWidget() {

  return (
    <section className="randomTaskWraper" style={styles.page}>
        <h2>BORED?</h2>
        <p>Generate a completely random task. <br/>Why? Why not? Try it out</p>
        <div className="randomTaskButton">RANDOM TASK</div>
    </section>
  );
}

export default RandomTaskWidget;
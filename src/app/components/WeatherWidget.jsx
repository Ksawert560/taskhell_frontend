'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";
import CurrentDateTime from "./CurrentDateTime";


function WeatherWidget() {

  return (
    <section className="weatherWraper" style={styles.page}>
        <CurrentDateTime />
    </section>
  );
}

export default WeatherWidget;
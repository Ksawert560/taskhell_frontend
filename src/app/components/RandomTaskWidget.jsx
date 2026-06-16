'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";
import randomTaskGenerator from "@/functions/randomTaskGenerator";

function RandomTaskWidget() {
  const [isRandomTaskCreated, setIsRandomTaskCreated] = useState(false);
  const [randomTask, setRandomTask] = useState(null)
  useEffect(() =>{
    if(localStorage.getItem("randomTask")){
      setRandomTask(localStorage.getItem("randomTask"));
      setIsRandomTaskCreated(true)
    }
  },[])

  function handleButtonClick(){
    setIsRandomTaskCreated(true)
    const generatedTask = randomTaskGenerator();
    setRandomTask(generatedTask.randomTask);
    localStorage.setItem("randomTask", generatedTask.randomTask);
  }

  return (
    <section className="randomTaskWraper" style={styles.page}>
        <h2>BORED?</h2>
        {isRandomTaskCreated? <p>{randomTask}</p> : <p>Generate a completely random task. <br/>Why? Why not? Try it out</p>}
        <div className="randomTaskButton" onClick={handleButtonClick}>RANDOM TASK</div>
    </section>
  );
}

export default RandomTaskWidget;
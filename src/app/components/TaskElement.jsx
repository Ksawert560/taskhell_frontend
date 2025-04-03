'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
function TaskElement({ taskName, choosedList }) {
    return(
    <div className="taskElement" style={styles.page}>
        <div className="bigCirle"></div>
        <div className="taskContent">
            <p>{taskName}</p>
            <svg className="taskElementMenu" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
        </div>
    </div>
    );
}

// onClick={() => choosedList(listName)}
export default TaskElement;
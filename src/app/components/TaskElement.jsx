'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
function TaskElement({ taskName, choosedList }) {
    return(
    <div className="taskElement" style={styles.page}>
        <p>{taskName}</p>
    </div>
    );
}

// onClick={() => choosedList(listName)}
export default TaskElement;
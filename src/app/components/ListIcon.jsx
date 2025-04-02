'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
function ListIcon({ listName, choosedList }) {
    return(
    <div className="listDivIcon" style={styles.page} name={listName} onClick={() => choosedList(listName)}>
        <p>{listName}</p>
    </div>
    );
}

export default ListIcon;
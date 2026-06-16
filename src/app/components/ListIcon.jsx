'use client';
import React from "react";
import styles from "../../app/main.css";

function ListIcon({ listName, choosedList, currentList }) {
  const isSelected = currentList === listName; //check if current list = to list name
  const backgroundColor = isSelected ? 'var(--primary)' : ''; //set background color to --primary

  return(
    <div
      className="listDivIcon"
      style={{ ...styles.page, backgroundColor: backgroundColor }}
      name={listName}
      key={listName}
      onClick={() => choosedList(listName)} //sends the name of the list to the function then it's send to the mainConetnet.jsx to load tasks related to that list
    >
      <p>{listName}</p>
    </div>
  );
}

export default ListIcon;
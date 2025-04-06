'use client';
import React, { useState, useRef, useEffect } from "react";
import styles from "../../app/main.css";
import EditTaskDiv from "./EditTask";


function TaskElement({ taskID, taskName, onTaskDelete, showEditTask, hideEditTask, isEditTaskVisible}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const hiddenMenuRef = useRef(null);

  useEffect(() => {
    setIsMenuVisible(false); //sets an false value on load
  }, [])

//function to show hidden menu
  function handleShowMenu(){
    setIsMenuVisible(true);
  };
//function to hide hidden menu
  function handleCloseMenu(){
    setIsMenuVisible(false);
  };


  return(
    <div className="taskElement" style={styles.page}>
      <div className="bigCirle"></div>
      <div className="taskContent">
        <p>{taskName}</p>
        <svg onClick={handleShowMenu} className="taskElementMenu" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
      </div>
      {isMenuVisible ? (
        <div ref={hiddenMenuRef} className="taskElementHiddenMenu">
          <svg onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          <p onClick={showEditTask}>edit</p>
          <p onClick={() => onTaskDelete(taskID)}>delete</p>
        </div>
      ) : null}
      {isEditTaskVisible ? (
        <EditTaskDiv 
          onClose={hideEditTask}
          taskID={taskID} 
          taskName={taskName}
          showEditTask={showEditTask} 
          hideMenu={handleCloseMenu}
        />
      ) : null}
    </div>
  );
}

export default TaskElement;
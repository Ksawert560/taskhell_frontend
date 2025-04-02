'use client'
import React, { useRef } from "react";
import styles from "../../app/main.css";
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect} from 'react';
import axios from "axios";
import CreateTaskDiv from "./CreateTask";
import themeSwitcher from "@/functions/themeSwitcher";
import TaskElement from "./TaskElement";

function MainContent({currentList}){
    themeSwitcher();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [messageArray, setMessageArray] = useState([]); // Initialize as an empty array
    const [addTask, setAddTask] = useState(false)

    useEffect(() => {
        themeSwitcher()
        const jwtSession = localStorage.getItem('JWT_REFRESH');
    
        if (!jwtSession) {
          router.push('/');
        } else {
          setIsAuthenticated(true);
        }
        const fetchTasks = async () => {
            let listID = parseInt(currentList)
            try {        
                let response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("JWT_SESSION")}`,
                        'Content-Type': 'application/json',
                    },
                    params:{
                        "list": listID,
                    }
                });
                setMessageArray(response.data.message);
            } 
            catch (error) {
            }
        };
        setIsLoading(false);
        if (isAuthenticated) {
          fetchTasks();
        }
      }, [router, isAuthenticated, currentList]);
    
    function showCreateTask(){
        setAddTask(true)
    }
    function hideCreateTask(){
        setAddTask(false)
    }
        
return (
    <section className="bentoWraper" style={styles.page}>
            {addTask ? <CreateTaskDiv onClose={hideCreateTask} listID={currentList}/> : ""}
        <section className="tasksWraper">
            <div className="listHeader">
                <h2>TO-DO</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
            </div>
            <div className="taskList">
            {messageArray && messageArray.map(item =>(
                <TaskElement key={item.id} taskName={item.task} name={item.task} choosedList={currentList} />
            ))}
            </div>
            <div className="createTaskButton" onClick={showCreateTask}>
                CREATE
            </div>
        </section>
        <section className="widgetWraper">
isdafbha
        </section>
    </section>
)
}

export default MainContent;
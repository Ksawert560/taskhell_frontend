'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";

function CreateTaskDiv({ onClose, listID, setShowPopUp, setPopUpOption }) {
    const [userError, setUserError] = useState(null);
    const [errorMsg, setErrorMessage] = useState("empty");



const [formData, setFormData] = useState({
    listid: listID,
    task: '',
});
    
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
useEffect(() => {
    setUserError(document.getElementsByClassName("errorMsg")[0]);
}, []);

function isEmpty() {  
    if (formData.task === "") {
      setErrorMessage("Please enter a name");
      userError.style.visibility = "visible";
      return false;
    } 
    return true;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    if(isEmpty()){
      try {
        const data = new FormData();
        data.append('list id', listID)
        data.append('task', formData.task);
        const jsonData = {};
        data.forEach((value, key) => (jsonData[key] = value));

        const jsonString = JSON.stringify(jsonData);

        let response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`, jsonString, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("JWT_SESSION")}`,
                'Content-Type': 'application/json',
            }
        });
        setShowPopUp(true);
        setPopUpOption("task");
        onClose();
    } 
    catch (error) {
    }
    }
  };


  return (
    <section className="createListContainer inTheMiddle" style={styles.page}>
        <div>
            <h2>CREATE NEW TASK</h2><svg className="menuClose" onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        </div>
        <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="task" onChange={handleChange} value={formData.task}/>
                <p className="errorMsg">{errorMsg}</p>
                <input type="submit" name="create" value="CREATE"/>
        </form>
    </section>
  );
}

export default CreateTaskDiv;
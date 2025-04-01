'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";

function ChangeUsernameDiv() {
    const [userError, setUserError] = useState(null);
    const [errorMsg, setErrorMessage] = useState("empty");



const [formData, setFormData] = useState({
    username: '',
});
    
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
useEffect(() => {
    setUserError(document.getElementsByClassName("errorMsg")[0]);
}, []);

function isEmpty() {  
    if (formData.listName === "") {
      setErrorMessage("Please enter a new name");
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
        data.append('name', formData.username);
        const jsonData = {};
        data.forEach((value, key) => (jsonData[key] = value));

        const jsonString = JSON.stringify(jsonData);
        console.log(jsonString);

        let response = await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, jsonString, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("JWT_SESSION")}`,
                'Content-Type': 'application/json',
            }
        });
    } 
    catch (error) {
    }
    }
  };


  return (
    <section className="changeUsernameDiv" style={styles.page}>
        <div>
            <h2>CHANGE USERNAME</h2>
        </div>
        <form onSubmit={handleSubmit}>
                <input type="text" name="listName" placeholder="new username" onChange={handleChange} value={formData.username}/>
                <p className="errorMsg">{errorMsg}</p>
                <input type="submit" name="change" value="CHANGE"/>
        </form>
    </section>
  );
}

export default ChangeUsernameDiv;
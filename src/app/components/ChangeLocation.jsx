'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";

function ChangeLocation() {
    const [userError, setUserError] = useState(null);
    const [errorMsg, setErrorMessage] = useState("empty");



const [formData, setFormData] = useState({
    location: '',
});
    
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
useEffect(() => {
    setUserError(document.getElementsByClassName("errorMsg")[0]);
}, []);

function isEmpty() {  
    if (formData.listName === "") {
      setErrorMessage("Please enter a city name. For example: Warsaw");
      userError.style.visibility = "visible";
      return false;
    } 
    return true;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    if(isEmpty()){
      localStorage.setItem("location", formData.location);
    }
  };


  return (
    <section className="changeLocation" style={styles.page}>
        <h2>SET LOCATION</h2>
        <form onSubmit={handleSubmit}>
                <input type="text" name="location" placeholder="e.g Warsaw" onChange={handleChange} value={formData.location}/>
                <p className="errorMsg">{errorMsg}</p>
                <input type="submit" name="change" value="CHANGE"/>
        </form>
    </section>
  );
}

export default ChangeLocation;
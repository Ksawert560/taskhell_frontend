'use client'
import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import styles from "../../app/main.css";
import Link from "next/link";
import axios from "axios";


function Login(){
    const [userError, setUserError] = useState(null);
    const [errorMsg, setErrorMessage] = useState("empty");

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    useEffect(() => {
      // Ten kod wykona się dopiero w przeglądarce
      setUserError(document.getElementsByClassName("errorMsg")[0]);
    }, []);

    function isEmpty() {  
      if (formData.username === "") {
        setErrorMessage("Please enter a username");
        userError.style.visibility = "visible";
        return false;
      } 
      else{
        userError.style.visibility = "hidden";
      }
      
      if (formData.password === "") {
        setErrorMessage("Please enter a password");
        userError.style.visibility = "visible";
        return false;
      }
      else{
        userError.style.visibility = "hidden";
      }
      return true;
    }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isEmpty()){
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: formData.username,
                passowrd: formData.password
              }, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            )
            console.log('Dane wysłane pomyślnie!', response.data);
        } 
        catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);
        }
    }
  };

    return (
    <main className={styles.page}>
    <Nav />
        <section className="loginSection">
            <div className="loginChooser">
                <Link href={"/login"} className="loginOption loginSelected">LOGIN</Link>
                <Link href={"/register"} className={"loginOption"}>REGISTER</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={handleChange} value={formData.username}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange} value={formData.password}/>
                <p className="errorMsg">{errorMsg}</p>
                <input type="submit" name="signin" value="SIGN IN"/>
            </form>
        </section>
    </main>
    )
}

export default Login;
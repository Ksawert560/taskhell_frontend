'use client'
import React from "react";
import Nav from "../components/Nav";
import styles from "../../app/main.css";
import Link from "next/link";
import { useState, useEffect} from 'react';
import themeSwitcher from "@/functions/themeSwitcher";

function About(){
    useEffect(() => {
        themeSwitcher(); // Ensures it runs only on the client
    }, []);
    return (
    <main className={styles.page}>
        <Nav />
        <section className="aboutSection">
            <h2>About the project</h2>
            <p> 
                Taskhell is an idea that sprouted up between the three of us on a <s>brisk and sunny</s> rainy and depressing morning. 
                <span className="lowOpacity">[we're living in an Eastern block country, vitamin D doesn't exist here, just like our hopes and dreams]</span>
            </p>
            <p>
                You want an easy and intuitive way to manage your tasks? How about you manage your expectations. Our mission was to create an annoying experience for our users that prevents them from
                reaching their daily goals. Perhaps you'd like to add a new item to your to-do list? Well tough luck, get ready to go outside and touch grass first before you can even begin 
                thinking about writing down whatever it is you actually have to do. <br></br>
            </p>
            <p>
                This website was developed for an university course final assignment. The frontend was built using Next.js and the backend was handled with PHP, which allowed us to remain
                compliant with the project requirements, while still leaving some room to introduce some complexity.
            </p>
            <h2>About the authors</h2>
            <div className="githubProfiles">
                <Link href="https://github.com/Ksawert560" target="_blank" title="Ksawert"><img src="githubImg/ksawert.png" alt="Ksawert560" className="githubPicture"></img></Link>
                <span> Ksawery Kucz - responsible for creating the app's smooth and modern design, as well as building the frontend.</span>
            </div>
            <div className="githubProfiles">
            <Link href="https://github.com/TestkaJakub" target="_blank" title="TestkaJakub"><img src="githubImg/pseu.png" alt="TestkJakub" className="githubPicture"></img></Link>
                <span> Jakub Testka - expertly handled the backend, decided to elegantly throw XAMPP out of the window in favor of Docker, God bless that decision. </span>
            </div>
            <div className="githubProfiles">
                <Link href="https://github.com/mskubarc" target="_blank" title="mskubarc"><img src="githubImg/mskubarc.png" alt="mskubarc" className="githubPicture"></img></Link>
                <span> Miłosz Skubarczewski - took part in the design process, took care of typewriting and the project's presentation. </span>
            </div>
        </section>
    </main>
    )
}

export default About;
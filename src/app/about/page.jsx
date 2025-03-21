import React from "react";
import Nav from "../components/Nav";
import styles from "../../app/main.css";
import Link from "next/link";

function About(){
    return (
    <main className={styles.page}>
        <Nav />
        <section className="aboutSection">
            <h2>About project</h2>
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, augue ac suscipit sodales, lectus turpis consequat nibh, eu faucibus odio massa eget lacus. Praesent risus magna, vestibulum quis scelerisque vel, iaculis in enim. Sed tristique nulla fringilla, imperdiet purus sit amet, pretium orci. Pellentesque ac ante laoreet, iaculis turpis vel, pharetra diam. Donec elementum, dolor eget porta fermentum, purus enim suscipit eros, eget commodo ex justo et odio. Nunc lacinia, enim et interdum venenatis, elit nulla vulputate tortor, non sollicitudin urna tellus sed ligula. Cras ex felis, scelerisque et justo ac, malesuada interdum arcu. In pulvinar augue ac euismod porttitor. Integer id malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non risus consequat, ultrices sapien quis, sollicitudin elit. Aliquam aliquet velit sapien, sit amet blandit mi aliquam a. Aenean sed feugiat elit, nec malesuada ligula.
            Duis dapibus ipsum non ipsum venenatis malesuada. Fusce ultrices leo nisi, eu facilisis nulla blandit quis. Duis sed purus mattis, pharetra felis et, consequat nibh. Vivamus blandit nisl dignissim interdum ornare. Sed dictum magna quis massa dictum tincidunt. Morbi sed maximus justo, id scelerisque arcu. Vivamus et dictum neque. In viverra enim quis facilisis ultricies. Aenean gravida viverra augue eget lobortis. Pellentesque eleifend sagittis consequat. Donec eget mattis mi, vitae euismod risus. Quisque imperdiet a eros dapibus lacinia. Nulla vestibulum commodo nibh vitae lobortis. Integer aliquam venenatis metus, eget pellentesque ante ultricies eu. Nunc sagittis mauris vel porttitor pellentesque. Ut a feugiat diam. 
            </p>
            <h2>About authors</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, augue ac suscipit sodales, lectus turpis consequat nibh, eu faucibus odio massa eget lacus. Praesent risus magna, vestibulum quis scelerisque vel, iaculis in enim. Sed tristique nulla fringilla, imperdiet purus sit amet, pretium orci. Pellentesque ac ante laoreet, iaculis turpis vel, pharetra diam. Donec elementum, dolor eget porta fermentum, purus enim suscipit eros, eget commodo ex justo et odio. Nunc lacinia, enim et interdum venenatis, elit nulla vulputate tortor, non sollicitudin urna tellus sed ligula. Cras ex felis, scelerisque et justo ac, malesuada interdum arcu. In pulvinar augue ac euismod porttitor. Integer id malesuada ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non risus consequat, ultrices sapien quis, sollicitudin elit. Aliquam aliquet velit sapien, sit amet blandit mi aliquam a. Aenean sed feugiat elit, nec malesuada ligula.
            Duis dapibus ipsum non ipsum venenatis malesuada. Fusce ultrices leo nisi, eu facilisis nulla blandit quis. Duis sed purus mattis, pharetra felis et, consequat nibh. Vivamus blandit nisl dignissim interdum ornare. Sed dictum magna quis massa dictum tincidunt. Morbi sed maximus justo, id scelerisque arcu. Vivamus et dictum neque. In viverra enim quis facilisis ultricies. Aenean gravida viverra augue eget lobortis. Pellentesque eleifend sagittis consequat. Donec eget mattis mi, vitae euismod risus. Quisque imperdiet a eros dapibus lacinia. Nulla vestibulum commodo nibh vitae lobortis. Integer aliquam venenatis metus, eget pellentesque ante ultricies eu. Nunc sagittis mauris vel porttitor pellentesque. Ut a feugiat diam. 
            </p>
        </section>
    </main>
    )
}

export default About;
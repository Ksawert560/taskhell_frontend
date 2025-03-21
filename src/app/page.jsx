'use client';
import React from "react";
import Image from "next/image";
import styles from "./main.css";
import Link from 'next/link';
import Nav from "./components/Nav";

export default function Page() {
  return (
    <main className={styles.page}>
    <Nav />
    <section className="hero">
      <div className="bigText">
        <h1>
          DULL YOUR <span className="primary">THINKING</span>.<br />
          <span className="primary">FREE</span> YOUR MIND.
        </h1>
      </div>
      <div className="smallText">
        <p>
          Free and unflexible app to ruin your day and destroy your productivity because
          we hate to-do-lists. <span className="lowOpacity">[not really]</span>
          <br />
          From the team that brought you nothing and uses vikunja.
          <span className="lowOpacity">[why though?]</span>
        </p>
      </div>

      <Link href="/login" className="button">Get Started</Link>
    </section>
  </main>
  );
}

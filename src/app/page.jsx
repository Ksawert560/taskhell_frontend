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
          DULL YOUR <span className="primary">THINKING</span>.
        </h1>
        <h1>
          <span className="primary">FREE</span> YOUR MIND.
        </h1>
      </div>
      <div className="smallText">
        <p>
          Free and unflexible app to destroy your will and productivity cause
          we hate to-do-lists. <span className="lowOpacity">[not really tho]</span>
          <br />
          From the team that brought you nothing and uses vikunja.
          <span className="lowOpacity">[why tho?]</span>
        </p>
      </div>

      <Link href="/login" className="button">Get Started</Link>
    </section>
  </main>
  );
}

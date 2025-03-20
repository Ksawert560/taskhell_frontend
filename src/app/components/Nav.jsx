'use client';
import React from "react";
import styles from "../../app/main.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.page}>
      <h1>
        <Link href="/">TaskHell</Link>
      </h1>
      <ul>
        <li>
          <Link href="/about">[about]</Link>
        </li>
        <li>
          <Link href="/login">[sign in]</Link>
        </li>
        <li>
          <Link href="/register">[register]</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
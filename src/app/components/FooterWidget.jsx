'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";
import Link from "next/link";
import imgKsawert from "../../../public/githubImg/ksawert.png"

function FooterWidget() {

  return (
    <section className="footerWraper" style={styles.page}>
        <h3>Our Github profiles</h3>
        <div className="footerImgWraper">
            <Link href="https://github.com/Ksawert560" target="_blank" title="Ksawert">
                <img src="githubImg/ksawert.png" />
            </Link>
            <Link href="https://github.com/mskubarc" target="_blank" title="mskubarc">
                <img src="githubImg/mskubarc.png" />
            </Link>
            <Link href="https://github.com/TestkaJakub" target="_blank" title="TestkaJakub">
                <img src="githubImg/pseu.png"  />
            </Link>
        </div>
        <p>Feel free to buy us an energy drink or coffee</p>
    </section>
  );
}

export default FooterWidget;
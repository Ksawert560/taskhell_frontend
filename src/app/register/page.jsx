import React from "react";
import Nav from "../components/Nav";
import styles from "../../app/main.css";
import Link from "next/link";

function Login(){
    return (
    <main className={styles.page}>
    <Nav />
        <section>
            <div>
                <div>
                    <Link href={"/login"}>LOGIN</Link>
                </div>
                <div>
                    <Link href={"/register"}>REGISTER</Link>
                </div>
            </div>
            <form method="POST" action="">
                <input type="text" name="username" placeholder="username" />
                <input type="text" name="password" placeholder="password" />
            </form>
        </section>
    </main>
    )
}

export default Login;
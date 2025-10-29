"use client";
import Navbar from "../components/Navbar";
import styles from "../page.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>Learn more about our mission and team.</p>
      </main>
    </div>
  );
}

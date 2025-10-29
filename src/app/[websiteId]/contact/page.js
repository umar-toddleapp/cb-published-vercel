"use client";
import Navbar from "../components/Navbar";
import styles from "../page.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information.</p>
      </main>
    </div>
  );
}

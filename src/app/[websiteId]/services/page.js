"use client";
import Navbar from "../components/Navbar";
import styles from "../page.module.scss";

export default function Services() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>Our Services</h1>
        <p>Discover the services we offer with a beautiful UI.</p>
      </main>
    </div>
  );
}

"use client";
import Navbar from "../../components/Navbar";
import styles from "./page.module.scss";

export default function Website({ params }) {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>Dynamic Website: {params.websiteId}</h1>
        <p>This is a dynamic route for websiteId.</p>
      </main>
    </div>
  );
}

"use client";
import Navbar from "../components/Navbar";
import styles from "../page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>Welcome Home!</h1>
        <p>This is a beautiful home page with modern UI.</p>
      </main>
    </div>
  );
}

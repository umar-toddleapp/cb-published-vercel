import Navbar from "../../components/Navbar";
import styles from "./page.module.scss";

export default function Website() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <h1>Dynamic Website</h1>
        <p>This is a dynamic route for websiteId.</p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  // Example: fetch website IDs from an API or define statically
  // Replace with your own logic as needed
  return [{ websiteId: "" }];
}

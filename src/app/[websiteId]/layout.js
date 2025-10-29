"use client";
import Navbar from "../../components/Navbar";
import styles from "./layout.module.scss";

export default function WebsiteLayout({ children, params }) {
  // Determine active tab from pathname
  // This is a simple example, you may want to use usePathname from 'next/navigation' for more control
  return (
    <div className={styles.container}>
      <Navbar websiteId={params.websiteId} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

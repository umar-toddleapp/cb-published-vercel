"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

const tabs = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
  { name: "Services", path: "services" },
];

export default function Navbar({ websiteId }) {
  const pathname = usePathname();
  const activeTab =
    tabs.find(tab => pathname.endsWith(tab.path))?.path || "home";

  return (
    <nav className={styles.navbar}>
      {tabs.map(tab => (
        <Link
          key={tab.path}
          href={`/${websiteId}/${tab.path}`}
          className={activeTab === tab.path ? styles.active : styles.tab}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}

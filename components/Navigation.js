import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </nav>
    </header>
  );
}

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Made with{" "}
        <img
          src="/netliheart.svg"
          alt="Netlify Logo"
          className={styles.netlifyLogo}
        />
      </div>
    </footer>
  );
}

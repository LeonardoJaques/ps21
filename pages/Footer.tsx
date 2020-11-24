import styles from "../styles/Footer.module.css";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/Leonardojaques1">LinkedIn</a>
      <a href="https://twitter.com/lajaques">Twitter</a>
      <a href="https://www.behance.net/LJaques/">Behance</a>
      <p className={styles.copyright}> copyright © {date} Leonardo jaques.</p>
      <hr className={styles.line} />
    </footer>
  );
}

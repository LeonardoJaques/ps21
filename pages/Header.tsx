import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logoText}>Leoanardo Jaques</span>{" "}
      <nav>
        <ul>
          <li className={styles.separator}>
            <a href="#" title="blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" title="sobre">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" title="contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

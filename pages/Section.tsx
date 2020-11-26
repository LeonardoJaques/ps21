import React from "react";
import styles from "../styles/Section.module.css";

export default function Section(props) {
  return (
    <section className={styles.section}>
      <header className={styles.container}>
        <div className={styles.svg}> {props.icon}</div>
        <div className={styles.title}>{props.title}</div>
      </header>
      <hr className={styles.line} />
      <div className={styles.text}>{props.text}</div>
      <div>
        {props.subtitle}
        <br />
      </div>
      <div>{props.postText}</div>
      <div>{props.imgURl}</div>
    </section>
  );
}

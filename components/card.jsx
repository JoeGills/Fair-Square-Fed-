import styles from "./card.module.css";

export default function Card({ title, text, children }) {
  return (
    <>
      <div className={styles.card}>
        {/* <div className={styles.cardIcon}>{children}</div> */}
        <div className={styles.cardTitle}>{title}</div>
        <text>{text}</text>
      </div>
    </>
  );
}

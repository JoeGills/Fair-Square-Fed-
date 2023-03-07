import styles from "./card.module.css";
import {
  MdOutlineSecurity,
  MdStackedLineChart,
  FaBalanceScale,
} from "react-icons/md";

export default function Card({ icon, title, text }) {
  return (
    <>
      <div className={styles.card}>
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

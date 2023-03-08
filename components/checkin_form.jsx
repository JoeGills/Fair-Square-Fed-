import styles from './checkin_form.module.css';

export default function CheckInForm({ children, title, text }) {
  return (
    <>
      <div className={styles.checkInForm}>
        <div className={styles.formTitle}>
          {children}
          {title}
        </div>
        <ul className={styles.formLabel}>
          <li className={styles.formList}>
            <input type="checkbox" id="checkbox"></input>
            <label htmlFor="checkbox">{text}</label>
          </li>
          <li className={styles.formList}>
            <input type="checkbox" id="checkbox"></input>
            <label htmlFor="checkbox">{text}</label>
          </li>
          <li className={styles.formList}>
            <input type="checkbox" id="checkbox"></input>
            <label htmlFor="checkbox">{text}</label>
          </li>
        </ul>
        <button type="submit" id="button" className={styles.formButton}>
          Start
        </button>
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layout/default-layout";
import FormLayout from "../../components/layout/form-layout";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-bg">
        <FormLayout title="Want to make your company Fair & Square?Login using your company email.">
          <ul className={styles.formLabel}>
            <li className={styles.formList}>
              <input type="checkbox" id="checkbox"></input>
              <label htmlFor="checkbox">jkhgjkh</label>
            </li>
            <li className={styles.formList}>
              <input type="checkbox" id="checkbox"></input>
              <label htmlFor="checkbox">jhgk,jn</label>
            </li>
            <li className={styles.formList}>
              <input type="checkbox" id="checkbox"></input>
              <label htmlFor="checkbox">nhffjhg</label>
            </li>
          </ul>
          <button type="submit" id="button" className={styles.formButton}>
            Start
          </button>
        </FormLayout>
      </div>
    </DefaultLayout>
  );
}

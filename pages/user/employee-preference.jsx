import Head from "next/head";
import { useState } from "react";
import DefaultLayout from "../../components/layout/default-layout";
import FormLayout from "../../components/layout/form-layout";
import { useRouter } from "next/router";

export default function EmployeePreferencePage() {
  let [state, setState] = useState({});
  const router = useRouter();

  let Submit = () => {
    setState((prev) => {
      return {
        ...prev,
        submitted: true,
      };
    });

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-bg">
        <FormLayout title="Are there any subjects you don’t feel comfortable answering questions about?">
          <form>
            {/* <form style={{ textAlign: "left" }}> */}
            <div className="form-group">
              <label htmlFor="name">
                <input type="checkbox" /> Religion
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="name">
                <input type="checkbox" /> Gender
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="name">
                <input type="checkbox" /> Sexual Orientation
              </label>
            </div>
            <br />
            {state.submitted ? (
              <div className="alert alert-success">Please wait...</div>
            ) : (
              <></>
            )}
            <button
              onClick={() => Submit()}
              type="button"
              className="btn btn-success"
            >
              Submit
            </button>
          </form>

          <style jsx>
            {`
              form {
                width: 80%;
                margin: 0 auto;
              }
            `}
          </style>

          {/* <ul className={styles.formLabel}>
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
          </button> */}
        </FormLayout>
      </div>
    </DefaultLayout>
  );
}

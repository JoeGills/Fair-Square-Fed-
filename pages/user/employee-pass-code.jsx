import Head from "next/head";
import { useState } from "react";
import DefaultLayout from "../../components/layout/default-layout";
import FormLayout from "../../components/layout/form-layout";
import { useRouter } from "next/router";

export default function EmployeePassCodePage() {
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
      router.push("/user/employee-preference");
    }, 1000);
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-bg">
        <FormLayout title="Enter the code that you've received in your email">
          <form>
            <div className="form-group">
              {/* <label htmlFor="name">Email</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter the code. ex: H5Y3KA9L"
              />
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

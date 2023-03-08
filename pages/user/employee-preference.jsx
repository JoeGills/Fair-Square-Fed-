import Head from "next/head";
import { useEffect, useState } from "react";
import DefaultLayout from "../../components/layout/default-layout";
import FormLayout from "../../components/layout/form-layout";
import { useRouter } from "next/router";

export default function EmployeePreferencePage() {
  let [state, setState] = useState({ categories: [], submitted: false });
  const router = useRouter();

  let Submit = () => {
    setState((prev) => {
      return {
        ...prev,
        submitted: true,
      };
    });

    setTimeout(() => {
      router.push("/dashboard/diversity-form");
    }, 1000);
  };

  const getCategories = async () => {
    try {
      const res = await fetch(`/api/indicators`);
      const data = await res.json();
      console.log(data);
      if (data) {
        setState((prev) => {
          return {
            ...prev,
            categories: [...new Set(data.map((x) => x.category))],
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

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
            {state.categories.map((category) => {
              return (
                <div className="form-group">
                  <label>
                    <input type="checkbox" /> {category}
                  </label>
                </div>
              );
            })}

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
                text-align: left;
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

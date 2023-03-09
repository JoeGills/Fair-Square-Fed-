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
    }, 500);
  };

  const getCategories = async () => {
    try {
      const res = await fetch(`/api/categories`);
      const data = await res.json();
      if (data) {
        setState((prev) => {
          return {
            ...prev,
            categories: data,
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
        <FormLayout title="Are there any personal traits you don’t feel comfortable answering questions about?">
          <form>
            {/* <form style={{ textAlign: "left" }}> */}
            {state.categories.map((category, index) => {
              return (
                <div className="form-group" key={index}>
                  <label>
                    <input type="checkbox" /> {category.title}
                    <span className="help-block">
                      {category.description}. For example: {category.example}
                    </span>
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

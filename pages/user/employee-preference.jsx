import Image from "next/image";
import NavLink from "next/link";
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

      <div className="d-flex body align-items-center justify-content-center">
        <div className="card text-center card-info">
          <div className="card-body">
            <h5 className="card-title">
              Any subjects you are not comfortable with?
            </h5>
            <div className="card-text">
              <form>
                {state.categories.map((category, index) => {
                  return (
                    <div className="form-group" key={index}>
                      <label>
                        <input type="checkbox" /> {category.title}
                        <span className="help-block">
                          {category.description}. For example:{" "}
                          {category.example}
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
              </form>
              <button
                onClick={() => Submit()}
                type="button"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .body {
          height: 100vh;
        }

        form {
          text-align: left;
        }

        .card-body {
          padding: 1rem 5rem 2rem 5rem;
        }
      `}</style>

      {/* <div className="color-bg">
        <FormLayout title="Are there any personal traits you don’t feel comfortable answering questions about?">
          <form>
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
             
            `}
          </style>
        </FormLayout>
      </div> */}
    </DefaultLayout>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/default-layout";
import { useRouter } from "next/router";
import categories from "../utils/categories";

export default function PreferencePage() {
  let [state, setState] = useState({
    categories: categories,
    submitted: false,
  });
  const router = useRouter();

  let Submit = () => {
    setState((prev) => {
      return {
        ...prev,
        submitted: true,
      };
    });

    setTimeout(() => {
      router.push("/questionnaire");
    }, 500);
  };

  return (
    <DefaultLayout>
      <Head>
      <title>
          Fair & Square | User Preferences!
        </title>
        <meta
          name="description"
          content=" At Fair&Square, we are dedicated to helping organizations create more diverse and inclusive workplaces."
        />
        <meta
          name="keywords"
          content="Diversity and inclusivity, Workplace diversity, Inclusive hiring practices, Anonymous data tracking and analysis, Employee engagement, Data security and confidentiality, Equality and justice in the workplace, Improving hiring and promotion practices, Equitable society, Positive impact on employees"
        />

        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="robots" content="noindex, nofollow"/>

        <link rel="canonical" href="https://fs.fs/" />
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

    </DefaultLayout>
  );
}

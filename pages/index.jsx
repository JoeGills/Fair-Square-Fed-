import Head from "next/head";
import DefaultLayout from "../components/default-layout";
import Cards from "../components/information-cards";
import Image from "next/image";
import NavLink from "next/link";
import { useContext, useEffect } from "react";
import QuestionContext from "../utils/questionContext";
import questions from "../utils/questions";

export default function LandingPage() {
  const { sharedState, setSharedState } = useContext(QuestionContext);
  useEffect(() => {
    setSharedState((prev) => {
      return {
        ...prev,
        currentQuestion: questions[0],
        currentQuestionIndex: 0,
      };
    });
    console.log("Restarted");
  }, []);

  return (
    <DefaultLayout>
      <Head>
        <title>Fair & Square | Welcome!</title>
        <meta
          name="description"
          content=" At Fair&Square, we are dedicated to helping organizations create more diverse and inclusive workplaces."
        />
        <meta
          name="keywords"
          content="Diversity and inclusivity, Workplace diversity, Inclusive hiring practices, Anonymous data tracking and analysis, Employee engagement, Data security and confidentiality, Equality and justice in the workplace, Improving hiring and promotion practices, Equitable society, Positive impact on employees"
        />

        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://fs.fs/" />
      </Head>

      <div className="body">
        <div className="d-flex body-content align-items-center justify-content-center">
          <div className="card text-center card-info">
            <div className="card-body">
              <h5 className="card-title">Are you ready?</h5>
              <p className="card-text">
                At Fair&Square, we understand the importance of data security.
                That's why we have implemented the highest standards of security
                to ensure that all data collected is kept safe and confidential.
                We use state-of-the-art encryption technology and follow
                industry best practices to protect our customers' data.
                <br />
                <br />
                <Image
                  width="307"
                  height="76"
                  src="/information.svg"
                  alt="Information about Fair&Square"
                />
              </p>

              <NavLink href="/preferences" className="btn btn-success">
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
        <div className="body-cards">
          <Cards />
        </div>
      </div>

      <style jsx>{`
        .body {
          height: 100vh;
        }

        .body-content {
          height: calc(100% - 250px);
        }

        .body-cards {
          background: red;
          height: 100%;
        }
      `}</style>
    </DefaultLayout>
  );
}

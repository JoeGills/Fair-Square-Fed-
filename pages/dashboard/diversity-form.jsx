import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../components/default-layout";
import { useRouter } from "next/router";
import ProgressBar from "../../components/progressbar";
import QuestionContext from "../../utils/questionContext";
import questions from "../../utils/questions";

export default function EmployeePreferencePage() {
  const { sharedState, setSharedState } = useContext(QuestionContext);

  const router = useRouter();

  let Skip = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex + 1;
    let nextQuestion = questions[nextIndex];
    let isFinished = currentQuestionIndex == questions.length - 1;

    if (isFinished) {
      router.push("/completed-form");
    }

    setSharedState((prev) => {
      return {
        ...prev,
        currentQuestion: nextQuestion,
        currentQuestionIndex: nextIndex,
      };
    });
  };

  let Submit = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex + 1;
    let nextQuestion = questions[nextIndex];
    let isFinished = currentQuestionIndex == questions.length - 1;

    if (isFinished) {
      router.push("/completed-form");
    }

    sharedState.answers[currentQuestionIndex] = true;

    setSharedState((prev) => {
      return {
        ...prev,
        currentQuestion: nextQuestion,
        currentQuestionIndex: nextIndex,
      };
    });
  };

  let Previous = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex - 1;
    let nextQuestion = questions[nextIndex];

    if (nextIndex >= 0) {
      setSharedState((prev) => {
        return {
          ...prev,
          currentQuestion: nextQuestion,
          currentQuestionIndex: nextIndex,
        };
      });
    }
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{sharedState.currentQuestion.question}</title>
      </Head>

      <div className="d-flex body align-items-center justify-content-center">
        <div className="card text-center card-info">
          <div className="card-body">
            <h5 className="card-title">
              {sharedState.currentQuestion.question}
            </h5>
            <div className="card-text">
              <form>
                <i>{sharedState.currentQuestion.description}</i>
                <select className="form-select options">
                  <option></option>
                  {sharedState.currentQuestion.options.map((option, index) => {
                    return (
                      <option key={index} value={index}>
                        {option}
                      </option>
                    );
                  })}
                </select>
                <div className="buttons d-flex justify-content-between">
                  <div className="buttons-left">
                    <button
                      disabled={sharedState.currentQuestionIndex == 0}
                      onClick={() => Previous()}
                      type="button"
                      className="btn btn-success"
                    >
                      Previous
                    </button>
                  </div>
                  <div className="buttons-right">
                    <button
                      onClick={() => Skip()}
                      type="button"
                      className="btn btn-outline-danger btn-skip"
                    >
                      Skip
                    </button>

                    <button
                      onClick={() => Submit()}
                      type="button"
                      className="btn btn-success"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <ProgressBar currentQuestion={sharedState.currentQuestionIndex} />
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

        .buttons {
          width: 100%;
        }

        .btn-skip {
          margin-right: 1rem;
        }

        .options {
          margin-top: 4rem;
          margin-bottom: 4rem;
        }
      `}</style>
    </DefaultLayout>
  );
}

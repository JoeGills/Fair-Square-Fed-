import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import DefaultLayout from "../components/default-layout";
import { useRouter } from "next/router";
import ProgressBar from "../components/progressbar";
import QuestionContext from "../utils/questionContext";
import questions from "../utils/questions";
import { MdOutlineFeedback } from "react-icons/md";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function QuestionnairePage() {
  const { sharedState, setSharedState } = useContext(QuestionContext);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [newOption, setNewOption] = useState(false);

  const router = useRouter();

  if (
    !sharedState ||
    !sharedState.currentQuestion ||
    !sharedState.currentQuestion.question
  ) {
    return <></>;
  }

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setNewOption(false);

    if (event.target.value === "NotExist") {
      setTimeout(() => setNewOption(true), 10);
    }
  };

  let displayFeedbackModal = () => {
    var feedbackModal = document.getElementById("feedbackModal");
    var modal = bootstrap.Modal.getOrCreateInstance(feedbackModal);
    modal.show();
  };

  let Skip = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex + 1;
    let nextQuestion = questions[nextIndex];
    let isFinished = currentQuestionIndex == questions.length - 1;

    if (isFinished) {
      router.push("/final-step");
    }

    let answers = sharedState.answers;
    let newAnswers = [
      ...answers.slice(0, currentQuestionIndex),
      null,
      ...answers.slice(currentQuestionIndex + 1, questions.length - 1),
    ];

    setSharedState((prev) => {
      return {
        ...prev,
        currentQuestion: nextQuestion,
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
      };
    });
  };

  let Submit = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex + 1;
    let nextQuestion = questions[nextIndex];
    let isFinished = currentQuestionIndex == questions.length - 1;

    if (isFinished) {
      router.push("/final-step");
    }

    let answers = sharedState.answers;
    let newAnswers = [
      ...answers.slice(0, currentQuestionIndex),
      selectedAnswer,
      ...answers.slice(currentQuestionIndex + 1, questions.length - 1),
    ];

    setSharedState((prev) => {
      return {
        ...prev,
        currentQuestion: nextQuestion,
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
      };
    });
  };

  let Previous = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex - 1;
    let nextQuestion = questions[nextIndex];

    if (nextIndex >= 0) {
      setSelectedAnswer(sharedState.answers[nextIndex] ?? "");

      setSharedState((prev) => {
        return {
          ...prev,
          currentQuestion: nextQuestion,
          currentQuestionIndex: nextIndex,
        };
      });
    }
  };

  let Next = () => {
    let currentQuestionIndex = sharedState.currentQuestionIndex;
    let nextIndex = currentQuestionIndex + 1;
    let nextQuestion = questions[nextIndex];

    if (nextIndex >= 0) {
      setSelectedAnswer(sharedState.answers[nextIndex] ?? "");

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
        <title>
          Fair & Square |{" "}
          {sharedState.currentQuestion && sharedState.currentQuestion.question
            ? sharedState.currentQuestion.question
            : ""}
          !
        </title>
        <meta
          name="description"
          content={
            (sharedState.currentQuestion && sharedState.currentQuestion.question
              ? sharedState.currentQuestion.question
              : "") +
            "At Fair&Square, we are dedicated to helping organizations create more diverse and inclusive workplaces."
          }
        />
        <meta
          name="keywords"
          content="Diversity and inclusivity, Workplace diversity, Inclusive hiring practices, Anonymous data tracking and analysis, Employee engagement, Data security and confidentiality, Equality and justice in the workplace, Improving hiring and promotion practices, Equitable society, Positive impact on employees"
        />

        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://fs.fs/" />
      </Head>

      <div className="d-flex body align-items-center justify-content-center">
        <div className="card text-center card-info">
          <div className="card-body">
            <h5 className="card-title">
              {sharedState.currentQuestion &&
              sharedState.currentQuestion.question
                ? sharedState.currentQuestion.question
                : ""}
            </h5>
            <div className="card-text">
              <form>
                <i>{sharedState.currentQuestion.description}</i>
                <select
                  className="form-select options"
                  value={selectedAnswer}
                  onChange={handleAnswerChange}
                >
                  <option value="">--Please choose an option--</option>

                  {sharedState.currentQuestion.options.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                  <option value="NotExist">My option does not exist</option>
                </select>
                {newOption ? (
                  <>
                    <a href="#" onClick={() => displayFeedbackModal()}>
                      Suggest an option
                    </a>
                  </>
                ) : (
                  <></>
                )}
                <div className="buttons d-flex justify-content-between">
                  <div className="buttons-left">
                    <button
                      disabled={sharedState.currentQuestionIndex == 0}
                      onClick={() => Previous()}
                      type="button"
                      className="btn btn-success"
                    >
                      {/* <MdArrowBackIosNew /> */}
                      Previous
                    </button>

                    {/* <button
                      disabled={
                        sharedState.currentQuestionIndex == questions.length - 1
                      }
                      onClick={() => Next()}
                      type="button"
                      className="btn btn-outline-success btn-next"
                    >
                      <MdArrowForwardIos />
                    </button> */}
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
            <a
              className="feedback"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <span>
                <MdOutlineFeedback />
              </span>{" "}
              Any feedback? Click here!
            </a>
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
          margin-top: 4rem;
        }

        .btn-skip {
          margin-right: 1rem;
        }

        .btn-next {
          margin-left: 0.5rem;
        }

        .options {
          margin-top: 4rem;
          margin-bottom: 0rem;
        }

        .feedback {
          font-size: 0.75rem;
          text-decoration: none;
        }
        .feedback span {
          font-size: 1rem;
        }
        .feedback:hover {
          color: #555;
        }
      `}</style>

      <div
        className="modal fade"
        id="feedbackModal"
        tabIndex="-1"
        aria-labelledby="feedbackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedbackModalLabel">
                Any feedback?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" className="mb-3">
                  Anything missing? Please type your feedback in the text field
                  below. We appreciate all the feedback as we are continuously
                  working on improving our services.
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

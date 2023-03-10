import React from "react";
import { useState } from "react";
import "../styles/global.css";
import QuestionContext from "../utils/questionContext";
import questions from "../utils/questions";

function FairSquareApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState({
    currentQuestion: questions[0],
    currentQuestionIndex: 0,
    answers: questions.map((x) => {}),
  });

  return (
    <QuestionContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </QuestionContext.Provider>
  );
}

export default FairSquareApp;

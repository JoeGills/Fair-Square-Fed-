import React from "react";
import { useState } from "react";
import "../styles/global.css";
import QuestionContext from "../utils/questionContext";

function FairSquareApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState({
    currentQuestion: {},
    index: 0,
  });

  return (
    <QuestionContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </QuestionContext.Provider>
  );
}

export default FairSquareApp;

import Image from "next/image";
import { useContext } from "react";
import Answered from "../public/answered.svg";
import Current from "../public/current.svg";
import Empty from "../public/gray.svg";
import QuestionContext from "../utils/questionContext";
import questions from "../utils/questions";

function ProgressBar({ currentQuestion }) {
  const { sharedState, setSharedState } = useContext(QuestionContext);

  const numQuestions = questions.length;
  const squares = questions.map((question, index) => {
    let answer = sharedState.answers[index];
    const isCurrent = index === currentQuestion;
    const isAnswered = answer != null && answer != undefined;

    let squareImage = Empty;
    if (isAnswered) {
      squareImage = Answered;
    }

    if (isCurrent) {
      squareImage = Current;
    }

    return (
      <div key={index} className="square-container">
        <Image src={squareImage} alt="square" />
      </div>
    );
  });

  // console.log(sharedState);

  return (
    <div className="progress-bar">
      {squares}
      <style jsx>{`
        .progress-bar {
          display: flex;
          background-color: transparent;
          flex-direction: row;
          gap: 1.5rem;
          align-items: center;
          padding: 1rem;
        }

        .square-container {
          margin-right: 10px;
          transform: rotate(-90deg);
        }

        .square-container:last-child {
          margin-right: 0;
        }

        .square-container img {
          height: 20px;
          width: 20px;
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;

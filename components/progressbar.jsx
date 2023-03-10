import Image from "next/image";
import { useContext } from "react";
import Answered from "../public/answered.svg";
import Current from "../public/current.svg";
import Empty from "../public/gray.svg";
import QuestionContext from "../utils/questionContext";
import Questions from "../utils/questions";

function ProgressBar({ currentQuestion }) {
  const { state, setState } = useContext(QuestionContext);

  const numQuestions = Questions.length;
  const squares = Array(numQuestions)
    .fill()
    .map((_, index) => {
      const isCurrent = index === currentQuestion;
      const isAnswered = index < currentQuestion;
      let squareImage = Empty;
      if (isAnswered) {
        squareImage = isCurrent ? Current : Answered;
      }

      return (
        <div key={index} className="square-container">
          <Image src={squareImage} alt="square" />
        </div>
      );
    });

  console.log(state);

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

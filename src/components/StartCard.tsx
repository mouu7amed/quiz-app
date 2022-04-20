import { AnswerObject } from "../App";
import { Fragment } from "react";

type startCardType = {
  gameOver: boolean;
  userAnswers: AnswerObject[];
  TOTAL_QUESTIONS: number;
  startQuizHandler: () => Promise<void>;
  amount: number;
  amountHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  difficultyHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  quesTypeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const StartCard = ({
  gameOver,
  userAnswers,
  TOTAL_QUESTIONS,
  startQuizHandler,
  amountHandler,
  difficultyHandler,
  quesTypeHandler,
}: startCardType) => {
  return (
    <div className="start-card">
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <Fragment>
          <select
            className="options"
            placeholder="Amount"
            onChange={amountHandler}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>

          <select
            className="options"
            placeholder="Difficulty"
            onChange={difficultyHandler}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select
            className="options"
            placeholder="Type"
            onChange={quesTypeHandler}
          >
            <option value="multiple">Mulitple Choice</option>
            <option value="boolean">True / False</option>
          </select>
          <button className="start" onClick={startQuizHandler}>
            Start Quiz
          </button>
        </Fragment>
      ) : null}
    </div>
  );
};

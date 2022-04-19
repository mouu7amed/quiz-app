import { AnswerObject } from "../App";
import { Loading } from "./Loading";
import { Fragment } from "react";

type startCardType = {
  gameOver: boolean;
  userAnswers: AnswerObject[];
  TOTAL_QUESTIONS: number;
  startQuizHandler: () => Promise<void>;
  loading: boolean;
  amount: number;
  amountHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  difficultyHandler: (e: any) => void;
  quesTypeHandler: (e: any) => void;
};

export const StartCard = ({
  gameOver,
  userAnswers,
  TOTAL_QUESTIONS,
  startQuizHandler,
  loading,
  amount,
  amountHandler,
  difficultyHandler,
  quesTypeHandler,
}: startCardType) => {
  return (
    <div className="start-card">
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <Fragment>
          <input
            type="number"
            value={amount}
            className="amount"
            min="10"
            max="50"
            placeholder="Amount (10-50)"
            onChange={amountHandler}
          />
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

      {loading && <Loading />}
    </div>
  );
};

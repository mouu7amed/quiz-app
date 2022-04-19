import React from "react";
import { AnswerObject } from "../App";
import { AnswerWrapper } from "../styles/App.styles";

type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
};

export const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
}: QuestionCardProps) => {
  return (
    <div className="questions-card">
      <p className="question">{question}</p>
      <div className="answers">
        {answers.map((answer) => {
          return (
            <AnswerWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button
                onClick={callback}
                value={answer}
                disabled={userAnswer ? true : false}
              >
                {answer}
              </button>
            </AnswerWrapper>
          );
        })}
      </div>
    </div>
  );
};

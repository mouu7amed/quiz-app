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
  const questionResult = question.replace(
    /&quot;|&#039;|&shy;|&oacute;|&eacute;|&aacute;|&ocirc;|&rsquo;|&amp;|&ntilde;/gi,
    ""
  );
  return (
    <div className="questions-card">
      <p className="question">{questionResult}</p>
      <div className="answers">
        {answers.map((answer) => {
          const answerResult = answer.replace(
            /&quot;|&#039;|&shy;|&oacute;|&eacute;|&aacute;|&ocirc;|&rsquo;|&amp;|&ntilde;/gi,
            ""
          );
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
                {answerResult}
              </button>
            </AnswerWrapper>
          );
        })}
      </div>
    </div>
  );
};

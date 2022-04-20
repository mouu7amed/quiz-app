import React, { Fragment, useState } from "react";
import { Foot } from "./components/Foot";
import { Head } from "./components/Head";
import { Loading } from "./components/Loading";
import { QuestionCard } from "./components/QuestionCard";
import { Result } from "./components/Result";
import { StartCard } from "./components/StartCard";
import { FetchQuestions, QuestionState } from "./helpers/API";
import { GlobalStyle, Wrapper } from "./styles/App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [amount, setAmount] = useState<any>(10);
  const [difficulty, setDifficulty] = useState<any>("easy");
  const [quesType, setQuesType] = useState<any>("multiple");

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const amountHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(e.target.value);
  };
  const difficultyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };
  const quesTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuesType(e.target.value);
  };

  const startQuizHandler = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await FetchQuestions(amount, difficulty, quesType);
    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[number].correct_answer === answer;
      if (isCorrect) setScore((prev) => prev + 1);
      const answerObj = {
        question: questions[number].question,
        answer,
        correct: isCorrect,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuizHandler = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === amount) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Head
          gameOver={gameOver}
          loading={loading}
          score={score}
          questionNum={number + 1}
          totalQuestions={amount}
        />

        {!loading && !gameOver ? (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : !loading && gameOver ? (
          <StartCard
            gameOver={gameOver}
            userAnswers={userAnswers}
            TOTAL_QUESTIONS={amount}
            startQuizHandler={startQuizHandler}
            amount={amount}
            amountHandler={amountHandler}
            difficultyHandler={difficultyHandler}
            quesTypeHandler={quesTypeHandler}
          />
        ) : null}

        {loading && <Loading />}

        {!gameOver && !loading ? (
          <Result
            amount={amount}
            score={score}
            userAnswers={userAnswers}
            setGameOver={setGameOver}
          />
        ) : null}

        <Foot
          nextQuizHandler={nextQuizHandler}
          number={number}
          userAnswers={userAnswers}
          gameOver={gameOver}
          TOTAL_QUESTIONS={amount}
          loading={loading}
        />
      </Wrapper>
    </Fragment>
  );
}

export default App;

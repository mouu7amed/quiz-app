type headPropsTypes = {
  gameOver: boolean;
  loading: boolean;
  score: number;
  questionNum: number;
  totalQuestions: number;
};

export const Head = ({
  gameOver,
  loading,
  score,
  questionNum,
  totalQuestions,
}: headPropsTypes) => {
  return (
    <div className="head">
      <h1>React Quiz</h1>

      {!loading && !gameOver && (
        <>
          <div className="quiz-progress"></div>
          <p className="number">
            Question: {questionNum} / {totalQuestions}
          </p>
        </>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
    </div>
  );
};

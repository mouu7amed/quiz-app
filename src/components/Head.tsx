import { ProgressWrapper } from "../styles/App.styles";

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
  const progress: number = (questionNum * 100) / totalQuestions;
  return (
    <div className="head">
      <h1>React Quiz</h1>

      {!loading && !gameOver && (
        <>
          <ProgressWrapper progress={progress}>
            <div className="live-progress"></div>
          </ProgressWrapper>
          <p className="number">
            Question: {questionNum} / {totalQuestions}
          </p>
        </>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
    </div>
  );
};

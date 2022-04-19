import { AnswerObject } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type footPropsTypes = {
  gameOver: boolean;
  loading: boolean;
  nextQuizHandler: () => void;
  number: number;
  TOTAL_QUESTIONS: number;
  userAnswers: AnswerObject[];
};

export const Foot = ({
  gameOver,
  loading,
  nextQuizHandler,
  number,
  TOTAL_QUESTIONS,
  userAnswers,
}: footPropsTypes) => {
  return (
    <div className="foot">
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuizHandler}>
          Next
        </button>
      ) : (
        <FontAwesomeIcon icon={faArrowRight} color={"#7f7f7f"} />
      )}
    </div>
  );
};

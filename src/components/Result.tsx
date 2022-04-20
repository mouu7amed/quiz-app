import { Dispatch, Fragment, SetStateAction } from "react";
import { AnswerObject } from "../App";
import { ResultWrapper } from "../styles/App.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSadTear,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";

type ResultProps = {
  userAnswers: AnswerObject[];
  amount: number;
  score: number;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

export const Result = ({
  userAnswers,
  amount,
  score,
  setGameOver,
}: ResultProps) => {
  const success = score >= amount / 2 ? true : false;
  return (
    <Fragment>
      {userAnswers.length === amount && (
        <ResultWrapper success={success}>
          <div className="box">
            <p className="result-score">Score: {`${score} / ${amount}`}</p>

            {success ? (
              <p className="result-state">
                Sucess{" "}
                <FontAwesomeIcon icon={faFaceSmileWink} color={"#FF9C48"} />
              </p>
            ) : (
              <p className="result-state">
                Fail <FontAwesomeIcon icon={faFaceSadTear} color={"#FF9C48"} />
              </p>
            )}

            <button className="close" onClick={() => setGameOver(true)}>
              Again
            </button>
          </div>
        </ResultWrapper>
      )}
    </Fragment>
  );
};

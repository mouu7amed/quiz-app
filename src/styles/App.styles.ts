import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

html{
    height: 100%;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CFD8DD;
    min-height: 100vh;
}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  margin: 1rem;
  border-radius: 0.5rem;
  min-width: 50vw;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 991px) {
    min-width: 70vw;
  }
  @media (max-width: 676px) {
    min-width: 90vw;
  }
  /* Start Head */
  .head {
    background-color: #f4f4f4;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    overflow: hidden;
  }

  .head .quiz-progress {
    height: 1rem;
    width: 40%;
    background-color: #7f7f7f;
    border-radius: 1rem;
  }
  /* End Head */

  /* Start Question Card */
  .start-card,
  .questions-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
  }
  .start-card .amount,
  .start-card .options {
    width: 40%;
    padding: 0.3rem 0.5rem;
    margin-bottom: 1rem;
    outline: none;
    border: 1px solid #cccccc;
    font-size: 1rem;
    appearance: none;
  }
  @media (max-width: 676px) {
    .start-card .amount,
    .start-card .options {
      width: 50%;
    }
  }
  .questions-card .answers {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .start-card .start {
    background-color: #7f7f7f;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem 1.2rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .start-card .start:hover {
    background-color: #3b59ff;
  }
  .questions-card .question {
    font-size: 1.3rem;
    padding: 0.5rem;
    text-align: center;
  }
  /* End Question Card */

  /* Strat Loading Spinner */
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
  }
  .loading-spinner:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3b59ff;
    border-color: #3b59ff transparent #3b59ff transparent;
    animation: loading-spinner 1.2s linear infinite;
  }
  @keyframes loading-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* End Loading Spinner */

  /* Start Foot */
  .foot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #f4f4f4;
    width: 100%;
    padding: 1rem 2rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .foot .next {
    background-color: #3b59ff;
    color: #fff;
    border: 1px solid transparent;
    outline: none;
    padding: 0.1rem 1.3rem;
    border-radius: 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .foot .next:hover {
    background-color: transparent;
    color: #7f7f7f;
    border: 1px solid #7f7f7f;
  }
  /* End Foot */
`;

type answerWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const AnswerWrapper = styled.div<answerWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 90%;
    outline: none;
    border: none;
    margin: 0.5rem 0;
    font-size: 1rem;
    border-radius: 1rem;
    height: 2.5rem;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    background-color: ${({ correct, userClicked }) =>
      correct ? "#43978d" : !correct && userClicked ? "#d45769" : "#ededed"};
    color: ${({ correct, userClicked }) =>
      correct ? "#fff" : !correct && userClicked ? "#fff" : null};
  }

  button:hover {
    opacity: 0.6;
  }
`;

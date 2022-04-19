import axios from "axios";
import { ShuffleArray } from "./ShuffleArray";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const FetchQuestions = async (
  amount: number,
  difficulty: "easy" | "medium" | "hard",
  type: "multiple" | "boolean"
) => {
  const BASE_URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  const data = await axios(BASE_URL).then((response) => {
    const results = response.data.results;
    return results.map((question: Question) => ({
      ...question,
      answers: ShuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  });
  return data;
};

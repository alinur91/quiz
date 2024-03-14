import {
  ActionType,
  QuizContextType,
  QuizProviderProps,
  Technologies,
} from "../types/quizTypes";
import { initialState, quizReducer } from "../reducer/quizReducer";
import { useReducer } from "react";
import { QuizContext } from "./quizContext";

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [{ status }, dispatch] = useReducer(quizReducer, initialState);

  const startTheQuiz = (technologyName: Technologies) => {
    dispatch({ type: ActionType.START_QUIZ, payload: technologyName });
  };

  const value: QuizContextType = {
    status,
    startTheQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

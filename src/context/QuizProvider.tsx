import {
  ActionType,
  QuizContextType,
  QuizProviderProps,
  Status,
} from "../types/quizTypes";
import { initialState, quizReducer } from "../reducer/quizReducer";
import { useReducer } from "react";
import { QuizContext } from "./quizContext";

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [{ status }, dispatch] = useReducer(quizReducer, initialState);

  const setQuizStatusToReady = () => {
    dispatch({ type: ActionType.SET_STATUS, payload: Status.ready });
  };

  const setQuizStatusToActive = () => {
    dispatch({ type: ActionType.SET_STATUS, payload: Status.active });
  };

  const setQuizStatusToFinished = () => {
    dispatch({ type: ActionType.SET_STATUS, payload: Status.finished });
  };

  const value: QuizContextType = {
    status,
    setQuizStatusToReady,
    setQuizStatusToActive,
    setQuizStatusToFinished,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

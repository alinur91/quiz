import {
  ActionType,
  QuestionCategory,
  QuizContextType,
  QuizProviderProps,
} from "../types/quizTypes";
import { initialState, quizReducer } from "../reducer/quizReducer";
import { useReducer } from "react";
import { QuizContext } from "./quizContext";

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [
    { status, quizInfo, index, answer, points, pointsPerCorrectAnswer },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  const startTheQuiz = (quizInfo: QuestionCategory) => {
    dispatch({ type: ActionType.START_THE_QUIZ, payload: quizInfo });
  };

  const exitTheQuiz = () => {
    dispatch({ type: ActionType.EXIT_THE_QUIZ });
  };

  const finishTheQuiz = () => {
    dispatch({ type: ActionType.FINISH_THE_QUIZ });
  };

  const giveTheAnswer = (answer: number, isAnswerCorrect: boolean) => {
    dispatch({
      type: ActionType.ANSWER_IS_GIVEN,
      payload: { answer, isAnswerCorrect },
    });
  };

  const nextQuestion = () => {
    dispatch({ type: ActionType.NEXT_QUESTION });
  };

  const value: QuizContextType = {
    status,
    startTheQuiz,
    exitTheQuiz,
    quizInfo,
    index,
    answer,
    giveTheAnswer,
    nextQuestion,
    finishTheQuiz,
    points,
    pointsPerCorrectAnswer,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

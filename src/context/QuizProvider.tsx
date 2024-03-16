import {
  ActionType,
  QuestionCategory,
  QuizContextType,
  QuizProviderProps,
} from "@ts-types/quizTypes";
import { initialState, quizReducer } from "@reducer/quizReducer";
import { useReducer } from "react";
import { QuizContext } from "@context/quizContext";

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

  const compleTheQuiz = () => {
    dispatch({ type: ActionType.COMPLETE_THE_QUIZ });
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

  const restartTheQuiz = () => {
    dispatch({ type: ActionType.RESTART_THE_QUIZ });
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
    compleTheQuiz,
    restartTheQuiz,
    points,
    pointsPerCorrectAnswer,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

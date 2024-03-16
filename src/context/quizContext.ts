import { createContext, useContext } from "react";
import { QuizContextType } from "@ts-types/quizTypes";

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

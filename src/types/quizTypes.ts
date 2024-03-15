import { ReactNode } from "react";

export enum Status {
  "ready" = "READY",
  "active" = "ACTIVE",
  "finished" = "FINISHED",
}

export enum Technologies {
  "react" = "REACT",
  "javascript" = "JAVASCRIPT",
  "html" = "HTML",
  "python" = "PYTHON",
  "cplusplus" = "CPLUSPLUS",
  "java" = "JAVA",
}

export enum ImageSizes {
  "small" = "SMALL",
  "medium" = "MEDIUM",
  "large" = "LARGE",
}

export type Question = {
  question: string;
  options: string[];
  correctOption: number;
};

export type QuestionCategory = {
  technologyName: Technologies;
  imageSrc: string;
  questions: Question[];
};

export type Questions = {
  [key in Technologies]: QuestionCategory;
};

export type QuizContextType = {
  status: Status;
  startTheQuiz: (technologyName: QuestionCategory) => void;
  exitTheQuiz: () => void;
  finishTheQuiz: () => void;
  nextQuestion: () => void;
  giveTheAnswer: (answer: number, isAnswerCorrect: boolean) => void;
  answer: null | number;
  index: number;
  quizInfo: QuestionCategory | null;
  points: number;
  pointsPerCorrectAnswer: number;
};

export type State = {
  status: Status;
  quizInfo: QuestionCategory | null;
  index: number;
  answer: null | number;
  points: number;
  pointsPerCorrectAnswer: number;
};

export enum ActionType {
  START_THE_QUIZ = "START_THE_QUIZ",
  EXIT_THE_QUIZ = "EXIT_QUIZ",
  FINISH_THE_QUIZ = "FINISH_QUIZ",
  NEXT_QUESTION = "NEXT_QUESTION",
  ANSWER_IS_GIVEN = "ANSWER_IS_GIVEN",
}

export type Action =
  | { type: ActionType.START_THE_QUIZ; payload: QuestionCategory }
  | { type: ActionType.EXIT_THE_QUIZ }
  | { type: ActionType.FINISH_THE_QUIZ }
  | { type: ActionType.NEXT_QUESTION }
  | {
      type: ActionType.ANSWER_IS_GIVEN;
      payload: { answer: number; isAnswerCorrect: boolean };
    };

export type QuizProviderProps = {
  children: ReactNode;
};

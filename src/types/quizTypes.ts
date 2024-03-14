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

export type QuizContextType = {
  status: Status;
  startTheQuiz: (technologyName: Technologies) => void;
};

export type State = {
  status: Status;
  quizTechnologyName: Technologies | null;
};

export enum ActionType {
  START_QUIZ = "START_QUIZ",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export type Action =
  | { type: ActionType.START_QUIZ; payload: Technologies }
  | { type: "TOGGLE_TODO"; payload: { id: number } };

export type QuizProviderProps = {
  children: ReactNode;
};

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
  setQuizStatusToReady: () => void;
  setQuizStatusToActive: () => void;
  setQuizStatusToFinished: () => void;
};

export type State = {
  status: Status;
};

export enum ActionType {
  SET_STATUS = "SET_STATUS",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export type Action =
  | { type: ActionType.SET_STATUS; payload: Status }
  | { type: "TOGGLE_TODO"; payload: { id: number } };

export type QuizProviderProps = {
  children: ReactNode;
};

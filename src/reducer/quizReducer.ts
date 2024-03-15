/* eslint-disable no-case-declarations */
import { State, Action, Status, ActionType } from "../types/quizTypes";

export const initialState: State = {
  status: Status.ready,
  quizInfo: null,
  index: 0,
  answer: null,
  points: 0,
  pointsPerCorrectAnswer: 10,
};

export const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START_QUIZ:
      return {
        ...state,
        status: Status.active,
        quizInfo: action.payload,
      };
    case ActionType.EXIT_QUIZ:
      return {
        ...state,
        status: Status.ready,
        index: 0,
        answer: null,
        points: 0,
      };
    case ActionType.FINISH_QUIZ:
      return {
        ...state,
        status: Status.finished,
        index: 0,
        answer: null,
      };
    case ActionType.NEXT_QUESTION:
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case ActionType.ANSWER_IS_GIVEN:
      const { answer, isAnswerCorrect } = action.payload;
      const { points, pointsPerCorrectAnswer } = state;

      return {
        ...state,
        answer,
        points: isAnswerCorrect ? points + pointsPerCorrectAnswer : points,
      };
    default:
      return state;
  }
};

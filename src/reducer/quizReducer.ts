/* eslint-disable no-case-declarations */
import { State, Action, Status, ActionType } from "@ts-types/quizTypes";

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
    case ActionType.START_THE_QUIZ:
      return {
        ...state,
        status: Status.active,
        quizInfo: action.payload,
      };
    case ActionType.EXIT_THE_QUIZ:
      return {
        ...state,
        status: Status.ready,
        index: 0,
        answer: null,
        points: 0,
        quizInfo: null,
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
    case ActionType.COMPLETE_THE_QUIZ:
      return {
        ...state,
        status: Status.finished,
        index: 0,
        answer: null,
      };
    case ActionType.RESTART_THE_QUIZ:
      return initialState;
    default:
      return state;
  }
};

import { State, Action, Status, ActionType } from "../types/quizTypes";

export const initialState: State = {
  status: Status.ready,
  quizTechnologyName: null,
};

export const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START_QUIZ:
      return {
        ...state,
        status: Status.active,
        quizTechnologyName: action.payload,
      };
    default:
      return state;
  }
};

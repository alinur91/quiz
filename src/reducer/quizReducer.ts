import { State, Action, Status, ActionType } from "../types/quizTypes";

export const initialState: State = {
  status: Status.ready,
};

export const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

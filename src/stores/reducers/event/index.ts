import { EventActions, EventState, EventActionEnum } from "./types";
const initialState: EventState = {
  events: [],
  users: [],
};

export default function EventReducer(
  state: EventState = initialState,
  action: EventActions
): EventState {
  switch (action.type) {
    case EventActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionEnum.SET_GUESTS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

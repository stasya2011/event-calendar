import { ActionCreators } from "./action-creator";
import { EventActionCreators } from "../event/action-creators";

export const allActionCreators = {
  ...ActionCreators,
  ...EventActionCreators,
};

import { IUser } from "../../../types";

const initialState: IState = {
  isAuth: false,
  isLoading: false,
  isError: "",
  user: { username: "", userpassword: "" },
};

export enum AuthAction {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
}

export interface IAction_SET_AUTH {
  type: AuthAction.SET_AUTH;
  payload: boolean;
}

export interface IAction_SET_USER {
  type: AuthAction.SET_USER;
  payload: IUser;
}

export interface IAction_SET_ERROR {
  type: AuthAction.SET_ERROR;
  payload: string;
}

export interface IAction_SET_IS_LOADING {
  type: AuthAction.SET_IS_LOADING;
  payload: boolean;
}

export type IAction =
  | IAction_SET_AUTH
  | IAction_SET_USER
  | IAction_SET_ERROR
  | IAction_SET_IS_LOADING;

interface IState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  isError: string;
}

export const authReduser = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case AuthAction.SET_AUTH:
      return { ...state, isAuth: action.payload };

    case AuthAction.SET_ERROR:
      return { ...state, isError: action.payload };

    case AuthAction.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case AuthAction.SET_USER:
      return { ...state, user: { ...action.payload } };

    default:
      return state;
  }
};

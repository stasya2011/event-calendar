import { IUser } from "../../../types";
import {
  AuthAction,
  IAction_SET_AUTH,
  IAction_SET_ERROR,
  IAction_SET_IS_LOADING,
  IAction_SET_USER,
} from "./authReduser";
import { AppDispatch } from "../../index";
import { getUsers } from "../../../api/UserService";

export const ActionCreators = {
  setUser: (user: IUser): IAction_SET_USER => ({
    type: AuthAction.SET_USER,
    payload: user,
  }),

  setError: (message: string): IAction_SET_ERROR => ({
    type: AuthAction.SET_ERROR,
    payload: message,
  }),

  setIsLoading: (isLoading: boolean): IAction_SET_IS_LOADING => ({
    type: AuthAction.SET_IS_LOADING,
    payload: isLoading,
  }),

  setIsAuth: (isAuth: boolean): IAction_SET_AUTH => ({
    type: AuthAction.SET_AUTH,
    payload: isAuth,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(ActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response: any = await getUsers();
          const mockUser = response.data.users.find(
            (user: IUser) => user.username === username
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(ActionCreators.setUser(mockUser));
            dispatch(ActionCreators.setIsAuth(true));
          } else {
            dispatch(ActionCreators.setError("Invalid login or password."));
          }
          dispatch(ActionCreators.setIsLoading(false));
        }, 2000);
      } catch (e) {
        dispatch(ActionCreators.setError("Error message"));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ActionCreators.setIsLoading(true));
      dispatch(ActionCreators.setIsAuth(false));
      dispatch(ActionCreators.setUser({ username: "", userpassword: "" }));
      return dispatch(ActionCreators.setIsLoading(false));
    } catch (e) {
      return dispatch(ActionCreators.setError("Error message"));
    }
  },
};

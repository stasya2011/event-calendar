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

  setAuth: (isAuth: boolean): IAction_SET_AUTH => ({
    type: AuthAction.SET_AUTH,
    payload: isAuth,
  }),

  login:
    (username: string, userpassword: string) =>
    async (dispath: AppDispatch) => {
      try {
        dispath(ActionCreators.setIsLoading(true));
        const loginUsers = await getUsers();
        const index = loginUsers.data.findIndex(
          (user: IUser) =>
            user.userpassword === userpassword && username === user.username
        );

        if (index > -1) {
          dispath(ActionCreators.setAuth(true));
          dispath(ActionCreators.setUser(loginUsers.data[index]));
        } else {
          dispath(
            ActionCreators.setError("Entered incorrect password or username")
          );
        }
        return dispath(ActionCreators.setIsLoading(true));
      } catch (e) {
        return dispath(ActionCreators.setError("Error message"));
      }
    },

  logout: () => async (dispath: AppDispatch) => {
    try {
      dispath(ActionCreators.setIsLoading(true));
      dispath(ActionCreators.setAuth(false));
      dispath(ActionCreators.setUser({ username: "", userpassword: "" }));
      return dispath(ActionCreators.setIsLoading(false));
    } catch (e) {
      return dispath(ActionCreators.setError("Error message"));
    }
  },
};

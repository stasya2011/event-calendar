import Events from "../pages/Events";
import Login from "../pages/Login";
import ErrorPage from "../pages/Error/Error";

export interface IRoute {
  path: string;
  element: any;
  exact?: boolean;
}

export enum RouteNames {
  ERROR = "*",
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    element: Login,
  },
  {
    path: RouteNames.ERROR,
    element: ErrorPage,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.EVENT,
    element: Events,
  },
  {
    path: RouteNames.ERROR,
    element: ErrorPage,
  },
];

import axios, { AxiosResponse } from "axios";
import { IUser } from "../types";

export const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
  return axios.get<IUser[]>("./db.json");
};

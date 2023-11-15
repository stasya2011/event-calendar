import axios, { AxiosResponse } from "axios";
import { IUser } from "../types";

export const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
  try {
    const response = await axios.get("./db.json");
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

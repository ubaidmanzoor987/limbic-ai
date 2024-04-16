import { USERS } from "@/constants/api";
import { IUsersResponse, IUsers } from "@/store/app/types";
import {
  deleteRequest,
  getErrorMessage,
  getRequest,
  postRequest,
  putRequest,
} from "../utils";

export const getAllUsers = async (): Promise<IUsers[]> => {
  try {
    const resp = await getRequest(`${USERS}`);
    return resp.data.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getUserById = async (id: string): Promise<IUsersResponse> => {
  try {
    const resp = await getRequest(`${USERS}${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const createUser = async (name: string): Promise<IUsersResponse> => {
  try {
    const resp = await postRequest(USERS, { name });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const updateUser = async (
  name: string,
  id: string
): Promise<IUsersResponse> => {
  try {
    const resp = await putRequest(`${USERS}${id}`, { name });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const deleteUser = async (
  id: number | string
): Promise<IUsersResponse> => {
  try {
    const resp = await deleteRequest(`${USERS}${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

import { ANSWERS } from "@/constants/api";

import {
  IAnswers,
  IAnswersResponse,
  ICreateUpdateAnswer,
  IGetAllAnswersResponse,
} from "@/store/app/types";

import {
  deleteRequest,
  getErrorMessage,
  getRequest,
  postRequest,
  putRequest,
} from "../utils";

export const getAllAnswers = async (): Promise<IAnswers[]> => {
  try {
    const resp = await getRequest(`${ANSWERS}`);
    return resp.data.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getAnswerById = async (id: string): Promise<IAnswersResponse> => {
  try {
    const resp = await getRequest(`${ANSWERS}/${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getAnswersByQuestionId = async (
  id: string
): Promise<IGetAllAnswersResponse> => {
  try {
    const resp = await getRequest(`${ANSWERS}-by-question-id/${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const createAnswer = async (
  payload: ICreateUpdateAnswer
): Promise<IAnswersResponse> => {
  try {
    const resp = await postRequest(ANSWERS, { ...payload });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const updateAnswer = async (
  payload: IAnswers,
  id: string
): Promise<IAnswersResponse> => {
  try {
    const resp = await putRequest(`${ANSWERS}/${id}`, { ...payload });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const deleteAnswer = async (
  id: number | string
): Promise<IAnswersResponse> => {
  try {
    const resp = await deleteRequest(`${ANSWERS}/${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

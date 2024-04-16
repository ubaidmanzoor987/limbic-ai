import { QUESTIONS } from "@/constants/api";

import { IQuestionsResponse, IQuestions } from "@/store/app/types";

import {
  deleteRequest,
  getErrorMessage,
  getRequest,
  postRequest,
  putRequest,
} from "../utils";

export const getAllQuestions = async (): Promise<IQuestions[]> => {
  try {
    const resp = await getRequest(`${QUESTIONS}`);
    return resp.data.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const getQuestionById = async (
  id: string
): Promise<IQuestionsResponse> => {
  try {
    const resp = await getRequest(`${QUESTIONS}${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const createQuestion = async (
  text: string
): Promise<IQuestionsResponse> => {
  try {
    const resp = await postRequest(QUESTIONS, { text });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const updateQuestion = async (
  text: string,
  id: string
): Promise<IQuestionsResponse> => {
  try {
    const resp = await putRequest(`${QUESTIONS}${id}`, { text });
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

export const deleteQuestion = async (
  id: number | string
): Promise<IQuestionsResponse> => {
  try {
    const resp = await deleteRequest(`${QUESTIONS}${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(getErrorMessage(err));
  }
};

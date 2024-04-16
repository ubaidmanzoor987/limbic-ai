export interface IUsers {
  id?: string;
  name: string;
}

export interface IAnswers {
  id?: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  question_id?: string;
  user_id?: string;
  user?: IUsers;
  question?: IQuestions;
}

export interface IQuestions {
  id?: string;
  text: string;
}

export interface IApiResponse {
  message: string;
  error: string | null | Object;
}

export interface IAnswersResponse extends IApiResponse {
  data: IAnswers;
}

export interface IGetAllAnswersResponse extends IApiResponse {
  data: IAnswers[];
}

export interface IQuestionsResponse extends IApiResponse {
  data: IQuestions;
}

export interface IUsersResponse extends IApiResponse {
  data: IUsers;
}

export interface ICreateUpdateAnswer {
  text: string;
  userId?: string;
  questionId: string;
  id?: string;
}

export interface IAppState {
  //users
  user: IUsers;

  // questions
  allQuestions: Array<IQuestions>;
  allQuestionsPending: boolean;
  allQuestionsError: string | undefined;
  selectedQuestion: IQuestions;
  openQuestionModal: boolean;

  // answers
  allAnswers: Array<IAnswers>;
  allAnswersPending: boolean;
  allAnswersError: string | undefined;
  selectedAnswer: IAnswers;
  openAnswersModal: boolean;
}

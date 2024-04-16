import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IAnswers, IAppState, IQuestions, IUsers } from "./types";
import { getAllAnswers } from "@/services/app/answers";
import { getAllQuestions } from "@/services/app/questions";

export const getAllAnswersThunk = createAsyncThunk(
  "app/getAllAnswers",
  async () => {
    return await getAllAnswers();
  }
);

export const getAllQuestionsThunk = createAsyncThunk(
  "app/getAllQuestions",
  async () => {
    return await getAllQuestions();
  }
);

const getInitialData = () => {
  let storageUser = "";

  if (typeof window !== "undefined") {
    storageUser = localStorage.getItem("user") ?? "";
  }

  let user = {} as IUsers;

  if (storageUser) {
    user = JSON.parse(storageUser) as IUsers;
  }

  return {
    user,
  };
};

export const initialState: IAppState = {
  //questions
  allQuestions: [] as Array<IQuestions>,
  allQuestionsPending: false,
  allQuestionsError: "",
  selectedQuestion: {} as IQuestions,
  openQuestionModal: false,

  //answers
  allAnswers: [] as Array<IAnswers>,
  allAnswersPending: false,
  allAnswersError: "",
  selectedAnswer: {} as IAnswers,
  openAnswersModal: false,

  //user
  user: getInitialData().user,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resetApp: () => {
      return initialState;
    },
    clearErrors(state: IAppState) {
      state.allQuestionsError = "";
      state.allAnswersError = "";
    },
    setUser(state: IAppState, { payload }: PayloadAction<IUsers>) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    setSelectedQuestion(
      state: IAppState,
      { payload }: PayloadAction<IQuestions>
    ) {
      state.selectedQuestion = payload;
    },
    setOpenQuestionModal(
      state: IAppState,
      { payload }: PayloadAction<boolean>
    ) {
      state.openQuestionModal = payload;
    },
    setSelectedAnswer(state: IAppState, { payload }: PayloadAction<IAnswers>) {
      state.selectedAnswer = payload;
    },
    setOpenAnswerModal(state: IAppState, { payload }: PayloadAction<boolean>) {
      state.openAnswersModal = payload;
    },
  },
  extraReducers: (builder) => {
    // questions
    builder.addCase(getAllQuestionsThunk.pending, (state) => {
      state.allQuestionsPending = true;
    });
    builder.addCase(getAllQuestionsThunk.rejected, (state, { error }) => {
      state.allQuestionsError = error.message;
      state.allQuestionsPending = false;
    });
    builder.addCase(getAllQuestionsThunk.fulfilled, (state, action) => {
      state.allQuestions = action.payload;
      state.allQuestionsPending = false;
    });

    // answers
    builder.addCase(getAllAnswersThunk.pending, (state) => {
      state.allAnswersPending = true;
    });
    builder.addCase(getAllAnswersThunk.rejected, (state, { error }) => {
      state.allAnswersError = error.message;
      state.allAnswersPending = false;
    });
    builder.addCase(getAllAnswersThunk.fulfilled, (state, action) => {
      state.allAnswers = action.payload;
      state.allAnswersPending = false;
    });
  },
});

export const {
  clearErrors,
  resetApp,
  setOpenAnswerModal,
  setOpenQuestionModal,
  setSelectedAnswer,
  setSelectedQuestion,
  setUser,
} = appSlice.actions;

export default appSlice.reducer;

import * as yup from "yup";

export const answers = yup.object().shape({
  questionId: yup.array().of(yup.string()).required("Question Is Required"),
  userId: yup.array().of(yup.string()).required("User Is Required"),
  text: yup.string().required("Text is required"),
});

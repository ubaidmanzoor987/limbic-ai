import * as yup from "yup";

export const questions = yup.object().shape({
  text: yup.string().required("Text is required"),
});

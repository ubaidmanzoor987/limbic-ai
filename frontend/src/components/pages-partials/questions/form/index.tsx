import React, { useCallback, useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CircularProgress, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@/hooks/useReduxTypedHooks";
import { IAnswers, ICreateUpdateAnswer, IQuestions } from "@/store/app/types";
import { ToastMsg } from "@/components/core/ToastMsg";
import Button from "@/components/core/Button";
import { COLORS } from "@/constants/colors";
import TextAreaInput from "@/components/core/FieldInput/TextareaInput";
import { getAllQuestionsThunk } from "@/store/app/appSlice";
import { getAppDataSelector } from "@/store/app";
import DeleteModal from "@/components/core/DeleteModal";

import { questions } from "@/validations/questions";
import { deleteQuestion, updateQuestion } from "@/services/app/questions";
import { createAnswer, getAnswersByQuestionId } from "@/services/app/answers";

import ListQuestionAnswers from "../answers-listing";

import { LabelHeading, ButtonDiv } from "./index.styles";

export const QuestionForm = () => {
  const { selectedQuestion, user } = useAppSelector(getAppDataSelector);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
  const [creatingAnswer, setCreatingAnswer] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [answers, setAnswers] = useState<IAnswers[]>([]);
  const [answer, setAnswer] = useState<string>("");

  const dispatch = useAppDispatch();
  const router = useRouter();
  const questionId = router.query.id as string;

  const onFormSubmit = async (values: IQuestions) => {
    if (!questionId) {
      return;
    }
    try {
      setIsSubmitting(true);
      const obj = { ...values };
      const resp = await updateQuestion(obj.text, questionId);

      if (resp && resp.data && resp.data.text) {
        setIsSubmitting(false);
        toast(<ToastMsg description={`Succesfully Updated`} />, {
          autoClose: 5000,
          type: "success",
          icon: false,
        });
        dispatch(getAllQuestionsThunk());
      }
    } catch (err: any) {
      console.log({ err });
      setIsSubmitting(false);
      toast(
        <ToastMsg description={`Unable to  update due to ${err.message}`} />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  };

  const handleDelete = async () => {
    if (!questionId) {
      return;
    }
    try {
      setIsDeleting(true);
      const resp = await deleteQuestion(questionId);
      if (resp && resp.data && resp.data.id) {
        toast(<ToastMsg description={`Question is Deleted successfully`} />, {
          autoClose: 5000,
          type: "success",
          icon: false,
        });
        dispatch(getAllQuestionsThunk());
        setIsOpen(false);
        router.push("/questions");
      }
      setIsDeleting(false);
    } catch (error: any) {
      setIsDeleting(false);
      toast(
        <ToastMsg
          description={`Unable to delete question ${error.message} `}
        />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  };

  const getQuestionAnswersAsync = useCallback(async () => {
    try {
      const resp = await getAnswersByQuestionId(questionId);
      if (resp.data && resp.data.length > 0) {
        setAnswers(resp.data);
      }
    } catch (error: any) {
      toast(
        <ToastMsg description={`Unable to get answers ${error.message} `} />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  }, [questionId]);

  const handleAddAnswer = async () => {
    if (!answer) {
      toast(<ToastMsg description={`Please add answer`} />, {
        autoClose: 5000,
        type: "success",
        icon: false,
      });
      return;
    }
    try {
      setCreatingAnswer(true);
      const payload: ICreateUpdateAnswer = {
        questionId,
        text: answer,
        userId: user.id,
      };
      const resp = await createAnswer(payload);
      if (resp && resp.data && resp.data.id) {
        toast(<ToastMsg description={`Answer is added successfully`} />, {
          autoClose: 5000,
          type: "success",
          icon: false,
        });
      }
      setCreatingAnswer(false);
      await getQuestionAnswersAsync();
    } catch (error: any) {
      setCreatingAnswer(false);
      toast(
        <ToastMsg description={`Unable to add answer ${error.message} `} />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  };

  useEffect(() => {
    if (questionId) {
      getQuestionAnswersAsync();
    }
  }, [dispatch, getQuestionAnswersAsync, questionId]);

  return (
    <>
      <Formik
        initialValues={selectedQuestion}
        validationSchema={questions}
        onSubmit={onFormSubmit}
        enableReinitialize
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => {
          return (
            <Form style={{ width: "100%", padding: "20px" }}>
              <ButtonDiv>
                <Button
                  width="15%"
                  onClick={() => setIsOpen(true)}
                  disabled={isDeleting}
                  backgroundColor="#C72222"
                  type="button"
                >
                  Delete
                </Button>

                <Button width="15%" disabled={isSubmitting} type="submit">
                  {isSubmitting ? (
                    <CircularProgress
                      style={{ color: COLORS.WHITE_100 }}
                      size={16}
                    />
                  ) : (
                    "Update"
                  )}
                </Button>
              </ButtonDiv>
              <Grid container marginTop={"20px"}>
                <Grid item xs={2}>
                  <LabelHeading>Question:</LabelHeading>
                </Grid>
                <Grid item xs={10}>
                  <Field
                    as={TextAreaInput}
                    id="text"
                    name="text"
                    placeholder="Enter Your Question Here"
                    error={errors.text && touched.text ? true : false}
                    helperText={<ErrorMessage name="text" />}
                  />
                </Grid>
                <Grid container marginTop={"20px"}>
                  <Grid item xs={2}>
                    <LabelHeading>Add Your Answer:</LabelHeading>
                  </Grid>
                  <Grid item xs={10}>
                    <TextAreaInput
                      name="answer"
                      placeholder="Enter Your Question Here"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={answer}
                    />
                  </Grid>
                </Grid>
                <ButtonDiv>
                  <Button
                    width="15%"
                    disabled={creatingAnswer}
                    type="button"
                    onClick={handleAddAnswer}
                  >
                    {creatingAnswer ? (
                      <CircularProgress
                        style={{ color: COLORS.WHITE_100 }}
                        size={16}
                      />
                    ) : (
                      "Add"
                    )}
                  </Button>
                </ButtonDiv>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <Grid container marginTop={"20px"}>
        <ListQuestionAnswers answers={answers} />
      </Grid>
      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isSubmitting={isSubmitting}
        handleDeleteConfirmation={handleDelete}
      />
    </>
  );
};

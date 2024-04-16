import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { ToastMsg } from "@/components/core/ToastMsg";
import BottomNavBar from "@/components/layout/bottom-navbar";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";
import {
  setOpenQuestionModal,
  setSelectedQuestion,
} from "@/store/app/appSlice";
import { getQuestionById } from "@/services/app/questions";

import { QuestionForm } from "../form";

import { Container } from "@/styles/global.styles";

export default function EditQuestions() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(setOpenQuestionModal(true));
  };

  useEffect(() => {
    if (router.query && router.query.id) {
      const getQuestionAsync = async () => {
        try {
          const id = router.query.id as string;
          const resp = await getQuestionById(id);
          if (resp.data && resp.data.id) {
            dispatch(setSelectedQuestion(resp.data));
          }
        } catch (error: any) {
          console.log("error", error);
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

      getQuestionAsync();
    }
  }, [dispatch, router.query, router.query.id]);

  return (
    <>
      <BottomNavBar
        title={"Questions"}
        type="edit"
        onClickEditAction={handleEditClick}
      />
      <Container>{<QuestionForm />}</Container>
    </>
  );
}

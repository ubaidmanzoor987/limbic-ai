import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { toast } from "react-toastify";

import { COLORS } from "@/constants/colors";
import Button from "@/components/core/Button";
import { ToastMsg } from "@/components/core/ToastMsg";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";
import TextareaInput from "@/components/core/FieldInput/TextareaInput";
import {
  getAllQuestionsThunk,
  setOpenQuestionModal,
} from "@/store/app/appSlice";
import { createQuestion } from "@/services/app/questions";
import CustomModal from "@/components/core/CustomModal";

import { ButtonDiv, ModalHeading } from "./index.styles";

interface IAddQuestionModalProps {
  isOpen: boolean;
}

export default function AddQuestionModal({ isOpen }: IAddQuestionModalProps) {
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [questionText, setQuestionText] = React.useState<string>("");

  const onCloseModal = () => {
    dispatch(setOpenQuestionModal(false));
  };

  const onAddQuestion = async () => {
    try {
      setIsSubmitting(true);
      const resp = await createQuestion(questionText);

      if (resp && resp.data && resp.data.text) {
        setIsSubmitting(false);
        toast(<ToastMsg description={`Succesfully Created`} />, {
          autoClose: 5000,
          type: "success",
          icon: false,
        });
        dispatch(getAllQuestionsThunk());
        onCloseModal();
      }
    } catch (error: any) {
      toast(
        <ToastMsg description={`Unable to add question ${error.message} `} />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  };

  return (
    <CustomModal open={isOpen} onClose={onCloseModal}>
      <>
        <ModalHeading>Question</ModalHeading>
        <Grid item xs={10}>
          <TextareaInput
            id="text"
            name="text"
            placeholder="Enter Your Question Here"
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </Grid>
        <ButtonDiv>
          <Button
            backgroundColor={`${COLORS.BLUE_200}`}
            width="10rem"
            onClick={onAddQuestion}
          >
            {isSubmitting ? (
              <CircularProgress size={16} style={{ color: COLORS.WHITE_100 }} />
            ) : (
              "Create"
            )}
          </Button>
        </ButtonDiv>
      </>
    </CustomModal>
  );
}

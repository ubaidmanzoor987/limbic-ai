import React, { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { toast } from "react-toastify";

import { COLORS } from "@/constants/colors";
import Button from "@/components/core/Button";
import { ToastMsg } from "@/components/core/ToastMsg";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxTypedHooks";
import TextareaInput from "@/components/core/FieldInput/TextareaInput";
import { getAllAnswersThunk, setOpenAnswerModal } from "@/store/app/appSlice";
import { updateAnswer } from "@/services/app/answers";
import CustomModal from "@/components/core/CustomModal";
import { getAppDataSelector } from "@/store/app";
import { ICreateUpdateAnswer } from "@/store/app/types";

import { ButtonDiv, ModalHeading } from "./index.styles";

interface IAnswerModalProps {
  isOpen: boolean;
}

export default function AnswerModal({ isOpen }: IAnswerModalProps) {
  const dispatch = useAppDispatch();
  const { user, selectedAnswer } = useAppSelector(getAppDataSelector);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const [text, setText] = React.useState<string>("");

  const onCloseModal = () => {
    dispatch(setOpenAnswerModal(false));
  };

  const handleSubmitButton = async () => {
    if (selectedAnswer && selectedAnswer.id && selectedAnswer.question_id) {
      try {
        setIsSubmitting(true);
        const payload: ICreateUpdateAnswer = {
          questionId: selectedAnswer.question_id,
          userId: user.id,
          text,
        };
        const resp = await updateAnswer(payload, selectedAnswer.id);

        if (resp && resp.data && resp.data.text) {
          setIsSubmitting(false);
          toast(<ToastMsg description={`Succesfully Updated`} />, {
            autoClose: 5000,
            type: "success",
            icon: false,
          });
          dispatch(getAllAnswersThunk());
          onCloseModal();
        }
      } catch (error: any) {
        setIsSubmitting(false);
        toast(
          <ToastMsg
            description={`Unable to update answer ${error.message} `}
          />,
          {
            autoClose: 5000,
            type: "error",
            icon: false,
          }
        );
      }
    }
  };

  useEffect(() => {
    setText(selectedAnswer.text);
  }, [selectedAnswer]);

  return (
    <CustomModal open={isOpen} onClose={onCloseModal}>
      <>
        <ModalHeading>Answer</ModalHeading>
        <Grid item xs={10}>
          <TextareaInput
            id="text"
            name="text"
            placeholder="Enter Your Answer Here"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Grid>
        <ButtonDiv>
          <Button
            backgroundColor={`${COLORS.BLUE_200}`}
            width="10rem"
            onClick={handleSubmitButton}
          >
            {isSubmitting ? (
              <CircularProgress size={16} style={{ color: COLORS.WHITE_100 }} />
            ) : (
              "Update"
            )}
          </Button>
        </ButtonDiv>
      </>
    </CustomModal>
  );
}

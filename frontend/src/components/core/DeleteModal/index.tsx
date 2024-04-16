import React from "react";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

import { COLORS } from "@/constants/colors";
import Button from "@/components/core/Button";
import CustomModal from "../CustomModal";

import { AlertDiv, AlertText, ButtonDiv, ModalHeading } from "./index.styles";

interface IDeleteModalProps {
  isOpen: boolean;
  isSubmitting: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteConfirmation: () => void;
}

export default function DeleteModal({
  isOpen,
  isSubmitting,
  setIsOpen,
  handleDeleteConfirmation,
}: IDeleteModalProps) {
  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal open={isOpen} onClose={onCloseModal}>
      <>
        <AlertDiv>
          <Image
            src={"/svgs/alert-icon.svg"}
            alt="img-icon"
            height={20}
            width={20}
          />
          <AlertText>Alert:</AlertText>
        </AlertDiv>
        <ModalHeading>Are you sure you want to delete?</ModalHeading>
        <ButtonDiv>
          <Button
            className="alert-button"
            width="22rem"
            onClick={() => setIsOpen(false)}
          >
            No
          </Button>
          <Button
            backgroundColor={`${COLORS.BLUE_200}`}
            width="22rem"
            onClick={handleDeleteConfirmation}
          >
            {isSubmitting ? (
              <CircularProgress size={16} style={{ color: COLORS.WHITE_100 }} />
            ) : (
              "Yes"
            )}
          </Button>
        </ButtonDiv>
      </>
    </CustomModal>
  );
}

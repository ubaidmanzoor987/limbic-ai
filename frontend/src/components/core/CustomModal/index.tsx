import { Backdrop, Fade, Modal } from "@mui/material";
import React from "react";

import { StyledModalBox } from "./index.styles";

interface ICustomModalModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal({
  open,
  onClose,
  children,
}: ICustomModalModal) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        },
      }}
      style={{
        background: "transparent",
        padding: "1rem",
      }}
    >
      <Fade in={open}>
        <StyledModalBox sx={{ outline: "none" }}>{children}</StyledModalBox>
      </Fade>
    </Modal>
  );
}

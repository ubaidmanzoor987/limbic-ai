import React from "react";
import { Typography } from "@mui/material";

import { StyledAvatar, StyledCard, StyledCardContent } from "./index.styles";

interface ICustomAnswerCard {
  name?: string;
  answer: string;
}

function CustomAnswerCard({ name, answer }: ICustomAnswerCard) {
  return (
    <StyledCard>
      <StyledAvatar alt={name} src={"/svgs/account.svg"} />
      <StyledCardContent>
        <Typography variant="h6">{name ?? "Anonymous"}</Typography>
        <Typography variant="body2">{answer}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

export default CustomAnswerCard;

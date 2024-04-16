import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";
import Avatar from "react-avatar";

export const StyledCard = styled(Card)`
  display: flex;
  margin: 20px;
  width: 400px;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const StyledAvatar = styled(Avatar)`
  margin: 10px;
  width: 60px;
  height: 60px;
`;

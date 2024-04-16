import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 55%;
  width: 30%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.WHITE_100};
  /* box-shadow: 24px; */
  padding: 1rem;
  border-radius: 5px;
`;

import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const ButtonDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  margin-left: 40%;
  margin-top: 1.5rem;
`;

export const ModalHeading = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${COLORS.THEME_COLOR};
  margin-top: 5px;
`;

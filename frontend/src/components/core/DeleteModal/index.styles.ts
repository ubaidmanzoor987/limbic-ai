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
  color: ${COLORS.BLACK_100};
  margin-top: 5px;
`;

export const AlertDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const AlertText = styled.div`
  color: #c72222;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`;

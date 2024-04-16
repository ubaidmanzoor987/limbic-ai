import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { COLORS } from "@/constants/colors";

export const StyledGridBg1 = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: calc(50% - 2px);
  column-gap: 10px;
  p {
    font-size: 24px !important;
    font-weight: 400;
    color: ${COLORS.BLACK_100} !important;
  }
`;

export const Container = styled(Grid)`
  background-color: ${COLORS.WHITE_100};
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledGridRight = styled(Grid)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px !important;
    font-weight: 600;
    color: ${COLORS.BLACK_100} !important;
    margin: 20px 0 0 0;
  }
`;

export const StyledGetStarted = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 700;
  background-color: ${COLORS.BLUE_200};
  color: ${COLORS.WHITE_100};
  border-radius: 5px;
  box-shadow: 0px 3px 10px 0px #0284d540;
  border: 1px solid #c3cad2;
`;

export const HeadingWelcome = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: 600;
  color: ${COLORS.BLUE_200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineDiv = styled.div`
  width: 2px;
  height: 554px;
  background-color: #5c667080;
`;

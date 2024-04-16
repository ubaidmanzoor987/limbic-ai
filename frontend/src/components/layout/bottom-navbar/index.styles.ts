import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: 0px 4px 10px 0px #0284d533;
  border: 1px solid ${COLORS.GREY_BORDER};
  border-radius: 8px;
  margin-top: 1rem;
`;

export const ColumnTitle = styled.p`
  color: ${COLORS.BLACK_100};
  font-size: 24px;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const DivTitle = styled.p`
  color: ${COLORS.BLACK_100};
  font-size: 24px;
  font-weight: 400;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  p {
    color: black;
    margin: 5px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ModalTitle = styled.p`
  color: black;
  margin: 0.5rem;
  font-size: 36px;
  font-weight: 400;
`;

export const SearchButton = styled.button`
  width: 13%;
  border-radius: 5px;
  background-color: ${COLORS.BLUE_THEME};
  border: 1px solid ${COLORS.BLUE_THEME};
  padding: 4.5px 10px;
  color: ${COLORS.WHITE_100};
  font-size: 20px;
  font-weight: 600;
`;

export const BottomNavButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  color: ${COLORS.WHITE_100};
  box-shadow: 0px 2px 7px 0px #0284d533;
  background-color: ${COLORS.BLUE_200};
  font-size: 20px;
  margin-top: 13px;
  font-weight: 600;
  border-radius: 8px;
`;

export const BottomNavButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

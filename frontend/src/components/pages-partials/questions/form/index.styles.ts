import styled from "@emotion/styled";

import { COLORS } from "@/constants/colors";
interface ILabelHeading {
  isEmpty?: boolean | false;
}

export const Container = styled.div`
  background-color: ${COLORS.WHITE_100};
  display: flex;
  flex-direction: column;
  margin: 0 2rem 2rem 2rem;
  border-radius: 8px;
  height: 620px;
  border: 1px solid ${COLORS.GREY_BORDER};
`;

export const ButtonDiv = styled.div`
  width: 50%;
  margin-left: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 2rem;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 2px;
`;

export const ImageBox = styled.div`
  border: 1px solid ${COLORS.GREY_100};
  background-color: ${COLORS.IMAGE_BOX_BG};
  border: 2px dotted ${COLORS.GREY_BORDER};
  border-radius: 5px;
  width: 180px;
  height: 185px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BLUE_100};
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
`;

export const LabelHeading = styled.div<ILabelHeading>`
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  color: ${({ isEmpty }) => (isEmpty ? "red" : COLORS.BLACK_100)};
  width: 50%;
  display: flex;
  align-items: center;
`;
export const ImageHeading = styled.div`
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
  color: ${COLORS.BLACK_100};
  width: 50%;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0.5rem;
`;

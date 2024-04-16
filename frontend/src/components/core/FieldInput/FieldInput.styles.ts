import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

import { COLORS } from "@/constants/colors";

interface IFieldInputProps {
  customWidth?: string;
  borderRadius?: string;
}

interface IFieldInputProps {
  customWidth?: string;
  customMargin?: number;
  isEmpty?: boolean;
}

export const FieldInputStyled = styled(TextField)<IFieldInputProps>`
  width: 100%;
  margin-bottom: 0rem !important;
  background: ${COLORS.WHITE_100};
  border-radius: 5px;
  & input {
    padding: 10px 20px 10px 40px;
    background-color: ${COLORS.WHITE_100};
  }
  & input:focus {
    outline: none;
  }
  & .css-ipodw2-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 5px;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-radius: 5px;
    border: 1px solid #c3cad2;
    outline: none;
  }
`;

export const FieldSearchInputStyled = styled(TextField)`
  width: 100%;
  color: #d8d8d8;
  &.MuiTextField-root > div {
    border-radius: 5px;
    background-color: ${COLORS.GREY_300};
    font-size: 14px;
    margin-right: 1%;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  &.error {
    border-color: ${COLORS.RED_100};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-width: 0.5px;
      border-color: ${COLORS.GREY_BORDER};
    }
  }
  & .MuiInputBase-input {
    height: 18px;
    font-weight: 300;
    padding: 8.5px 30px;
  }
`;

export const FieldInputStyledTextArea = styled(TextField)<IFieldInputProps>`
  width: 100%;
  color: #d8d8d8;
  &.MuiTextField-root > div {
    border-radius: 5px;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  &.error {
    border-color: ${COLORS.RED_100};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-width: 0.5px;
      border-color: ${COLORS.BLUE_THEME};
    }
  }
  & .MuiInputBase-input {
    height: 5px;
    font-weight: 400;
  }
`;

export const SearchInputDIv = styled.div<IFieldInputProps>`
  position: relative;
  width: 100%;
  margin: 0px;
`;

export const ImageDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 7px;
  z-index: 9;
`;

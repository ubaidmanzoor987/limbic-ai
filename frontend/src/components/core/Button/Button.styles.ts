import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const ButtonStyled = styled.button<{
  backgroundColor?: string;
  width?: string;
  isLogin?: boolean;
  isLogo?: boolean;
  isEdit?: boolean;
  hoverColor?: string;
  isTransparent?: boolean;
  CaretColor?: string;
  Pan?: string;
}>`
  ${({ isTransparent, backgroundColor, width, isEdit, isLogin, isLogo }) =>
    isTransparent
      ? ` background-color:${COLORS.THEME_COLOR_BLUE} ;
         width:30%;
        font-weight:600;
        font-size:15px;
        height:40px;
        border:none;
        color: red};
         border: none; `
      : `
            
        border: 0px;
        border-radius:${isLogo ? "8px" : "5px"};;
        font-weight:${isEdit ? 400 : 600};
        font-size:15px;
        background-color: ${
          isLogin ? COLORS.LIGHT_GREEN : COLORS.THEME_COLOR_BLUE
        };
  
`}

  background-color: ${(props) =>
    props.isLogin
      ? COLORS.LIGHT_GREEN
      : props.backgroundColor || COLORS.THEME_COLOR_BLUE};
  width: ${(props) => props.width || "100%"};

  color: white;

  cursor: pointer;
  padding: ${(props) => (props.isEdit ? " 0 0.5rem" : " 0 0.7rem")};
  height: 30px;
  transition: 0.5s;
  background-size: 200% auto;
  display: ${(props) => (props.isLogo ? "flex" : "block")};
  align-items: ${(props) => (props.isLogo ? "center" : "none")};
  gap: ${(props) => (props.isLogo ? "5px" : "")};
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

import Image from "next/image";

import { IInputProps } from "./FieldInput.types";

import {
  FieldInputStyled,
  FieldSearchInputStyled,
  ImageDiv,
  SearchInputDIv,
} from "./FieldInput.styles";

const FieldInput = ({
  className,
  helperText,
  inputType = "input",
  ...props
}: IInputProps) => {
  return (
    <>
      {inputType === "search-input" ? (
        <SearchInputDIv>
          <ImageDiv>
            <Image
              src={"/svgs/search.svg"}
              alt="search-icon"
              width={20}
              height={20}
            />
          </ImageDiv>

          <FieldSearchInputStyled className={`${className}`} {...props} />
        </SearchInputDIv>
      ) : (
        <FieldInputStyled
          className={`${className}`}
          helperText={helperText}
          {...props}
        />
      )}
    </>
  );
};

export default FieldInput;

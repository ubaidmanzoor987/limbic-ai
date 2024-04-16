import { FieldInputStyledTextArea } from "./FieldInput.styles";
import { IInputProps } from "./FieldInput.types";

const TextareaInput = ({ className, ...props }: IInputProps) => {
  return (
    <FieldInputStyledTextArea
      multiline
      rows={4}
      className={`${className}`}
      {...props}
    />
  );
};

export default TextareaInput;

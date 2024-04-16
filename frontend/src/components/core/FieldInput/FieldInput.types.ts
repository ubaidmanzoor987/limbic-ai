import { ChangeEventHandler } from "react";

import { TextFieldProps } from "@mui/material/TextField";

export type IInputProps = {
  name: string;
  isStatus?: boolean;
  inputType?: "input" | string;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  type?: string;
  InputProps?: any;
  helperText?: any;
  isEmpty?: boolean;
} & TextFieldProps;

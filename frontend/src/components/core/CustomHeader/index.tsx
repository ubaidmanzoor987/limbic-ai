import { HeaderTag } from "./index.styles";

interface ICustomHeader {
  title: string;
  onPressSort?: () => void;
  onPressUnSort?: () => void;
}

const CustomHeader = ({ title }: ICustomHeader) => {
  return <HeaderTag>{title}</HeaderTag>;
};

export default CustomHeader;

import Image from "next/image";

import {
  NewButtonDiv,
  OverLayComponent,
  TextBox,
  TextDescription,
} from "@/styles/global.styles";

interface CustomNoRowsOverlayProps {
  desp?: string;
  name?: string;
  onClickAdd?: () => void;
}

export const CustomNoRowsOverlay = ({
  desp,
  name,
  onClickAdd,
}: CustomNoRowsOverlayProps) => {
  return (
    <OverLayComponent>
      <Image
        src={"/svgs/norecord.svg"}
        alt="norecord-svg"
        width={80}
        height={80}
      />
      <TextBox>No Record</TextBox>
      {name && (
        <>
          <TextDescription>{desp}</TextDescription>
          <NewButtonDiv onClick={onClickAdd}> + {name}</NewButtonDiv>
        </>
      )}
    </OverLayComponent>
  );
};

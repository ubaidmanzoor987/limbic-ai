import Image from "next/image";
import { Grid } from "@mui/material";
import { Description, GridStyle, ToastImage, Heading } from "./index.style";

export const ToastMsg = (props: any) => {
  const { toastProps, description } = props;
  let icon = "/svgs/success.svg";
  let heading = "Success";

  if (toastProps.type === "error") {
    icon = "/svgs/error.svg";
    heading = "Error";
  }
  if (toastProps.type === "success") {
    icon = "/svgs/success.svg";
    heading = "Success";
  }

  return (
    <GridStyle container>
      <Grid item xs={2}>
        <ToastImage>
          <Image src={icon} width={25} alt="pic" height={25} />
        </ToastImage>
      </Grid>
      <Grid item xs={10}>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </Grid>
    </GridStyle>
  );
};

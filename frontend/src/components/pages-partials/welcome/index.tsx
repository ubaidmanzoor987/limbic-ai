import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Image from "next/image";
import { CircularProgress, Grid } from "@mui/material";

import { useAppDispatch } from "@/hooks/useReduxTypedHooks";
import { setUser } from "@/store/app";
import { ToastMsg } from "@/components/core/ToastMsg";
import FieldInput from "@/components/core/FieldInput";
import { createUser } from "@/services/app/users";

import {
  StyledGridRight,
  StyledGridBg1,
  Container,
  StyledGetStarted,
  HeadingWelcome,
  LineDiv,
} from "./index.styles";

export default function Welcome() {
  const router = useRouter();

  const [obj, setObj] = useState<{ name: string }>({
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onClickGetStarted = async () => {
    if (obj.name.length > 0) {
      setIsLoading(true);
      try {
        const resp = await createUser(obj.name);
        if (resp && resp.data && resp.data.id) {
          dispatch(setUser(resp.data));
          router.push("/home");
        }
      } catch (error: any) {
        toast(<ToastMsg description={error.message} />, {
          autoClose: 5000,
          type: "error",
          icon: false,
        });
        setIsLoading(false);
      }
    } else {
      toast(<ToastMsg description={"name is  required"} />, {
        autoClose: 5000,
        type: "error",
        icon: false,
      });
    }
  };

  return (
    <Container container position="relative">
      <StyledGridBg1>
        <Image src="/logo.png" alt="img" width={100} height={100}></Image>
        <p> Limbic AI</p>
      </StyledGridBg1>
      <LineDiv />
      <StyledGridRight item zIndex={1} rowGap="15px">
        <div style={{ width: "50%", margin: "auto", minWidth: "358px" }}>
          <Grid container>
            <HeadingWelcome>Welcome</HeadingWelcome>
          </Grid>
          <Grid container display="flex" flexDirection="column">
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="flex-start"
              paddingBottom="2%"
            >
              <p>Enter your name</p>
            </Grid>
            <Grid item width={"100%"} position={"relative"}>
              <FieldInput
                required
                fullWidth
                name="name"
                value={obj.name}
                placeholder="Enter Your name"
                InputProps={{ sx: { borderRadius: 0 } }}
                onChange={(e) => {
                  setObj({ name: e.target.value });
                }}
              />
              <Image
                src={"/svgs/user.svg"}
                alt="user-icon"
                width={20}
                height={20}
                style={{ position: "absolute", top: "10px", left: "10px" }}
              />
            </Grid>
          </Grid>
          <StyledGetStarted disabled={isLoading} onClick={onClickGetStarted}>
            {isLoading ? (
              <CircularProgress
                sx={{ color: "white" }}
                size={20}
                thickness={4}
              />
            ) : (
              "Get Started"
            )}
          </StyledGetStarted>
        </div>
      </StyledGridRight>
    </Container>
  );
}

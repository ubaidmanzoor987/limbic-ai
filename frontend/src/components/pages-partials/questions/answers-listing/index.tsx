import { Grid, Typography } from "@mui/material";

import Avatar from "react-avatar";

import { IAnswers } from "@/store/app/types";

import { LabelHeading } from "../form/index.styles";

interface IListAnswer {
  answers: IAnswers[];
}

export default function ListQuestionAnswers({ answers }: IListAnswer) {
  return (
    <Grid container padding="20px">
      <LabelHeading> Other Answers</LabelHeading>
      {answers.map((answer) => {
        return (
          <Grid
            item
            xs={12}
            style={{ border: "1px solid grey" }}
            key={answer.id}
          >
            <Grid container>
              <Grid
                item
                xs={0.5}
                marginBlock={"1rem"}
                alignItems={"center"}
                justifyContent={"center"}
                display="flex"
              >
                <Avatar src="/svgs/account.svg" size="50px" />
              </Grid>
              <Grid item xs={11}>
                <Grid container marginBlock={"1rem"}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      {answer?.user?.name ?? "Anonymous"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {answer?.text}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

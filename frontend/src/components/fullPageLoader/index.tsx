import { Grid } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";

import SharedLayout from "../layout/shared-layout";

import {
  Div,
  StyledBar,
  StyledButton,
  StyledGrid,
  StyledMainGrid,
  StyledTable,
  WraperGrid,
} from "./index.style";

function FullPageSkeleton() {
  return (
    <StyledMainGrid>
      <Stack>
        <WraperGrid>
          <StyledGrid>
            <Grid>
              <StyledButton variant="rounded" width={120} height={43} />
            </Grid>
            <Grid>
              <Div>
                <StyledBar variant="rounded" width="100%" height={120} />
              </Div>
            </Grid>
            <Grid>
              <Div>
                <StyledTable variant="rounded" width="100%" height={330} />
              </Div>
            </Grid>
          </StyledGrid>
        </WraperGrid>
      </Stack>
    </StyledMainGrid>
  );
}

interface IFullPageLoader {
  title?: string;
}

export default function FullPageLoader({ title = "" }: IFullPageLoader) {
  return <SharedLayout children={<FullPageSkeleton />} title={title} />;
}

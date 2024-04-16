import { ReactNode } from "react";
import Head from "next/head";
import { Grid } from "@mui/material";

import Sidebar from "../sidebar";

interface SharedLayoutProps {
  children: ReactNode;
  title: string;
  isEdit?: boolean;
  onSearch?: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
}

const SharedLayout = ({
  title,
  children,
  isEdit,
  ...props
}: SharedLayoutProps) => {
  return (
    <Grid>
      <Head>
        <title>LIMBIC - AI | {title}</title>
      </Head>
      <Sidebar children={children} title={title} isEdit={isEdit} {...props} />
    </Grid>
  );
};

export default SharedLayout;

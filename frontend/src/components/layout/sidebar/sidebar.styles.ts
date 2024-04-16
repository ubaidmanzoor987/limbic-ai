import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Divider, ListItemText, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: number;
}

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "1.5rem",
  backgroundColor: "#D8D8D8",

  p: {
    margin: 0,
    fontSize: 24,
    fontWeight: "400",
    marginBottom: ".5rem",
  },
}));

export const ColumnTitle = styled.p`
  color: ${COLORS.BLACK_100};
  font-size: 24px;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const DivFlex = styled.div`
  display: flex;
`;
export const FlexRow = styled.div`
  display: flex;

  cursor: pointer;
  padding: 1.5rem;
`;
export const TypographyStyled = styled(Typography)(() => ({
  paddingLeft: `.5rem`,
  fontWeight: 600,
  fontSize: 18,
}));

export const ListItemTextStyled = styled(ListItemText)`
  display: flex;
  color: ${COLORS.BLUE_200};
  align-items: center;
  font-size: 18px;
  position: relative;
  padding: 0;

  .MuiTypography-root {
    font-weight: 500;
    font-size: 18px;
    padding: 0;
  }

  &:hover .MuiTypography-root {
    color: #006cff;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40%;
    }
  }
`;

export const MainStyle = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
  drawerwidth: number;
  title: string;
  isEdit?: boolean;
}>(({ open, drawerwidth, title, isEdit }) => ({
  padding: "0",

  marginTop: "5rem",
  width: `calc(100% - ${drawerwidth}px)`,

  transition: "all 0.3s ease-in-out",
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    transition: "all 0.1s ease-in-out",
  }),
  "& .MuiContainer-root": { marginInline: "0" },
}));

export const AppBarStyle = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ open, drawerwidth }) => ({
  background: "white",
  width: `calc(100% - ${drawerwidth}px)`,
  transition: "all 0.3s ease-in-out",
  boxShadow: "0px 2px 8px 0px #0284D533",
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: "all 0.1s ease-in-out",
  }),
}));

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.5rem;
  width: 100%;
  p {
    color: ${COLORS.BLACK_200};
  }
`;

export const DivTitle = styled.p`
  color: ${COLORS.BLACK_200};
  font-size: 24px;
  font-weight: 500;
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  p {
    color: black;
    margin: 0.5rem;
    font-size: 36px;
    font-weight: 400;
  }
`;

export const StyleBox = styled.div`
  display: flex;
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .row-space-between {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .active {
    color: #006cff;
    background-color: red;
  }
`;

export const StyleToolbar = styled(Toolbar)`
  background: ${COLORS.WHITE_100};
  padding-block: 2rem;
`;

export const StyleDivider = styled(Divider)`
  width: 100%;
  background-color: ${COLORS.DIVIDER_COLOR};
  margin-top: 37px;
  height: 2px;
`;

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { COLORS } from "@/constants/colors";
import { setUser } from "@/store/app";
import { IUsers } from "@/store/app/types";

import { MENUITEMS } from "./sidebarMenu";
import {
  FlexRow,
  ListItemTextStyled,
  TypographyStyled,
  DrawerHeader,
  MainStyle,
  DivRow,
  AppBarStyle,
  StyleBox,
  StyleToolbar,
  StyleDivider,
  ImageDiv,
} from "./sidebar.styles";

interface Props {
  children: React.ReactNode;
  title: string;
  isEdit?: boolean;
  onSearch?: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
}
export default function SideBar({ children, title, isEdit }: Props) {
  const [collapse, setCollapse] = React.useState(false);
  const dispatch = useDispatch();
  const isTablet = useMediaQuery("(max-width: 960px)");

  React.useEffect(() => {
    setCollapse(isTablet);
  }, [isTablet]);

  const router = useRouter();

  const onCLickLogout = async () => {
    dispatch(setUser({} as IUsers));
    localStorage.removeItem("user");
    router.push("/welcome");
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const drawerWidth = collapse ? 80 : 240;

  return (
    <StyleBox>
      <AppBarStyle position="fixed" open={true} drawerwidth={drawerWidth}>
        <StyleToolbar>
          <DivRow>
            <div className="column">
              <div className="row-space-between">
                <Typography
                  fontSize={32}
                  fontWeight={700}
                  color={`${COLORS.THEME_COLOR} !important`}
                  style={{ lineHeight: "41px" }}
                >
                  {title}
                </Typography>
                <ImageDiv>
                  <Image
                    alt="notification-svg"
                    src={"/svgs/notification.svg"}
                    width={30}
                    height={30}
                    style={{ marginRight: "10px" }}
                  />
                  <Image
                    alt="account-svg"
                    src={"/svgs/account.svg"}
                    width={30}
                    height={30}
                  />
                </ImageDiv>
              </div>
            </div>
          </DivRow>
        </StyleToolbar>
      </AppBarStyle>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: "#D8D8D8",
            display: "flex",
            justifyContent: "space-between",
            border: "none",
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflowX: "hidden",
            overflowY: "hidden",
            transition: "all 0.1s ease-in-out",
          },
        }}
      >
        <div>
          <DrawerHeader>
            <Image src="/logo.svg" width={180} height={100} alt="logo" />
            <StyleDivider />
          </DrawerHeader>
          <List
            sx={{
              padding: 0,
            }}
          >
            {MENUITEMS.map((menuItem, index) => (
              <ListItem
                key={menuItem.title}
                sx={{ display: "block", padding: 0 }}
              >
                <ListItemButton
                  sx={{
                    justifyContent: "center",
                    padding: "5px 1.5rem ",
                  }}
                >
                  <Image
                    src={
                      router.pathname
                        .toLowerCase()
                        .includes(
                          menuItem.title.toLowerCase().replace(/\s/g, "")
                        ) ||
                      (router.pathname.includes("home") && index === 0)
                        ? menuItem.icon1
                        : menuItem.icon
                    }
                    width={30}
                    height={30}
                    alt={menuItem.title}
                    style={{
                      marginRight: "8px",
                    }}
                  />
                  <ListItemTextStyled
                    primary={menuItem.title}
                    onClick={() => navigateTo(menuItem.path)}
                    sx={{
                      ".MuiListItemText-primary": {
                        color:
                          router.pathname
                            .toLowerCase()
                            .includes(
                              menuItem.title.toLowerCase().replace(/\s/g, "")
                            ) ||
                          (router.pathname.includes("home") && index === 0)
                            ? COLORS.BLUE_200
                            : COLORS.BLACK_100,
                        borderBottom:
                          router.pathname
                            .toLowerCase()
                            .includes(
                              menuItem.title.toLowerCase().replace(/\s/g, "")
                            ) ||
                          (router.pathname.includes("home") && index === 0)
                            ? `2px solid ${COLORS.BLUE_200}`
                            : "none",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <FlexRow onClick={onCLickLogout}>
          <Image
            src={"/svgs/logout.svg"}
            width={30}
            height={30}
            alt="logout-icon"
          />
          <TypographyStyled>Logout</TypographyStyled>
        </FlexRow>
      </Drawer>
      <MainStyle
        open={true}
        drawerwidth={drawerWidth}
        title={title}
        isEdit={isEdit}
      >
        {children}
      </MainStyle>
    </StyleBox>
  );
}

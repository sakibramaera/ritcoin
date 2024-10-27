import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "../../icons/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@mui/styles";
import Navbar from "./navbar";

const useStyles = makeStyles({
  social: {
    color: "#3DC1F2",
    transition: "0.5s",
    "&:hover": {
      color: "#fff",
    },
  },
  desk: {
    padding: "0rem 1.5rem",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  mob: {
    display: "none",
    "@media(max-width : 900px)": {
      display: "block",
    },
  },
});

const StyledMenu = styled(Link)(({ theme }) => ({
  backgroundColor: "#f5eb00 !important",
  color: "#000",
  padding: "14px",
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: "700 !important",
  borderRadius: "5rem",
  transition: "0.5s",
  ":hover": {
    backgroundColor: "#f5eb00 !important",
    color: "#000",
  },
}));

const LoginStyled = styled(Link)(({ theme }) => ({
  backgroundColor: "#f5eb00 !important",
  color: "#000",
  padding: "14px 4rem",
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: "700 !important",
  borderRadius: "5rem",
  transition: "0.5s",
  ":hover": {
    backgroundColor: "#f5eb00 !important",
    color: "#000",
    transform: "translateY(-5px)",
  },
  "@media(max-width : 900px)": {
    display: "none",
    "@media(max-width : 600px)": {
      display: "block",
      textAlign: "center",
      width: "120px",
      padding: "14px 1rem",
      marginLeft: "1.5rem",
    },
  },
}));

type Anchor = "top" | "left" | "bottom" | "right";

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <>
      <Box>
        <Box
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            textAlign: "end",
            margin: "15px",
          }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Link href={"#"}>
            {" "}
            <CloseIcon sx={{ color: "#3DC1F2" }} />{" "}
          </Link>

          <Navbar />
        </Box>

        {/* <Box className={classes.mob}>
          <LoginStyled href={"https://ico.mumblechat.com"} target="_blank">
            <Typography>Buy</Typography>
          </LoginStyled>
        </Box> */}
      </Box>
    </>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledMenu onClick={toggleDrawer(anchor, true)} href={""}>
            <MenuIcon />
          </StyledMenu>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

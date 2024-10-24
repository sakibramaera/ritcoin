"use client";
import Image from "next/image";
import { Box, Drawer, Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import logo from "../../icons/home/logo.svg";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  "@media(max-width : 600px)": {
    display: "none",
  },
}));
const StyledMenu = styled(Link)(({ theme }) => ({
  backgroundColor: "#3DC1F2 !important",
  color: "#fff",
  padding: "14px",
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: "700 !important",
  borderRadius: "5rem",
  transition: "0.5s",
  ":hover": {
    backgroundColor: "#fff !important",
    color: "#000",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  img: {
    "@media(max-width : 600px)": {
      width: "230px",
      marginTop: "5px",
    },
  },
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.7rem 2rem",
  borderBottom: "1px solid #1D1D20",
  "@media(max-width : 600px)": {
    paddingTop: "0.5rem",
    padding: "0.7rem 1rem",
  },
}));

export default function Header() {
  const [openMob, setOpenMob] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMob(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.main,
        p: 3,
        a: {
          width: "100%",
          justifyContent: "center",
          marginTop: "1rem",
        },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Link href={"#"}>
        <KeyboardBackspaceIcon
          sx={{ color: theme.palette.primary.contrastText }}
        />
      </Link>
      <Button>jbjjb</Button>
    </Box>
  );
  return (
    <Box>
      <MainBox>
        <StyledBox>
          <Box>
            <StyledLink href={"/"}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={50}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </StyledLink>
          </Box>
        </StyledBox>
        <Box sx={{ "@media(max-width : 900px)": { display: "none" } }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* <LoginStyled href={"https://ico.mumblechat.com"} target="_blank">
            <Typography>Buy</Typography>
          </LoginStyled> */}

          <Box
            sx={{
              display: "none",
              "@media(max-width : 900px)": {
                display: "block",
              },
            }}
          >
            <Sidebar />
          </Box>

          {/* <StyledMenu
                    href={""}>
                    <MenuIcon />
                </StyledMenu> */}
        </Box>
      </MainBox>
    </Box>
  );
}

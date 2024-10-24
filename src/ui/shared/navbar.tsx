"use client";

import Link from "next/link";
import { Box, colors, styled } from "@mui/material";
import { usePathname } from "next/navigation";

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "30px !important",
  color: "#CECECE",
  ":hover": {
    color: "#f5eb00",
  },
}));

const ListBox = styled("ul")(({ theme }) => ({
  padding: 10,
  listStyle: "none",
  display: "inline-flex",
  gap: "1rem",
  borderRadius: "5rem",
  "@media(max-width : 1200px)": {
    gap: "0rem",
    "@media(max-width : 900px)": {
      display: "inherit",
      backgroundColor: "transparent",
      border: "none",
    },
  },
}));

const ListItem = styled("li")(({ theme }) => ({
  a: {
    padding: "12px 16px",
    display: "block",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    borderRadius: "6px",
    width: "max-content",
  },
}));

const navLinks = [
  {
    name: "Overview",
    href: "/",
  },
  {
    name: "Validators",
    href: "/validators",
  },
  {
    name: "Delegator",
    href: "/delegator",
  },
  {
    name: "My Account",
    href: "/account",
  },
  {
    name: " Earning Calculator",
    href: "/calculator",
  },
  {
    name: "History",
    href: "/history",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box>
      <ListBox>
        <ListItem>
          <LinkStyled href="/">Home</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled href="/#private">Powered By</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled href="/#roadmap">Roadmap</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled href="/#tokenomics">Tokenomics</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled href="/#faq">FAQs</LinkStyled>
        </ListItem>
      </ListBox>
    </Box>
  );
};
export default Navbar;

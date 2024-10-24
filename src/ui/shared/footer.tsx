import Text from "@/theme/components/text";
import { Box, Grid, InputBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import logo from "../../icons/home/logo.svg";
import twitter from "../../icons/home/twitter.svg";
import instagram from "../../icons/home/instagram.svg";
import linkedin from "../../icons/home/linkedin.svg";
import facebook from "../../icons/home/facebook.svg";
import telegram from "../../icons/home/telegram.svg";
import discord from "../../icons/home/discord.svg";
import github from "../../icons/home/github.svg";
import youtube from "../../icons/home/youtube.svg";

const useStyles = makeStyles({
  list__item: {
    color: "#fff",
    textDecoration: "none",
    transition: "0.5s",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  listBox: {
    marginTop: "1rem",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  input__box: {
    backgroundColor: "#ffffff12",
    padding: "0px 0px 0px 10px",
    borderRadius: "12px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "1.5rem",
  },
  tele: {
    backgroundColor: "#ffff",
    display: "inline-block",
    padding: "1rem",
    borderRadius: "12px",
  },
  line: {
    width: "100%",
    height: "2px",
    background:
      "linear-gradient(225deg, #010314 0%, rgba(255, 255, 255, .45) 54.98%, rgba(1, 3, 20, .99) 100%)",
  },
  box__listAlign: {
    "@media(max-width : 900px)": {
      textAlign: "center",
    },
  },
  heading__align: {
    color: "#f5eb00",
    fontFamily: "Bruce Forever !important",
    "@media(max-width : 600px)": {
      fontSize: "20px",
    },
  },
  paratext: {
    width: "320px",
    fontSize: "15px !important",
    "@media(max-width : 1200px)": {
      width: "240px",
      "@media(max-width : 900px)": {
        width: "inherit",
      },
    },
  },
  sociallist: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1.2rem",
    "@media(max-width : 900px)": {
      justifyContent: "center",
    },
  },
  social__link: {
    width: "50px",
    height: "50px",
    border: "1px solid #252525",
    borderRadius: "30px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#252525",
    },
  },
  logo__img: {
    "@media(max-width : 600px)": {
      width: "230px",
    },
  },
  btm_line: {
    background: "linear-gradient(90deg, #101012, #eaff0099,#101012)",
    width: "100%",
    height: "1px",
    margin: "1.5rem 0rem",
  },
  btm_line_box: {
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  const dis_text =
    "RitCoin can provide enhanced security, privacy, and integrity of messages. Here's an outline of how blockchain could be integrated into such an application.";
  return (
    <>
      <Box
        sx={{
          padding: "2.5rem",
          "@media(max-width : 600px)": {
            padding: "1rem",
          },
        }}
      >
        <Box
          sx={{
            border: "1px solid #1D1D20",
            backgroundColor: "#101012",
            padding: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4} md={3.5} sm={12} xs={12}>
              <Box className={classes.box__listAlign}>
                <Link href={"/"}>
                  <Image
                    className={classes.logo__img}
                    src={logo}
                    alt={""}
                    width={200}
                    height={50}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Link>
                <Box className={classes.list} component={"ul"}>
                  <Box className={classes.listBox} component={"li"}>
                    <Typography fontSize={16}>{dis_text}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
              <Box className={classes.box__listAlign}>
                <Typography className={classes.heading__align} variant="h5">
                  Sitemap
                </Typography>
                <Box className={classes.list} component={"ul"}>
                  <Box className={classes.listBox} component={"li"}>
                    <Link className={classes.list__item} href="/#tokenomics">
                      Tokenomics
                    </Link>
                  </Box>
                  <Box className={classes.listBox} component={"li"}>
                    <Link className={classes.list__item} href="/#roadmap">
                      Roadmap
                    </Link>
                  </Box>
                  <Box className={classes.listBox} component={"li"}>
                    <Link className={classes.list__item} href="/#private">
                      Powered By
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.5} md={2} sm={12} xs={12}>
              <Box className={classes.box__listAlign}>
                <Typography className={classes.heading__align} variant="h5">
                  Legals
                </Typography>
                <Box className={classes.list} component={"ul"}>
                  <Box className={classes.listBox} component={"li"}>
                    <Link
                      className={classes.list__item}
                      href="/termofuse"
                      target="_black"
                    >
                      Terms Of Use
                    </Link>
                  </Box>
                  <Box className={classes.listBox} component={"li"}>
                    <Link className={classes.list__item} href="/privacypolicy">
                      Privacy Policy
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <Box className={classes.box__listAlign}>
                <Typography className={classes.heading__align} variant="h5">
                  Socials
                </Typography>
                <Box component={"ul"} className={classes.sociallist}>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://x.com/RITCOIN24"}
                    >
                      <Image src={twitter} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://www.instagram.com/ritcoin/"}
                    >
                      <Image src={instagram} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://www.linkedin.com/in/rit-coin-63a1a1334/"}
                    >
                      <Image src={linkedin} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=61567631217789"
                      }
                    >
                      <Image src={facebook} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://t.me/mumblechat"}
                    >
                      <Image src={telegram} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"#"}
                    >
                      <Image src={discord} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://github.com/RITCOIN915"}
                    >
                      <Image src={github} alt={""} />
                    </Link>
                  </Box>
                  <Box component={"li"}>
                    <Link
                      className={classes.social__link}
                      target="_blank"
                      href={"https://www.youtube.com/@RITCOIN-k6m"}
                    >
                      <Image src={youtube} alt={""} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.btm_line_box}>
            <Box className={classes.btm_line} />
            <Typography>© 2024 RitCoin.com | All rights reserved</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

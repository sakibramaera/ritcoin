import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import pdf from "../../icons/home/pdf.svg";
import pdf2 from "../../icons/home/pdf2.svg";
import AddressCopy from "./addressCopy";
// import mmcticon from "../../icons/home/mmcticon.jpeg";
const useStyles = makeStyles({
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "5rem",
    "@media(max-width : 900px)": {
      marginTop: "0rem",
    },
  },

  btn: {
    backgroundColor: "#f5eb00 !important",
    color: "#000",
    padding: "14px 22px",
    display: "inline-flex",
    textDecoration: "none",
    fontWeight: "700 !important",
    borderRadius: "5rem",
    width: "250px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#f5eb00 !important",
      color: "#000",
      transform: "translateY(-5px)",
    },
    "@media(max-width : 600px)": {
      width: "100%",
      margin: "0rem 0.5rem",
    },
  },
  btn2: {
    backgroundColor: "transparent !important",
    width: "250px",
    justifyContent: "center",
    color: "#f5eb00",
    border: "1px solid #f5eb00",
    padding: "14px 22px",
    display: "inline-flex",
    textDecoration: "none",
    fontWeight: "700 !important",
    alignItems: "center",
    gap: "10px",
    borderRadius: "5rem",
    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "@media(max-width : 600px)": {
      width: "100%",
      margin: "0rem 0.5rem",
    },
  },
  btnWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    marginTop: "1rem",
    "@media(max-width : 600px)": {
      flexWrap: "wrap",
      gap: "1rem",
    },
  },
  comingSoon: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
  },
  comingSoonText: {
    backgroundColor: "#101012",
    border: "1px solid #1D1D20",
    padding: "0.8rem 8rem",
    borderRadius: "5rem",
  },
  text__box: {
    textAlign: "center",
    margin: "1.5rem",
  },
});

const Platform = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.heading}>
          <Heading heading={"What Is RitCoin?"} />
        </Box>
        <Box className={classes.comingSoon}>
          <Typography
            sx={{
              "@media(max-width : 600px)": {
                fontSize: "18px",
                textAlign: "center",
              },
            }}
            variant="h4"
            fontFamily={"Bruce Forever !important"}
          >
            Fast, Secure, and Rewarding
          </Typography>
        </Box>
        <Box className={classes.text__box}>
          <Text
            text={
              "RitCoin RT: Safe, ecommerce,  on Ramestta Blockchain! RT Token is a unique digital asset created as part of our platform’s reward system. It is designed to benefit users who actively engage with our community by completing certain tasks, such as joining our social media channels and contributing to the growth of the platform."
            }
          />
        </Box>
        <Box>
          <Box className={classes.btnWrap}>
            <Link className={classes.btn} href={"RT COIN.pdf"} target="_blank">
              <Image src={pdf} alt={""} />
              <Typography> RT COIN</Typography>
            </Link>
          </Box>
          <Box className={classes.btnWrap}>
            <AddressCopy
              title={"RT"}
              text={"0xaBd570785F17208bA9397d5Aea38357f058F8416"}
              address={"0xaBd5.....F8416"}
              icon
              redirecr_url={
                "https://ramascan.com/token/0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd?tab=contract"
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Platform;

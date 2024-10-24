import Heading from "@/theme/components/heading";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import contribution_shape01 from "../../icons/contribution_shape01.png";
import contribution_shape02 from "../../icons/contribution_shape02.png";
import Image from "next/image";
import Link from "next/link";
import mobview from "../../icons/home/mobview.png";
import Text from "@/theme/components/text";

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
    width: "230px",
    justifyContent: "center",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#f5eb00 !important",
      color: "#000",
      transform: "translateY(-5px)",
    },
  },
  btn2: {
    backgroundColor: "transparent !important",
    width: "230px",
    justifyContent: "center",
    color: "#f5eb00",
    border: "1px solid #f5eb00",
    padding: "14px 22px",
    display: "inline-flex",
    textDecoration: "none",
    fontWeight: "700 !important",
    borderRadius: "5rem",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#f5eb00 !important",
      color: "#000",
      transform: "translateY(-5px)",
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
    "@media(max-width : 600px)": {
      padding: "0.8rem 5rem",
    },
  },
  text__box: {
    textAlign: "center",
    margin: "1.5rem",
  },
  view__mobile: {
    padding: "4rem 2rem",
    "@media(max-width : 600px)": {
      padding: "4rem 1rem",
    },
  },
  view__img: {
    width: "100%",
    "@media(max-width : 600px)": {
      height: "auto",
    },
  },
});

const Countribution = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.heading}>
          <Heading heading={"Private Sale"} />
        </Box>
        <Box className={classes.comingSoon}>
          <Box className={classes.comingSoonText}>
            <Text text={"Coming Soon"} />
          </Box>
        </Box>
        <Box className={classes.text__box}>
          <Text
            text={
              "Join the RitCoin crypto Private Sale, engage with the project, and see your contribution"
            }
          />
          <Text text={"grow to new heights."} />
        </Box>
        <Box>
          <Box className={classes.btnWrap}>
            {/* <Link
              className={classes.btn}
              href={"https://ico.mumblechat.com/"}
              target="_blank"
            >
              <Typography>Join Private Sale</Typography>
            </Link> */}
            <Link className={classes.btn2} href={""}>
              <Typography>How to Buy</Typography>
            </Link>
          </Box>
        </Box>
        <Box className={classes.view__mobile}>
          <Image
            className={classes.view__img}
            src={mobview}
            alt={""}
            width={1000}
            height={500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Countribution;

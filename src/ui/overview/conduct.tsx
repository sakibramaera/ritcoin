import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import features_two_img01 from "../../icons/features_two_img01.png";
import features_two_img02 from "../../icons/features_two_img02.png";
import features_two_img03 from "../../icons/features_two_img03.png";
import Heading from "@/theme/components/heading";
import token from "../../icons/home/token.png";
import Text from "@/theme/components/text";
import Link from "next/link";

const useStyles = makeStyles({
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "5rem",
    "@media(max-width : 600px)": {
      flexWrap: "wrap",
      marginTop: "3rem",
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
    marginTop: "3rem",
    "@media(max-width : 600px)": {
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center",
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
  token__box: {
    textAlign: "center",
    padding: "2rem 0rem",
  },
  token_img: {
    "@media(max-width : 600px)": {
      width: "100%",
      padding: "0rem 1.5rem",
      height: "auto",
    },
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    "@media(max-width : 600px)": {
      display: "inherit",
      textAlign: "center",
    },
  },
  empty_box: {
    width: "30px",
    height: "30px",
    borderRadius: "30px",
    "@media(max-width : 600px)": {
      display: "inherit",
      margin: "auto auto 10px auto",
    },
  },
  listItem_wrp: {
    marginTop: "1rem",
  },
  mainWrap_box: {
    display: "flex",
    justifyContent: "center",
    "@media(max-width : 600px)": {
      padding: "0rem 1rem",
    },
  },
  roundbx: {
    width: "10px",
    height: "10px",
    borderRadius: "30px",
    backgroundColor: "#fff",
  },
  roundbx_wrpa: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  ico_box: {
    border: "1px solid #1D1D20",
    padding: "1rem 10rem 1rem 1rem",
    borderRadius: "12px",
    backgroundColor: "#101012",
    display: "inline-block",
    margin: "2rem 0rem 1rem 0rem",
    "@media(max-width : 600px)": {
      padding: "1rem 5rem 1rem 1rem",
    },
  },
  icotext: {
    "@media(max-width : 600px)": {
      fontSize: "15px !important",
    },
  },
});

const Conduct = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.heading}>
          <Heading heading={"Tokenomics"} />
        </Box>
        <Box className={classes.text__box}>
          <Text
            text={"RitCoin has a supply of 50 trillion  RT, a testament to"}
          />
          <Text text={"its exclusivity and value preservation."} />
        </Box>
        <Box className={classes.token__box}>
          <Image
            className={classes.token_img}
            src={token}
            alt={""}
            width={400}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        <Box className={classes.mainWrap_box}>
          <Box className={classes.list} component={"ul"}>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#F27400"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  ICO (35%)
                </Typography>
              </Box>
              <Box className={classes.ico_box}>
                <Typography fontFamily={"Bruce Forever !important"}>
                  Use of ICO Funds
                </Typography>

                <Box className={classes.roundbx_wrpa}>
                  <Box className={classes.roundbx} />
                  <Typography>Development: 40%</Typography>
                </Box>
                <Box className={classes.roundbx_wrpa}>
                  <Box className={classes.roundbx} />
                  <Typography>Marketing: 30%</Typography>
                </Box>
                <Box className={classes.roundbx_wrpa}>
                  <Box className={classes.roundbx} />
                  <Typography>Operations: 20%</Typography>
                </Box>
                <Box className={classes.roundbx_wrpa}>
                  <Box className={classes.roundbx} />
                  <Typography>Legal and Compliance: 10%</Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#F51F39"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  Community Rewards (40%)
                </Typography>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#094813"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  Future Development & Operations (15%)
                </Typography>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#B448E6"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  Team & Advisors (5%)
                </Typography>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#CAC103"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  Ecosystem Growth (2.5%)
                </Typography>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}>
              <Box className={classes.listItem}>
                <Box className={classes.empty_box} bgcolor={"#6410D0"}></Box>
                <Typography
                  className={classes.icotext}
                  variant="h6"
                  fontFamily={"Bruce Forever !important"}
                >
                  Liquidity Provision (2.5%)
                </Typography>
              </Box>
            </Box>
            <Box className={classes.listItem_wrp} component={"li"}></Box>
          </Box>
        </Box>
        <Box className={classes.btnWrap}>
          <Link className={classes.btn} href={""}>
            <Typography>Learn More</Typography>
          </Link>
          {/* <Link className={classes.btn2} href={""}>
                                    <Typography>ritcoin Paper</Typography>
                                </Link> */}
        </Box>
      </Box>
    </>
  );
};

export default Conduct;

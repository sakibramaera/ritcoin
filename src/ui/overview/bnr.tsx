import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import bnr from "../../icons/home/desktop.svg";

const useStyles = makeStyles({
  bnr__box: {
    textAlign: "center",
    padding: "6rem 0rem",
    "@media(max-width : 900px)": {
      padding: "0rem 0rem",
    },
  },
  bnrimg: {
    "@media(max-width : 1200px)": {
      width: "100%",
      padding: "0rem 2rem",
      "@media(max-width : 900px)": {
        height: "auto",
        marginTop: "4rem",
      },
    },
  },
});

const Bnr = () => {
  const classes = useStyles();

  return (
    <>
      <Box className="bnrbg">
        <Box className={classes.bnr__box}>
          <Image
            className={classes.bnrimg}
            src={bnr}
            alt={""}
            width={1300}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Bnr;

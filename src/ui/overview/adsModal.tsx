import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Button, Container, Typography } from "@mui/material";
import { positions, styled } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../icons/home/ads.png";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Heading from "@/theme/components/heading";
import zIndex from "@mui/material/styles/zIndex";

const useStyles = makeStyles({
  box: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  btn: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    py: "0.25rem",
    px: "0.5rem",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    borderRadius: "9999px",
  },

  image: {
    // width: "100%",
    height: "70vh",
    width: "56vw",
    borderRadius: "20px",
    "@media(max-width : 600px)": {
      // padding: "0rem 0rem",
      maxWidth: "100%",
      width: "300px",
      height: "350px",
    },
  },
});

const AdsModal: React.FC = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      {isOpen && (
        <Box className={classes.box}>
          <Box sx={{ position: "relative" }}>
            <Button className={classes.btn} onClick={closeModal}>
              <CancelIcon />
            </Button>
            <Image src={brand1} alt="Banner 2" className={classes.image} />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default AdsModal;

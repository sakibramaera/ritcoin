"use client";
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Bnr from "./bnr";
import Countribution from "./countribution";
import AdsModal from "./adsModal";
import AutoSlider from "./autoSlider";
import Platform from "./platform";
import Conduct from "./conduct";
import Roadmap from "./roadmap";
import Faqs from "./faqs";
import Footer from "../shared/footer";
import Application from "./application";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homecmp = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(45deg, #449757 50%, #0d8253 90%)",
        }}
      >
        <Header />
        <Box component={"section"} id="private">
          {" "}
          <AdsModal />
        </Box>
        <Bnr />
        <Countribution />
        <Platform />
        <Box component={"section"} id="private">
          {" "}
          <AutoSlider />
        </Box>
        <Box component={"section"} id="roadmap">
          {" "}
          <Roadmap />
        </Box>
        <Box component={"section"} id="tokenomics">
          {" "}
          <Conduct />
        </Box>
        <Application />
        <Box component={"section"} id="faq">
          {" "}
          <Faqs />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Homecmp;

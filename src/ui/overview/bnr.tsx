import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import bnr1 from "../../icons/home/jobs.png";
import bnr2 from "../../icons/home/familyshoping.png";
import bnr3 from "../../icons/home/ecomvision.png";

const useStyles = makeStyles({
  bnr__box: {
    width: "100%",
    textAlign: "center",
    display: "flex !important",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "6rem 0rem",
    "@media(max-width : 900px)": {
      // padding: "0rem 0rem",
    },
  },
  bnr_image: {
    // width: "100%",
    border: "2px solid black",
    borderRadius: "5%",
    "@media(max-width : 600px)": {
      // padding: "0rem 0rem",
      maxWidth: "100%",
      width: "300px",
      height: "280px",
      border: "2px solid black",
      borderRadius: "10%",
    },
  },
});

const Bnr = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box className="bnrbg">
      <Slider {...settings}>
        <Box className={classes.bnr__box}>
          <Image
            className={classes.bnr_image}
            src={bnr1}
            alt="Banner 1"
            width={1300}
            height={800}
            // style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Box className={classes.bnr__box}>
          <Image
            className={classes.bnr_image}
            src={bnr2}
            alt="Banner 2"
            width={1300}
            height={800}
            // style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Box className={classes.bnr__box}>
          <Image
            className={classes.bnr_image}
            src={bnr3}
            alt="Banner 3"
            width={1300}
            height={800}
            // style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default Bnr;

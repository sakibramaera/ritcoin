


import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from '../../icons/home/Gemini.svg'
import brand2 from '../../icons/home/OpenAi.svg'
import brand3 from '../../icons/home/ramestta.svg'
import brand4 from '../../icons/home/CoinStats.svg'
import brand5 from '../../icons/home/CF.svg'
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import Heading from '@/theme/components/heading';


const useStyles = makeStyles({
  box: {
    backgroundColor: "#f5eb00",
    width: "20px",
    height: "20px",
    borderRadius: "30px",
  },
  Box__wrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    padding: "7rem 0rem 2rem 0rem",
  },
  img_box: {
    margin: "0px 20px !important",
  },
});

const logos = [
  {
    brand: brand1,
  },
  {
    brand: brand2,
  },
  {
    brand: brand3,
  },
  {
    brand: brand4,
  },
  {
    brand: brand5,
  },
  {
    brand: brand1,
  },
  {
    brand: brand2,
  },
  {
    brand: brand3,
  },
  {
    brand: brand4,
  },
  {
    brand: brand5,
  },



  // Add more paths to your logo images here
];

const SliderWrapper = styled(Box)(({ theme }) => ({
  '.slick-slide': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& img': {
      maxHeight: '80px',
      maxWidth: '100px',
    },
  },
}));

const AutoSlider: React.FC = () => {
  const classes = useStyles();


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      
    ]
  };

  return (
    <Container>
      <Box className={classes.Box__wrap}>
        <Box className={classes.box} />
        <Heading heading={"Powered By"} />
        <Box className={classes.box} />
      </Box>
      <SliderWrapper>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index}>
              <Image className={classes.img_box} src={logo.brand as any} alt={''} />
            </Box>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default AutoSlider;


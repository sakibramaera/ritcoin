import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import rmapline from "../../icons/home/rmapline.svg";
import Heading from "@/theme/components/heading";
import { makeStyles } from "@mui/styles";
import Text from "@/theme/components/text";
// import mleft from "../../icons/home/mleft.svg";
import ecomvision from "../../icons/home/ecomvision.png";
import ecommshop from "../../icons/home/ecommshop.png";
import supermarkets from "../../icons/home/supermarkets.png";
import supermart2 from "../../icons/home/supermart2.png";
import smallfactory from "../../icons/home/smallfactory.png";
import smallfactory2 from "../../icons/home/smallfactory2.png";
import jobs from "../../icons/home/jobs.png";
import jobs2 from "../../icons/home/jobs2.png";
import profit from "../../icons/home/profit.png";
import profit2 from "../../icons/home/profit2.png";
// import mright from "../../icons/home/mright.svg";
import Link from "next/link";
import shield from "../../icons/home/shield.svg";

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

  comingSoon: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
  },
  phase: {
    backgroundColor: "#f5eb00",
    padding: "10px 20px",
    borderRadius: "30px",
    display: "inline-block",
    color: "#000",
  },
  round: {
    backgroundColor: "#fff",
    height: "10px",
    width: "10px",
    borderRadius: "30px",
    padding: "5px",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  stepBox: {
    display: "flex",
    alignItems: "baseline",
    gap: "1rem",
    marginTop: "1rem",
    "@media(max-width : 900px)": {
      display: "inherit",
    },
  },
  main__box: {
    padding: "4rem",
    "@media(max-width : 900px)": {
      padding: "1.5rem",
    },
  },
  stepBox_img: {
    marginTop: "2rem",
    textAlign: "center",
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
  btn_wrp: {
    textAlign: "center",
    marginTop: "2rem",
  },
  roadmap_dex: {
    marginTop: "5rem",
  },
  forDesk: {
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  forMob: {
    display: "none",
    "@media(max-width : 900px)": {
      display: "block",
      paddingLeft: "5rem",
      "@media(max-width : 900px)": {
        display: "block",
        paddingLeft: "1rem",
        textAlign: "center",
      },
    },
  },
  rmapline: {
    "@media(max-width : 600px)": {
      display: "none",
    },
  },
  shield: {
    position: "absolute",
    top: "30rem",
    left: "50%",
    transform: "translateX(-50%)",
  },
  boxRmp: {
    border: "1px solid #1D1D20",
    backgroundColor: "#101012",
    borderRadius: "10px",
    padding: "10px",
    width: "100%",
  },
});

const Roadmap = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main__box}>
      <Box>
        <Box className={classes.heading}>
          <Heading heading={"Roadmap"} />
        </Box>
        <Box className={classes.comingSoon}>
          <Typography
            sx={{
              "@media(max-width : 900px)": {
                fontSize: "18px",
                textAlign: "center",
              },
            }}
            variant="h4"
            fontFamily={"Bruce Forever !important"}
          >
            Build the Future with RitCoin
          </Typography>
        </Box>
        <Box textAlign={"center"} mt={1}>
          <Text
            text={
              "The RitCoin Rt roadmap outlines the key milestones and development stages of the platform, providing a timeline for the implementation of features, upgrades, and expansions"
            }
          />
        </Box>
      </Box>

      <Box className={classes.forDesk}>
        <Box className={classes.roadmap_dex}>
          <Grid container spacing={0}>
            <Grid item lg={5.5} md={5.5}>
              <Box>
                <Box className={classes.phase}>
                  <Typography>VISION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  E-Commerce Platform
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "Our vision is to build a comprehensive e-commerce website that provides users with a wide variety of products, ensuring convenience and accessibility for customers across cities and villages alike."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={ecomvision}
                    alt={""}
                    width={400}
                    height={100}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>VISION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Offline Marts
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "Along with our online platform, we plan to open physical marts in various towns and cities,offering a seamless offline shopping experience and meeting local needs with personalized service."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={supermarkets}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>VISION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Small Factories
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "We aim to establish small factories in rural and urban areas, contributing to the local economy by creating job opportunities and supporting small businesses. These factories will help promote local manufacturing and economic development."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={smallfactory}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>VISION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Employment Generation
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "Our vision is to create platforms and factories in every town and village where local talent can find jobs and enhance their skills. We aim to ensure that people can secure meaningful employment near their homes, allowing them to provide a better life for their families."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={jobs}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>VISION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Profit Sharing
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "We believe in shared growth, which is why we will distribute 10% of our total profits among all our users, ensuring that everyone who joins us benefits from our success."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={profit}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={1}
              md={1}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#101012",
                  padding: "2px",
                  height: "100%",
                  border: "1px solid #1D1D20",
                  borderRadius: "30px",
                  width: "fit-content",
                }}
              >
                <Image src={rmapline} alt={""} />
              </Box>
              <Image className={classes.shield} src={shield} alt={""} />
            </Grid>
            <Grid item lg={5.5} md={5.5}>
              <Box>
                <Box className={classes.phase}>
                  <Typography>MISSION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Create an E-Commerce Platform:
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "To develop a user-friendly e-commerce website that offers a diverse range of products for customers from all regions, making online shopping easy and accessible."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={ecommshop}
                    alt={""}
                    width={410}
                    height={120}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black", // Black border
                      borderRadius: "10%", // Rounded corners
                      marginTop: "35px",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>MISSION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Expand with Offline Marts
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "To launch offline marts across cities and towns to cater to the needs of local shoppers,creating a seamless online and offline shopping experience."
                    }
                  />
                </Box>

                <Box className={classes.stepBox_img}>
                  <Image
                    src={supermart2}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                      marginTop: "35px",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>MISSION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Support Local Economies
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "To establish small-scale factories in villages and towns, promoting local manufacturing,encouraging entrepreneurship, and generating employment opportunities."
                    }
                  />
                </Box>
                <Box className={classes.stepBox_img}>
                  <Image
                    src={smallfactory2}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                      marginTop: "35px",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>MISSION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Job Creation
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "Establish small-scale factories and centers where people can work in their local areas,reducing the need to migrate to distant cities for employment, and allowing them to stay close to their families."
                    }
                  />
                </Box>
                <Box className={classes.stepBox_img}>
                  <Image
                    src={jobs2}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                      marginTop: "18px",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box className={classes.phase}>
                  <Typography>MISSION</Typography>
                </Box>
                <Typography variant="h6" mt={1}>
                  Profit Distribution
                </Typography>

                <Box className={classes.stepBox}>
                  <Box className={classes.round} />
                  <Text
                    text={
                      "To reward our loyal users by sharing 10% of our overall profits with them, fostering a community where everyone grows together."
                    }
                  />
                </Box>
                <Box className={classes.stepBox_img}>
                  <Image
                    src={profit2}
                    alt={""}
                    width={400}
                    style={{
                      maxWidth: "100%",
                      height: "280px",
                      border: "2px solid black",
                      borderRadius: "10%",
                      marginTop: "18px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.forMob}>
        <Box className={classes.roadmap_dex}>
          <Grid container spacing={2}>
            <Box className={classes.boxRmp}>
              <Box className={classes.phase}>
                <Typography>VISION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                E-Commerce Platform
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "Our vision is to build a comprehensive e-commerce website that provides users with a wide variety of products, ensuring convenience and accessibility for customers across cities and villages alike."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>VISION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Offline Marts
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "Along with our online platform, we plan to open physical marts in various towns and cities,offering a seamless offline shopping experience and meeting local needs with personalized service."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>VISION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Small Factories
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "We aim to establish small factories in rural and urban areas, contributing to the local economy by creating job opportunities and supporting small businesses. These factories will help promote local manufacturing and economic development."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>VISION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Employment Generation
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "Our vision is to create platforms and factories in every town and village where local talent can find jobs and enhance their skills. We aim to ensure that people can secure meaningful employment near their homes, allowing them to provide a better life for their families."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>VISION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Profit Sharing
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "We believe in shared growth, which is why we will distribute 10% of our total profits among all our users, ensuring that everyone who joins us benefits from our success."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>MISSION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Create an E-Commerce Platform
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "To develop a user-friendly e-commerce website that offers a diverse range of products for customers from all regions, making online shopping easy and accessible."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>MISSION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Expand with Offline Marts
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "To launch offline marts across cities and towns to cater to the needs of local shoppers,creating a seamless online and offline shopping experience."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>MISSION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Support Local Economies
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "To establish small-scale factories in villages and towns, promoting local manufacturing,encouraging entrepreneurship, and generating employment opportunities."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>MISSION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Job Creation
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "Establish small-scale factories and centers where people can work in their local areas,reducing the need to migrate to distant cities for employment, and allowing them to stay close to their families."
                  }
                />
              </Box>
            </Box>

            <Box className={classes.boxRmp} mt={5}>
              <Box className={classes.phase}>
                <Typography>MISSION</Typography>
              </Box>
              <Typography variant="h6" mt={1}>
                Profit Distribution
              </Typography>

              <Box className={classes.stepBox}>
                <Box className={classes.round} />
                <Text
                  text={
                    "To reward our loyal users by sharing 10% of our overall profits with them, fostering a community where everyone grows together."
                  }
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.btn_wrp}>
        <Link className={classes.btn} href={""}>
          <Typography>Download Roadmap</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Roadmap;

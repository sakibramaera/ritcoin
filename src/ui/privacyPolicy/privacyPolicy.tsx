"use client";
import { Box, Typography } from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Heading from "@/theme/components/heading";
import { makeStyles } from "@mui/styles";
import SubHedaing from "@/theme/components/subHedaing";
import { Description } from "@mui/icons-material";
import Link from "next/link";

const useStyles = makeStyles({
  mainBox: {
    padding: "3rem 2.5rem 1rem 2.5rem",
    "@media(max-width : 900px)": {
      padding: "0rem 1rem 0rem 1rem",
    },
  },
  listBox: {
    margin: "2rem 0rem",
    "@media(max-width : 900px)": {
      textAlign: "center",
    },
  },
  link_style: {
    color: "#f5eb00",
  },
});

const USEOFTERMS = [
  {
    id: 1,
    Title: "1. Introduction",
    Description:
      "Ritcoin is committed to protecting your privacy. This Privacy Policy explains our data collection, use, and sharing practices.",
  },
  {
    id: 2,
    Title: "2. Information We Collect",
    Description:
      "We collect information you provide directly to us, such as account information, content you post, and communications with us.",
  },
  {
    id: 3,
    Title: "3. Use of Information",
    Description:
      "We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience.",
  },
  {
    id: 4,
    Title: "4. Sharing of Information",
    Description:
      "We do not share your personal information with third parties except as described in this policy or with your consent.",
  },
  {
    id: 5,
    Title: "5. Data Security",
    Description:
      "We implement appropriate security measures to protect your data against unauthorized access, alteration, or destruction.",
  },
  {
    id: 6,
    Title: "6. Data Retention",
    Description:
      "We retain your personal information for as long as necessary to provide our services or as required by law.",
  },
  {
    id: 7,
    Title: "7. Your Rights",
    Description:
      "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information.",
  },
  {
    id: 8,
    Title: "8. Cookies and Tracking Technologies",
    Description:
      "We use cookies and similar technologies to collect information about your use of ritcoin and to provide a better user experience.",
  },
  {
    id: 9,
    Title: "9. Third-Party Services",
    Description:
      "ritcoin may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties.",
  },
  {
    id: 10,
    Title: "10. Changes to This Policy",
    Description:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our site.",
  },

  {
    id: 11,
    Title: "11. Contact Us",
    Description:
      "If you have any questions about this Privacy Policy, please contact us at",
    URL: "support@mumblechat.com",
  },
];

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#080808",
        }}
      >
        <Header />
        <Box className={classes.mainBox}>
          {USEOFTERMS.map((item, index) => (
            <Box key={index} className={classes.listBox}>
              <SubHedaing heading={item.Title} />
              <Typography>
                {item.Description}{" "}
                {item.URL && (
                  <Typography component={"span"}>
                    <Link className={classes.link_style} href={"#"}>
                      {item.URL}
                    </Link>
                    .
                  </Typography>
                )}
              </Typography>
            </Box>
          ))}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default PrivacyPolicy;

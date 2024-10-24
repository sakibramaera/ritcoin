"use client"
import { Box, Typography } from "@mui/material"
import Header from "../shared/Header"
import Footer from "../shared/footer"
import Heading from "@/theme/components/heading"
import { makeStyles } from '@mui/styles';
import SubHedaing from "@/theme/components/subHedaing"
import { Description } from "@mui/icons-material"
import Link from "next/link"

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
      "Welcome to Ritcoin. These Terms of Use govern your use of our platform and services.",
  },
  {
    id: 2,
    Title: "2. Acceptance of Terms",
    Description:
      "By using Ritcoin, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.",
  },
  {
    id: 3,
    Title: "3. Eligibility",
    Description:
      "Users must be at least 18 years old to use Ritcoin. By using our services, you represent and warrant that you meet this age requirement.",
  },
  {
    id: 4,
    Title: "4. User Account",
    Description:
      "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
  },
  {
    id: 5,
    Title: "5. User Conduct",
    Description:
      "Users agree not to engage in any activity that is illegal, harmful, or disrupts the functioning of Ritcoin.",
  },
  {
    id: 6,
    Title: "6. Content",
    Description:
      "Users retain ownership of content they post but grant Ritcoin a license to use, display, and distribute such content.",
  },
  {
    id: 7,
    Title: "7. Privacy Policy",
    Description:
      "Your use of Ritcoin is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
  },
  {
    id: 8,
    Title: "8. Termination",
    Description:
      "Ritcoin reserves the right to suspend or terminate accounts for violations of these Terms of Use or other policies.",
  },
  {
    id: 9,
    Title: "9. Disclaimer of Warranties",
    Description:
      'Ritcoin is provided "as is" and "as available" without warranties of any kind.',
  },
  {
    id: 10,
    Title: "10. Limitation of Liability",
    Description:
      "Ritcoin is not liable for any indirect, incidental, or consequential damages arising from your use of the service.",
  },
  {
    id: 11,
    Title: "11. Changes to Terms",
    Description:
      "Ritcoin may modify these Terms of Use at any time. We will notify users of any changes by posting the new terms on our site.",
  },
  {
    id: 12,
    Title: "12. Contact Information",
    Description:
      "For any questions regarding these Terms of Use, please contact us at",
    URL: "support@Ritcoin.com",
  },
];

const TermOfUse = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Header />
                <Box className={classes.mainBox}>
                    {USEOFTERMS.map((item, index)=>(
                        <Box key={index} className={classes.listBox}>
                        <SubHedaing heading={item.Title} />
                        <Typography>{item.Description} {item.URL && <Typography component={'span'}><Link className={classes.link_style} href={"#"}>{item.URL}</Link>.</Typography>}</Typography>
                        </Box>
                    ))}
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default TermOfUse
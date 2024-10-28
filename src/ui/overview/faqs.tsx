import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import { useContext, useState } from "react";
import Heading from "@/theme/components/heading";
import { ColorModeContext } from "@/context";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: "0rem 10rem",
  "@media(max-width: 900px)": {
    margin: "0rem 2.5rem",
    "@media(max-width: 900px)": {
      margin: "0rem 1rem",
    },
  },
}));

const Accordion_list = [
  {
    id: 1,
    title: "What is ritcoin?",
    text: "RitCoin (RT) is a secure ecommerce token on the Ramestta Blockchain, designed to reward active community members for tasks like joining social channels and supporting platform growth.",
  },
  {
    id: 2,
    title: "How can users earn RT Tokens?",
    text: "Users earn RT Tokens by joining social channels and contributing to platform activities.",
  },
  {
    id: 3,
    title: "What makes RT Token unique?",
    text: "RT Token is unique because it fosters community growth and engagement on a decentralized network.",
  },
  {
    id: 4,
    title: "What is the primary purpose of RT Token?",
    text: "The purpose of RT Token is to incentivize community participation and reward engagement.",
  },
  {
    id: 5,
    title: "On which blockchain is RT Token issued?",
    text: "RT Token is issued on the Ramestta blockchain, supporting a decentralized, secure network.",
  },
  {
    id: 6,
    title: "What benefits do RT Token holders receive?",
    text: "RT Token holders benefit from exclusive rewards and opportunities within the platform.",
  },
  {
    id: 7,
    title: "How quickly are RT Tokens distributed after eligibility?",
    text: "Tokens are distributed instantly or within a specified period after eligibility criteria are verified.",
  },
];

const Faqs = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel: any | any | ((prevState: any) => any)) =>
    (event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledBox>
      <Box
        sx={{
          textAlign: "left",
          margin: "4rem 0rem 0rem 0rem",
          "@media(max-width: 600px)": {
            margin: "2rem 0rem 2rem 0rem",
            textAlign: "center",
          },
        }}
      >
        <Heading heading={"FAQs"} />
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {Accordion_list.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === (`panel${index}` as any)}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: "#1C1C20",
                borderRadius: "6px",
                boxShadow: "inherit",
                marginTop: "1rem",
                padding: "5px",
                "&.Mui-expanded": {
                  background: "linear-gradient(359deg, #f5eb00, #f5eb00)",
                  marginTop: "1rem",
                  color: "#000",
                },
              }}
            >
              <AccordionSummary
                sx={{
                  fontWeight: 700,
                }}
                expandIcon={
                  <SouthIcon
                    sx={{
                      color:
                        expanded === (`panel${index}` as any) ? "#000" : "#fff",
                    }}
                  />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails>{item.text}</AccordionDetails>
            </Accordion>
          ))}

          {/* Continue with other Accordion items */}
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default Faqs;

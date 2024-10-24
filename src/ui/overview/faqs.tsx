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
    text: "In short, Ritcoin is the Whatsapp for Web3. Our chat app allows crypto wallet owners to message each other, and our integration toolkit allows Dapps to add a great communication experience to their products fast.",
  },
  {
    id: 2,
    title: "Which blockchain can I log in to Ritcoin with?",
    text: "Ritcoin is currently supporting all EVM (e.g., Ramestta, Ethereum, Binance Smart Chain, Polygon,RAMESTTA etc.), and we have plans to expand to other blockchains like Solana, Cosmos, Flow, Aptos, and Sui in the coming future.",
  },
  {
    id: 3,
    title: "How does Ritcoin deliver messages between wallets?",
    text: 'We deliver messages via "Communication Delivery Graph", which is a decentralized encryption network designed to protect the privacy of our users. ',
  },
  {
    id: 4,
    title: "Where will my data be stored?",
    text: "We use both decentralized storage (e.g. IPFS, Arweave, etc.) and your local device. No messaging data will be stored on-chain due to security risks.",
  },
  {
    id: 5,
    title: "What are Ritcoin points?",
    text: "Ritcoin points indicate your level of engagement as a Ritcoin user. We use the points to determine a user's eligibility for future rewards such as token airdrops.",
  },
  {
    id: 6,
    title: "How do I collect Ritcoin points?",
    text: "Bottom line is: Be active on Ritcoin! Almost everything you can do on Ritcoin will accumulate to points. Think chatting, logging in, sending reactions...etc. Some actions like referral gives you extra points, so just make sure to check the pointing guide in our app. Another way of collecting point is to become the shareholder of earning chatrooms, which allows you to earn points via contributing to the group chat.",
  },
  {
    id: 7,
    title: "How do I report an issue?",
    text: "Email us at support@Ritcoin.com , or message @Ritcoin.",
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

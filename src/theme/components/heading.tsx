import { Typography } from "@mui/material"

interface props {
    heading: any;
}

const Heading = ({ heading }: props) => {
    return (
      <>
        <Typography
          sx={{
            fontFamily: "Bruce Forever !important",
            color: "#f5eb00",
            "@media(max-width : 1200px)": {
              fontSize: "30px",
              "@media(max-width : 600px)": {
                fontSize: "20px",
              },
            },
          }}
          variant="h2"
        >
          {heading}
        </Typography>
      </>
    );
}

export default Heading
import { Typography } from "@mui/material"

interface props {
    heading: any;
}

const SubHedaing = ({ heading }: props) => {
    return (
      <>
        <Typography
          sx={{
            fontFamily: "Bruce Forever !important",
            color: "#f5eb00",
            "@media(max-width : 600px)": {
              fontSize: "18px",
            },
          }}
          variant="h6"
        >
          {heading}
        </Typography>
      </>
    );
}

export default SubHedaing

"use client"


import { Box } from "@mui/material";
import dynamic from "next/dynamic";
 





const Homecmp = dynamic(
  () => import("@/ui/overview/homecmp"),
  {
    ssr: false,
  }
)

const Home = () => {

  return (
    <Box> 
      <Homecmp />
    </Box>
  );
}
export default Home;
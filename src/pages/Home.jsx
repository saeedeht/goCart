import { Grid } from "@mui/material";
import { Banner } from "../components/Banner";
import { AnimatedBar } from "../components/AnimatedBar";
import { LatestProducts } from "../components/LatestProducts";
import { BestSelling } from "../components/BestSelling";
import { Specification } from "../components/Specification";
import { Join } from "../components/Join";

function Home() {
  return (
    <>
      <Grid>
        <Banner />
        <AnimatedBar />
        <LatestProducts />
        <BestSelling />
        <Specification />
        <Join />
      </Grid>
    </>
  );
}

export default Home;

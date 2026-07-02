import { Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { AnimatedBar } from "./components/AnimatedBar";
import { LatestProducts } from "./components/LatestProducts";

function App() {
  return (
    <>
      <Grid>
        <Navbar />
        <Banner />
        <AnimatedBar />
        <LatestProducts />
      </Grid>
    </>
  );
}

export default App;

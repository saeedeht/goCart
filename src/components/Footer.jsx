import { Box, Divider, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Grid sx={{ bottom: "0%" }}>
        <Divider />
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "30px",
          }}>
          <Grid item sx={{ width: "50%" }}>
            <Grid>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  cursor: "pointer",
                }}>
                <Box component="span" sx={{ color: "#22c55e" }}>
                  Go
                </Box>
                <Box component="span" sx={{ color: "#111827" }}>
                  Cart.
                </Box>
              </Typography>
            </Grid>

            <Typography sx={{ opacity: 0.8, fontWeight: 300 }}>
              Welcome to gocart, your ultimate destination for the latest and
              smartest gadgets. From smartphones and smartwatches to essential
              accessories, we bring you the best in innovation — all in one
              place.
            </Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ fontWeight: 400 }}>PRODUCTS</Typography>
            <Typography sx={{ opacity: 0.8, fontWeight: 300 }}>
              Earphones
            </Typography>
            <Typography sx={{ opacity: 0.8, fontWeight: 300 }}>
              Headphones
            </Typography>
            <Typography sx={{ opacity: 0.8, fontWeight: 300 }}>
              Smartphones
            </Typography>
            <Typography sx={{ opacity: 0.8, fontWeight: 300 }}>
              Laptops
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

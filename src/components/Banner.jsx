import { Box, Button, Grid, Typography } from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export const Banner = () => {
  return (
    <Box sx={{ mt: 5, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              bgcolor: "#6ec48e",
              color: "#fff",
              borderRadius: 4,
              pl: 4,
              pr: 4,
              pt: 10,
              pb: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
              }}>
              NEWS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}>
              Free Shipping on Orders Above $50!
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#e5e7eb",
                fontWeight: 700,
              }}>
              Gadgets you'll love.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#e5e7eb",
                mb: 4,
                fontWeight: 700,
              }}>
              Prices you'll trust.
            </Typography>

            <Typography sx={{ opacity: 0.8 }}>Starts from</Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 4,
              }}>
              $4.90
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "#fff",
                bgcolor: "#292e36",
                width: "fit-content",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}>
              LEARN MORE
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Box
                sx={{
                  bgcolor: "#fef3c7",
                  borderRadius: 4,
                  p: 4,
                  height: 180,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Best products
                </Typography>

                <Button
                  endIcon={<EastOutlinedIcon />}
                  sx={{
                    width: "fit-content",
                    color: "#111",
                    p: 0,
                    textTransform: "none",
                  }}>
                  View more
                </Button>
              </Box>
            </Grid>

            <Grid size={12}>
              <Box
                sx={{
                  bgcolor: "#dbeafe",
                  borderRadius: 4,
                  p: 4,
                  height: 180,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  20% Discounts
                </Typography>

                <Button
                  endIcon={<EastOutlinedIcon />}
                  sx={{
                    width: "fit-content",
                    color: "#111",
                    p: 0,
                    textTransform: "none",
                  }}>
                  View more
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

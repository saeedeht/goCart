import { Box, Card, CardMedia, Rating, Typography } from "@mui/material";

export const ProductCard = ({ image, title, price }) => {
  const productTitle = (title) => {
    return title.split(" ").slice(0, 2).join(" ");
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: 280,
        height: "100%",
        borderRadius: 3,
        bgcolor: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: 240,
          height: 270,
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Box sx={{ width: 240, mt: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              color: "#111827",
            }}>
            {productTitle(title)}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              color: "#111827",
            }}>
            ${price}
          </Typography>
        </Box>

        <Rating
          value={5}
          readOnly
          size="small"
          sx={{
            color: "#22c55e",
          }}
        />
      </Box>
    </Card>
  );
};

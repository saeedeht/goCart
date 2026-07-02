import { Box, Card, CardMedia, Rating, Typography } from "@mui/material";

export const ProductCard = ({ image, title, price }) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: 280,
        height: "100%",
        borderRadius: 3,
        bgcolor: "transparent",
        cursor: "pointer",
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

      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "#111827",
            }}>
            {title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
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
            mt: 0.8,
            color: "#22c55e",
          }}
        />
      </Box>
    </Card>
  );
};

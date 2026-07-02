import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useEffect, useState } from "react";
// import { getProduct } from "../api/products";
import { useParams } from "react-router";

export const ProductDetail = () => {
  const { id } = useParams();
  // console.log("useParams", useParams());
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );

        const data = await response.json();

        console.log("id:", id);
        console.log("response:", response.status);
        console.log("data:", data);

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        mt: 6,
        px: 4,
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}>
      <img
        component="img"
        src={product?.images[0]}
        alt="Smart Speaker"
        sx={{
          width: { xs: "100%", md: 450 },
          height: 450,
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: 300,
        }}>
        <Typography variant="h4" fontWeight={700}>
          {product.title}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {product.category.name}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={5} readOnly size="small" />
          <Typography color="text.secondary">6 Reviews</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" mt={3}>
          <Typography variant="h4" color="success.main" fontWeight={700}>
            ${product.price}
          </Typography>

          <Typography
            sx={{
              textDecoration: "line-through",
              color: "gray",
            }}>
            $50
          </Typography>
        </Stack>

        <Typography color="error.main" fontWeight={600} mt={1} mb={4}>
          {product.description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            bgcolor: "#7c3aed",
            borderRadius: 3,
            py: 1.8,
            mb: 4,
          }}>
          Add to Cart
        </Button>

        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <CheckCircleOutlinedIcon color="success" />
            <Typography>Free shipping worldwide</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <CheckCircleOutlinedIcon color="success" />
            <Typography>100% Secured Payment</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <CheckCircleOutlinedIcon color="success" />
            <Typography>Trusted by top brands</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

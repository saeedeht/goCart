import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import { useParams } from "react-router";
import { useCartStore } from "../store/CartStore";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [id]);

  const cartItem = cart.find((item) => item.id === product?.id);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        padding: "40px",
      }}>
      <img
        src={product?.images[0]}
        alt="Smart Speaker"
        style={{
          width: "500px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: 300,
        }}>
        <Typography variant="h4" fontWeight={700}>
          {product?.title}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {product?.category.name}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={5} readOnly size="small" />
          <Typography color="text.secondary">6 Reviews</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" mt={3}>
          <Typography variant="h4" color="success.main" fontWeight={700}>
            ${product?.price}
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
          {product?.description}
        </Typography>

        {cartItem ? (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 200,
                border: "1px solid #ddd",
                borderRadius: 2,
                overflow: "hidden",
                mb: 4,
                mt: 4,
              }}>
              <Button onClick={() => decreaseQuantity(product.id)}>-</Button>

              <Typography fontWeight={700}>{cartItem.quantity}</Typography>

              <Button onClick={() => increaseQuantity(product.id)}>+</Button>
            </Box>
            <Button variant="contained" sx={{ bgcolor: "#23914b" }}>
              View Cart
            </Button>
          </Grid>
        ) : (
          <Button
            onClick={() => addToCart(product)}
            variant="contained"
            size="large"
            sx={{
              width: "600px",
              bgcolor: "#23914b",
              borderRadius: 3,
              py: 1.8,
              mb: 4,
              mt: 4,
            }}>
            Add to Cart
          </Button>
        )}

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

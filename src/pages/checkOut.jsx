import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useCartStore } from "../store/CartStore";

export const CheckOut = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const productTitle = (title) => {
    return title.split(" ").slice(0, 2).join(" ");
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        mt: 6,
        px: 4,
      }}>
      <Typography variant="h4" fontWeight={700} mb={5}>
        Shopping Cart
      </Typography>

      <Grid
        container
        sx={{
          fontWeight: 700,
          color: "#666",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Grid item xs={5}>
          <Typography>Product</Typography>
        </Grid>

        <Grid item xs={3} sx={{ ml: 22 }}>
          <Typography>Quantity</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>Total Price</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography>Remove</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 3 }} />

      {cart.map((product) => (
        <Grid
          container
          key={product.id}
          alignItems="center"
          sx={{
            py: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Grid item xs={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}>
              <Box
                component="img"
                src={product.images[0]}
                alt={product.title}
                sx={{
                  width: 90,
                  height: 90,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              <Box>
                <Typography fontWeight={600}>
                  {productTitle(product.title)}
                </Typography>

                <Typography color="text.secondary" fontSize={14}>
                  {productTitle(product.category.name)}
                </Typography>

                <Typography color="success.main" fontWeight={700}>
                  ${product.price}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 140,
                border: "1px solid #ddd",
                borderRadius: 2,
                overflow: "hidden",
              }}>
              <Button onClick={() => decreaseQuantity(product.id)}>-</Button>

              <Typography
                sx={{
                  flex: 1,
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                {product.quantity}
              </Typography>

              <Button onClick={() => increaseQuantity(product.id)}>+</Button>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Typography fontWeight={700}>
              ${product.price * product.quantity}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <IconButton
              color="error"
              onClick={() => removeFromCart(product.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Box
        sx={{
          padding: "20px",
          borderRadius: "4px",
          border: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          alignItems: "center",
          m: 4,
        }}>
        <Typography variant="h6">Total:</Typography>

        <Typography variant="h5" fontWeight={700} color="success.main">
          ${totalPrice}
        </Typography>
      </Box>
    </Box>
  );
};

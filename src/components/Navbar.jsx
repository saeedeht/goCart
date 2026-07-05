import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Badge,
} from "@mui/material";
import { Link } from "react-router";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useCartStore } from "../store/CartStore";

export const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  // const addToCart = useCartStore((state) => state.addToCart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          bgcolor: "#fff",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          px: { xs: 2, md: 6 },
          py: 2,
        }}>
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
        <Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#6b7280",
                fontWeight: 500,
              }}>
              Home
            </Link>

            <Link
              to="/product"
              style={{
                textDecoration: "none",
                color: "#6b7280",
                fontWeight: 500,
              }}>
              Shop
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#6b7280",
                fontWeight: 500,
              }}>
              About
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#6b7280",
                fontWeight: 500,
              }}>
              Contact
            </Link>

            <TextField
              placeholder="Search products..."
              size="small"
              sx={{
                width: { xs: "100%", sm: 260 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  bgcolor: "#f5f5f5",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon sx={{ color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Grid>

        <Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <Link to="/check-out" style={{ textDecoration: "none" }}>
              <Badge
                badgeContent={totalItems}
                color="success"
                overlap="circular">
                <Button
                  startIcon={<LocalGroceryStoreOutlinedIcon />}
                  sx={{
                    color: "#111827",
                    textTransform: "none",
                    fontWeight: 600,
                  }}>
                  Cart
                </Button>
              </Badge>
            </Link>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#7c3aed",
                textTransform: "none",
                borderRadius: "999px",
                px: 3,
                "&:hover": {
                  bgcolor: "#6d28d9",
                },
              }}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

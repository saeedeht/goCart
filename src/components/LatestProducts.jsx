import { Box, Button, Grid, Typography } from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 1,
            }}>
            Latest Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 1,
                mb: 1,
                color: "gray",
              }}>
              Showing 4 of 12 products
            </Typography>
            <Button
              endIcon={<EastOutlinedIcon />}
              sx={{
                width: "fit-content",
                textTransform: "none",
                color: "black",
                p: 0,
                ml: "20px",
              }}>
              View more
            </Button>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            mt={3}>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}>
                <ProductCard
                  image={product?.images[0]}
                  title={product?.title}
                  price={product?.price}
                />
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

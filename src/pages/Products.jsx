import { Grid, Typography } from "@mui/material";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
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
      <Grid
        sx={{
          padding: "30px",
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
          All Products
        </Typography>

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
    </>
  );
};

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { Card, Container, styled } from "@mui/material";
import axios from "../api/axios";
import Grid from "@mui/material/Unstable_Grid2";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const q = searchParams.get("q");
      const res = await axios.get(`/products?q=${q}`);
      setProducts(res.data);
    })();
  });

  const displayProducts = () => {
    if (products.length) {
      return products.map((product) => {
        return (
          <Grid key={product._id} lg={4}>
            <Product id={product._id} product={product} />
          </Grid>
        );
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>goElec | Products</title>
      </Helmet>

      <h1 style={{ color: "white" }}>Products</h1>
      <Container fixed>
        <Grid container spacing={10} justifyContent="center">
          {displayProducts()}
          {
            //Add hidden cards to ensure partial rows are properly aligned
            products.length % 3 !== 0 && (
              <>
                {[...new Array(3 - (products.length % 3))].map((_, i) => (
                  <Grid key={i} lg={4}>
                    <Card sx={{ width: 300, visibility: "hidden" }}></Card>
                  </Grid>
                ))}
              </>
            )
          }
        </Grid>
      </Container>
    </div>
  );
}

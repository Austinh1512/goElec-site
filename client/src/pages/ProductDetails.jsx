import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Helmet } from "react-helmet";
import { Button, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSwiper = styled(Swiper)({
  color: "white",
  "--swiper-navigation-color": "#fff",
  width: "80%",
  height: "500px",
});

const CallToActionContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginBottom: 25,
  marginTop: 25,
});

const HeaderText = styled(Typography)(({ theme }) => ({
  color: "white",
  marginBottom: 50,
  fontSize: 50,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 40,
    marginBottom: 15,
  },
}));

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/products/${id}`);
      setProduct(res.data);
      console.log(res.data);
    })();
  }, [id]);

  const displayProductImages = () => {
    if (product) {
      return product.images.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              src={img.url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`goElec | ${product ? product.name : "Product"}`}</title>
      </Helmet>

      <HeaderText variant="h1">{product ? product.name : "Product"}</HeaderText>
      <Grid container>
        <Grid xs={12} lg={6}>
          <CarouselSwiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {displayProductImages()}
          </CarouselSwiper>
          <CallToActionContainer>
            <Typography variant="body1" sx={{ color: "white" }}>
              Price: ${product ? product.price : ""}
            </Typography>
            <Button variant="contained">
              <Typography variant="button">Add To Cart</Typography>
            </Button>
          </CallToActionContainer>
          <Container>
            <Typography variant="h3" sx={{ color: "white", marginBottom: 2 }}>
              Description
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              {product &&
                product.description.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </Typography>
          </Container>
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography variant="h2" sx={{ color: "white" }}>
            Reviews
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

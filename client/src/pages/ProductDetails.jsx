import { Fragment, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Helmet } from "react-helmet";
import {
  Alert,
  Button,
  Container,
  Snackbar,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShoppingCartContext from "../context/ShoppingCartContext";
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

const SuccessAlert = styled(Alert)({
  backgroundColor: "#4CAF50",
  color: "white",
  width: "100%",
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
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { setCart } = useContext(ShoppingCartContext);

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

  const addProductToCart = () => {
    setCart((prev) => [...prev, product]);
    setShowSuccessAlert(true);
  };

  const handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessAlert(false);
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
            <Button variant="contained" onClick={addProductToCart}>
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
                  <Fragment key={idx}>
                    {line}
                    <br />
                  </Fragment>
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

      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleSuccessAlertClose}
      >
        <SuccessAlert severity="success" onClose={handleSuccessAlertClose}>
          Added to Cart!
        </SuccessAlert>
      </Snackbar>
    </div>
  );
}

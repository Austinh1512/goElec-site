import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Product({ id, product }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardActionArea href={`/products/${id}`}>
        <CardMedia
          component="img"
          height="100%"
          image={product.images[0].url}
        />
        <CardContent
          sx={{
            bgcolor: "#333",
            color: "white",
            display: "flex",
            flexDirection: "column",
            minHeight: "180px",
          }}
        >
          <Typography gutterBottom variant="h4">
            {product.name}
          </Typography>
          <Typography variant="subtitle1">
            Price:
            <span style={{ color: theme.palette.primary.main }}>
              {" $" + product.price}
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

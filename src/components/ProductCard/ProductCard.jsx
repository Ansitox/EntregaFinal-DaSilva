import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./productCard.css";

export const ProductCard = ({ image, title, description, price, id }) => {
  return (
    <Card
      className="card"
      sx={{
        maxWidth: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff50",
        border: "1px solid #3E8A53",
        borderRadius: "10px",
      }}
    >
      <Link to={`/item/${id}`}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                maxHeight: 100,
                minHeight: 65,
                textAlign: "center",
                fontSize: "1.3rem",
              }}
              color="primary"
            >
              {title}
            </Typography>
            <Typography
              className="card-description"
              variant="body2"
              color="text.primary"
              sx={{ textAlign: "center" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions
        sx={{
          minHeight: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="primary">
          $ {price}
        </Typography>
        <Link to={`/item/${id}`}>
          <Button size="small" variant="contained" color="primary">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ image, title, description, price, id }) => {
  return (
    <Card
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
            }}
            color="primary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
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
        <Button
          size="small"
          color="primary"
          sx={{
            backgroundColor: "#3E8A53",
            padding: "2px 5px",
            border: "1px solid #3E8A53",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

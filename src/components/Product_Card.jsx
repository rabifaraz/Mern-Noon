import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip, IconButton, Stack } from "@mui/material";
import { AddShoppingCart, FavoriteBorderOutlined, FavoriteOutlined, FavoriteRounded } from "@mui/icons-material";

function Product_Card(props) {
  const { img_url, title, rating, sold, dis_price, orignal_price, bestSeller } =
    props.card_data;
  return (
    <Card sx={{ maxWidth: 250, height: 500, m: 2, mb: 4 }}>
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          {bestSeller && <Chip sx={{ position: 'absolute', top: 5, left: 5, background: 'grey', color: 'white' }} label="Best Seller" variant="outlined" />}
          <IconButton sx={{ position: 'absolute', top: 5, right: 5 }}>
            <FavoriteBorderOutlined />
          </IconButton>
          <CardMedia
            component="img"
            sx={{ height: 300 }}
            image={img_url}
          />
          <Chip sx={{ position: 'absolute', bottom: 5, left: 5, background: 'white', color: 'black' }} label={`${rating} ⭐️ (2.5K)`} variant="outlined" />
          <IconButton sx={{ position: 'absolute', bottom: 5, right: 5 }}>
            <AddShoppingCart />
          </IconButton>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Stack flexDirection="row" gap={3} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Rating: {rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {sold} sold
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={3} alignItems="center">
            <Typography>Rs. {dis_price}</Typography>

            <Typography sx={{ textDecorationLine: "line-through" }}>
              Rs. {orignal_price}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { Product_Card };
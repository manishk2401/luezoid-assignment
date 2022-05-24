import { Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import style from "./style.module.css";
import React from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ItemCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/product/" + props.itemData.id}>
        <CardMedia component="img" height="250" image={props.itemData.bannerImage.url} alt="green iguana" />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.itemData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <div className={style.cardFooter}>
        <Link to={"/product/" + props.itemData.id} underline="none">
          <Button>Learn More</Button>
        </Link>
        <span>
          <IconButton
            onClick={(e) => {
              props.addItem(props.itemData.id);
            }}
            size="small"
          >
            <AddCircleOutlineIcon color="secondary" />
          </IconButton>
        </span>
      </div>
    </Card>
  );
}

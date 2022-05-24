import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function ItemDetails(props) {
  let { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState([]);
  useEffect(() => {
    setItemDetails(
      props.dataList.filter((el) => {
        return `${el.id}` === itemId;
      })
    );
  }, []);

  return itemDetails[0] ? (
    <div className="row">
      <div className="col-md-6 px-5">
        <CardMedia component="img" height={550} className="rounded border" image={itemDetails[0].bannerImage.url} alt="Live from space album cover" />
      </div>
      <div className="col-md-6">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {itemDetails[0].name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {itemDetails[0].subCategory.name} / <small>{itemDetails[0].subCategory.arabicName}</small>
            </Typography>
            <Button
              variant="outlined"
              onClick={(e) => {
                props.addItem(itemDetails[0].id);
              }}
            >
              Add To Card
            </Button>
          </CardContent>
        </Box>
      </div>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}

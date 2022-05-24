import { Container, Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <div className="p-2 align-right">
        <Stack spacing={2} className="align-items-center">
          <Pagination
            count={props.itemsList.pages}
            onClick={(e) => {
              props.changePage(e.target.innerText);
            }}
            color="primary"
          />
        </Stack>
      </div>
      <Container className="p-2">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12 }}>
          {props.itemsList.items.length ? (
            props.itemsList.items.map((item) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={item.id}>
                  <div>
                    <ItemCard addItem={props.addItem} itemData={item}></ItemCard>
                  </div>
                </Grid>
              );
            })
          ) : (
            <h4 className="my-3">Loading...</h4>
          )}
        </Grid>
      </Container>
    </>
  );
}

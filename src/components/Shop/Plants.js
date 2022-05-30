import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import { SideBarFilter } from "./SideBarFilter";


export const Plants = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    axios
      .get(`/api/customer/products`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      });
  }
  return (
    <main style={{ backgroundColor: "#F3F7F3" }}>
      <Box
        sx={{
          bgcolor: "#F3F7F3",
          pt: "10px",
          pb: "10px",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Indoor Plants
          </Typography>
        </Container>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <SideBarFilter></SideBarFilter>
        </Grid>
        <Grid item xs={12} sm={9} >
          <Container sx={{ pb: "20px" }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {Products.map((product, key) => (
                <Grid item key={key} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 0,
                      marginLeft: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "0px",
                      }}
                      src={`/public/images/${product.img}`}
                      width="150"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {product.title}
                      </Typography>
                      <Typography>{product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        size="small"
                        component={Link}
                        to={`/customer/products/${product.product_id}`}
                      >
                        ADD TO BAG
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </main>
  );
};
export default Plants;

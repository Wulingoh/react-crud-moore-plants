import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import usePagination from "./Pagination";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import OrderBy from "./OrderBy";
import TotalRowCount from "./TotalRowCount";
import { SideBarFilter } from "./SideBarFilter";
import { useCart } from "./CartContext";

export const Plants = () => {
  const [params, setParams] = useState({type:"Plant"});
  const { addProduct } = useCart();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [params]);
  function getProducts() {
    axios
      .get(`/api/customer/products?${new URLSearchParams(params).toString()}`)
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      });
  }

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(products.length / PER_PAGE);
  const productsPage = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    productsPage.jump(p);
  };

  return (
    <main style={{ backgroundColor: "#F3F7F3" }}>
      <Container>
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
            <SideBarFilter
              params={params}
              setParams={setParams}
            ></SideBarFilter>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Container sx={{ pb: "20px" }} maxWidth="lg">
              <Grid container>
                <Grid item xs sx={{ marginBottom: "20px" }}>
                  <TotalRowCount products={products}></TotalRowCount>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs>
                  <OrderBy params={params} setParams={setParams}></OrderBy>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                {productsPage.currentData().map((product, key) => (
                  <Grid item key={key} xs={12} sm={6} md={4}>
                    <Link
                      to={`/plants/${product.product_id}`}
                      style={{ textDecoration: "none" }}
                    >
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
                          <Typography>${parseFloat(product.price, 10).toFixed(2)}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            fullWidth
                            size="small"
                            sx={{
                              color: "black",
                              border: "1px solid #102F25",
                              "&:hover": {
                                background: "#102F25",
                                color: "#fff",
                              },
                            }}
                          >
                            VIEW DETAIL
                          </Button>
                        </CardActions>
                        <CardActions>
                          {product.quantity >= 0 && (
                            <Button
                              fullWidth
                              size="small"
                              sx={{
                                color: "white",
                                backgroundColor: "#102F25",
                                border: "1px solid black",
                                "&:hover": {
                                  background: "#fff",
                                  color: "#102F25",
                                },
                              }}
                              onClick={(event) => {
                                event.preventDefault();
                                addProduct(product);
                              } }
                            >
                              ADD PLANT TO BAG
                            </Button>
                          )}
                          {product.quantity <= 0 && (
                            <Typography
                              sx={{
                                textAlign: "center",
                                fontWeight: "600",
                                color: "darkred",
                                width: "100%",
                                lineHeight: 2,
                              }}
                            >
                              Out Of Stock
                            </Typography>
                          )}
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
              <Grid container marginTop={"20px"}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Pagination
                    count={count}
                    size="medium"
                    page={page}
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
export default Plants;

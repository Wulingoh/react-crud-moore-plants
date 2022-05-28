import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_HOST } from "../../config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function ListProduct() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    axios
      .get(`/api/admin/products`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      });
  }
  const deleteProduct = (productId) => {
    axios
      .delete(`/api/admin/products/${productId}/delete`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        getProducts();
      });
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Products</Title>
        <Button
          variant="contained"
          component={Link}
          to={`/admin/products/create`}
        >
          Add New Product
        </Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Products.map((product, key) => (
              <TableRow key={key}>
                <TableCell>{product.product_id}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.categoryName}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <img
                    src={`/public/images/${product.img}`}
                    width="150"
                    alt=""
                  />
                </TableCell>
                <TableCell align="right">
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    wrap="nowrap"
                    justifyContent="flex-end"
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        size="small"
                        component={Link}
                        to={`/admin/products/${product.product_id}/gallery_img`}
                      >
                        Gallery
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        size="small"
                        component={Link}
                        to={`/admin/products/${product.product_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <IconButton
                        variant="outlined"
                        size="small"
                        onClick={() => deleteProduct(product.product_id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
}

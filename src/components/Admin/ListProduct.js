import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { API_HOST } from "../../config";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


export default function ListProduct() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    function getProducts() {
        axios.get(`${API_HOST}api/products`, {
            validateStatus:function (status) {
                return status;
            }
        })
            .then(function(response) {
                console.log(response.data);
                setProducts(response.data);  
            });
    }
    const deleteProduct = (productId) => {
        axios.delete(`${API_HOST}api/products/${productId}/delete`, {
            validateStatus:function (status) {
                return status;
            }
        })
        .then(function(response) {
            console.log(response.data);
            getProducts();
        })
    }

    return (
        <React.Fragment>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Title>List Products</Title>
        <Button variant="contained" component={Link } to={`/admin/products/create`}>Add New Product</Button>
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
                    <img src={product.img} alt="">
                    </img>
                </TableCell>
                <TableCell align="right">
                <Button variant="contained" component={Link } to={`/admin/products/${product.product_id}/edit`}>Edit</Button>
                <button onClick={() =>deleteProduct(product.product_id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
        
      </React.Fragment>

    );
}
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


export default function ListCategory() {
    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, []);
    function getCategories() {
        axios.get(`${API_HOST}api/category`, {
            validateStatus:function (status) {
                return status;
            }
        })
            .then(function(response) {
                console.log(response.data);
                setCategories(response.data);  
            });
    }
    const deleteCategory = (categoryId) => {
        axios.delete(`${API_HOST}api/category/${categoryId}/delete`, {
            validateStatus:function (status) {
                return status;
            }
        })
        .then(function(response) {
            console.log(response.data);
            getCategories();
        })
    }

    return (
        <React.Fragment>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Title>List Categories</Title>
        <Button variant="contained" component={Link } to={`/admin/category/create`}>Add New Category</Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Categories.map((category, key) => (
              <TableRow key={key}>
                <TableCell>{category.category_id}</TableCell>
                <TableCell>{category.type}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell align="right">
                <Button variant="contained" component={Link } to={`/admin/category/${category.category_id}/edit`}>Edit</Button>
                <button onClick={() =>deleteCategory(category.category_id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
        
      </React.Fragment>

    );
}
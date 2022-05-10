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
import { Grid } from "@mui/material";

export default function ListUser() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`${API_HOST}api/users`, {
            validateStatus:function (status) {
                return status;
            }
        })
            .then(function(response) {
                console.log(response.data);
                setUsers(response.data);  
            });
    }
    const deleteUser = (userId) => {
        axios.delete(`${API_HOST}api/users/${userId}/delete`, {
            validateStatus:function (status) {
                return status;
            }
        })
        .then(function(response) {
            console.log(response.data);
            getUsers();
        })
    }

    return (
        <React.Fragment>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Title>List Users</Title>
        <Button variant="contained" component={Link } to={`/admin/users/create`}>Add New User</Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Users.map((user, key) => (
              <TableRow key={key}>
                <TableCell>{user.user_id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
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
                        component={Link}
                        to={`/admin/users/${user.user_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={() => deleteUser(user.user_id)}
                        color="error"
                      >
                        Delete
                      </Button>
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
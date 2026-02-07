import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setUsers([]);
  }
  const deleteUser = () => {
    // Stub: no backend
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Users</Title>
        <Button variant="contained" component={Link} to={`/admin/users/create`}>
          Add New User
        </Button>
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
            {users.map((user, key) => (
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
                      <IconButton
                        variant="outlined"
                        size="small"
                        onClick={() => deleteUser()}
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

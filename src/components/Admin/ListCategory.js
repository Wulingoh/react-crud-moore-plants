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

export default function ListCategory() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  function getCategories() {
    setCategories([]);
  }
  const deleteCategory = () => {
    // Stub: no backend
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Categories</Title>
        <Button
          variant="contained"
          component={Link}
          to={`/admin/category/create`}
        >
          Add New Category
        </Button>
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
                        to={`/admin/category/${category.category_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <IconButton
                        variant="outlined"
                        size="small"
                        onClick={() => deleteCategory()}
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

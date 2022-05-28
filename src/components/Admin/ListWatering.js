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
import { Box, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function ListWatering() {
  const [Waters, setWater] = useState([]);
  useEffect(() => {
    getWaters();
  }, []);
  function getWaters() {
    axios
      .get(`/api/admin/watering`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setWater(response.data);
      });
  }
  const deleteCareLevel = (wateringId) => {
    axios
      .delete(`/api/admin/watering/${wateringId}/delete`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        getWaters();
      });
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Watering</Title>
        <Button
          variant="contained"
          component={Link}
          to={`/admin/watering/create`}
        >
          Add New Watering
        </Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell> Name</TableCell>
              <TableCell>Content</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Waters.map((watering, key) => (
              <TableRow key={key}>
                <TableCell>{watering.watering_id}</TableCell>
                <TableCell>
                  <Typography noWrap>{watering.name}</Typography>
                </TableCell>
                <TableCell align="left">{watering.content}</TableCell>
                <TableCell align="right">
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="flex-end"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        component={Link}
                        to={`/admin/watering/${watering.watering_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <IconButton
                        variant="outlined"
                        size="small"
                        onClick={() => deleteCareLevel(watering.watering_id)}
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

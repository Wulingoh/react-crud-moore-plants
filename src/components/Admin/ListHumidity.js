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

export default function ListHumidity() {
  const [Humidities, setHumidity] = useState([]);
  useEffect(() => {
    getHumidities();
  }, []);
  function getHumidities() {
    axios
      .get(`${API_HOST}api/humidity`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setHumidity(response.data);
      });
  }
  const deleteHumidity = (humidityId) => {
    axios
      .delete(`${API_HOST}api/humidity/${humidityId}/delete`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        getHumidities();
      });
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Humidity</Title>
        <Button
          variant="contained"
          component={Link}
          to={`/admin/humidity/create`}
        >
          Add New Humidity
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
            {Humidities.map((humidity, key) => (
              <TableRow key={key}>
                <TableCell>{humidity.humidity_id}</TableCell>
                <TableCell>
                  <Typography noWrap>{humidity.name}</Typography>
                </TableCell>
                <TableCell align="left">{humidity.content}</TableCell>
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
                        to={`/admin/humidity/${humidity.humidity_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <IconButton
                        variant="outlined"
                        size="small"
                        onClick={() => deleteHumidity(humidity.humidity_id)}
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

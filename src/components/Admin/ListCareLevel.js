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
import { Box, Grid } from "@mui/material";

export default function ListCareLevel() {
  const [CareLevels, setCareLevel] = useState([]);
  useEffect(() => {
    getCareLevels();
  }, []);
  function getCareLevels() {
    axios
      .get(`${API_HOST}api/care_level`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setCareLevel(response.data);
      });
  }
  const deleteCareLevel = (careLevelId) => {
    axios
      .delete(`${API_HOST}api/care_level/${careLevelId}/delete`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        getCareLevels();
      });
  };

  return (
    <React.Fragment>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Title>List Care Level</Title>
        <Button
          variant="contained"
          component={Link}
          to={`/admin/care_level/create`}
        >
          Add New Care Level
        </Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 80 }}>ID</TableCell>
              <TableCell style={{ width: 120 }}>Name</TableCell>
              <TableCell style={{ width: 550 }}>Content</TableCell>
              <TableCell align="right">
                <Grid container direction="row" justifyContent="flex-end">
                  <Grid item rowSpacing={8}>
                    Action
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CareLevels.map((careLevel, key) => (
              <TableRow key={key}>
                <TableCell>{careLevel.care_level_id}</TableCell>
                <TableCell>{careLevel.name}</TableCell>
                <TableCell align="left">{careLevel.content}</TableCell>
                <TableCell align="right">
                  <Grid container direction="row" justifyContent="flex-end">
                    <Grid item rowSpacing={2}>
                      <Button
                        variant="contained"
                        component={Link}
                        to={`/admin/care_level/${careLevel.care_level_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item rowSpacing={2}>
                      <Button
                        variant="outlined"
                        onClick={() => deleteCareLevel(careLevel.care_level_id)}
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

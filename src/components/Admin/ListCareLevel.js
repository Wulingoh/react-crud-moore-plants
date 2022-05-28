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

export default function ListCareLevel() {
  const [CareLevels, setCareLevel] = useState([]);
  useEffect(() => {
    getCareLevels();
  }, []);
  function getCareLevels() {
    axios
      .get(`/api/admin/care_level`, {
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
      .delete(`/api/admin/care_level/${careLevelId}/delete`, {
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
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Content</TableCell>
              <TableCell align="right">Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CareLevels.map((careLevel, key) => (
              <TableRow key={key}>
                <TableCell>{careLevel.care_level_id}</TableCell>
                <TableCell>
                    <Typography noWrap>
                    {careLevel.name}
                    </Typography>
                </TableCell>
                <TableCell align="left">{careLevel.content}</TableCell>
                <TableCell align="right">
                  <Grid container spacing={1} direction="row" justifyContent="flex-end" wrap="nowrap">
                    <Grid item>
                      <Button
                        variant="contained"
                        component={Link}
                        to={`/admin/care_level/${careLevel.care_level_id}/edit`}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
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

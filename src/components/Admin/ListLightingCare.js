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
import { Box, Grid, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";


export default function ListLightingCare() {
    const [LightingCares, setLightingCare] = useState([]);
    useEffect(() => {
        getLightingCares();
    }, []);
    function getLightingCares() {
        axios.get(`/api/admin/lighting`, {
            validateStatus:function (status) {
                return status;
            }
        })
            .then(function(response) {
                console.log(response.data);
                setLightingCare(response.data);  
            });
    }
    const deleteLightingCare = (lightingId) => {
        axios.delete(`/api/admin/lighting/${lightingId}/delete`, {
            validateStatus:function (status) {
                return status;
            }
        })
        .then(function(response) {
            console.log(response.data);
            getLightingCares();
        })
    }

    return (
      <React.Fragment>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Title>List Lighting Care</Title>
          <Button
            variant="contained"
            component={Link}
            to={`/admin/lighting/create`}
          >
            Add New Lighting Care
          </Button>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Content</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {LightingCares.map((lighting, key) => (
                <TableRow key={key}>
                  <TableCell>{lighting.lighting_id}</TableCell>
                  <TableCell>
                    <Typography noWrap>{lighting.name}</Typography>
                  </TableCell>
                  <TableCell align="left">{lighting.content}</TableCell>
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
                          to={`/admin/lighting/${lighting.lighting_id}/edit`}
                        >
                          Edit
                        </Button>
                      </Grid>
                      <Grid item>
                        <IconButton
                          variant="outlined"
                          size="small"
                          onClick={() => deleteLightingCare(lighting.lighting_id)}
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
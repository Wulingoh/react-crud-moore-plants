import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function ListLightingCare() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`/api/admin/lighting`, data)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/lighting");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography component="h1" variant="h5">
          Create New Lighting Care
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <LightingCareForm control={control} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 3, mb: 2 }}
          >
            Create New Lighting Care
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to={`/admin/lighting`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export const LightingCareForm = ({ control }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name={"name"}
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              error={error}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name={"content"}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="content"
              name="content"
              required
              fullWidth
              id="content"
              label="Content"
              error={error}
              onChange={onChange}
              value={value}
              multiline
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

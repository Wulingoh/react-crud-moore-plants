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

export default function ListUser() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`/api/admin/users`, data)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/users");
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
          Create New User
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <UserForm control={control} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 3, mb: 2 }}
          >
            Create New User
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to={`/admin/users`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export const UserForm = ({ control }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name={"name"}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              label="First Name"
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
          name={"email"}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="email"
              name="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              error={error}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name={"role"}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="role"
              name="role"
              required
              fullWidth
              id="role"
              label="Role"
              error={error}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

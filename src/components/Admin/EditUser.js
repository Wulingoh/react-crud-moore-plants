import { useState, useEffect } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import { UserForm } from "./CreateUser";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ListUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { handleSubmit, control, reset } = useForm();
  useEffect(() => {
    axios.get(`${API_HOST}api/users/${userId}`).then(function (response) {
      reset(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    axios.put(`${API_HOST}api/users/${userId}`, data).then(function (response) {
      if (response.data.status === 1) {
        navigate("/admin/users");
      } else {
        alert("Failed to update");
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
          Edit User
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
            Update User
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

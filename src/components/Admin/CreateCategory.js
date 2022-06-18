import * as React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ListCategory() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`/api/admin/category`, data)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/category");
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
          Create New Category
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <CategoryForm control={control} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 3, mb: 2 }}
          >
            Create New Category
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to={`/admin/category`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export const CategoryForm = ({control}) => {
  return (
      <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name={"type"}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="type"
                    name="type"
                    required
                    fullWidth
                    id="type"
                    label="Type"
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
                name={"name"}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
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
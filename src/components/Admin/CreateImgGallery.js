import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import { Controller, useForm } from "react-hook-form";
import { 
  useCategoryList, 
} from "../FetchApi";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

export default function ListProduct() {
  const navigate = useNavigate();
  const { handleSubmit, setValue, control } = useForm();
  const categoryList = useCategoryList();

  const onFileChange = (e) => {
    const files = e.target.files
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
      setValue('img', event.target.result);
    }
  }
  const onSubmit = (data) => {
    axios
      .post(`/api/admin/products`, data)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/products");
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
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Create New Image Gallery
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name={"title"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="title"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name={"img"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { value },
                  fieldState: { error },
                }) => (
                  <FormControl fullWidth>
                    <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      onChange={onFileChange}
                      error={error}
                    />
                    <Button variant="outlined" component="span" fullWidth>
                      Upload Image
                    </Button>
                    </label>
                    {value && <img src={value} width="500" alt="" />}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 3, mb: 2 }}
          >
            Create New Product
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            component={Link}
            to={`/admin/products`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

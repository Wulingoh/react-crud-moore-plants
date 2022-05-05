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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function ListProduct() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${API_HOST}api/products`, data)
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
          paddingRight:2 
        }}
      >
        <Typography component="h1" variant="h5">
          Create New Product
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name={"type"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="type">Type</InputLabel>
                    <Select {...field} label="Type">
                      <MenuItem value="Plant">Plant</MenuItem>
                      <MenuItem value="Pot">Pot</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"category"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="category">Category</InputLabel>
                    <Select {...field} fullWidth label="Category">
                      <MenuItem value="Plant">Plant</MenuItem>
                      <MenuItem value="Pot">Pot</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"name"}
                control={control}
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
                    autoFocus
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
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
            <Grid item xs={12} md={6}>
              <Controller
                name={"price"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="price"
                    name="price"
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    placeholder="Price"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"quantity"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="quantity"
                    name="quantity"
                    required
                    fullWidth
                    id="quantity"
                    label="Quantity"
                    placeholder="1234"
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"color"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="color"
                    name="color"
                    required
                    fullWidth
                    id="color"
                    label="Color"
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"height"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="height"
                    name="height"
                    required
                    fullWidth
                    id="height"
                    label="Height"
                    placeholder="1234"
                    error={error}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">cm</InputAdornment>
                        ),
                      }}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"latin_name"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="latin_name"
                    name="latin_name"
                    required
                    fullWidth
                    id="latinName"
                    label="Latin Name"
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"lightingName"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="lightingCare">Lighting Care</InputLabel>
                        <Select {...field} fullWidth label="Lighting Care">
                            <MenuItem value="Plant">Plant</MenuItem>
                            <MenuItem value="Pot">Pot</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"careLevelName"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="careLevelName">Care Level</InputLabel>
                        <Select {...field} fullWidth label="Care Level">
                            <MenuItem value="Plant">Plant</MenuItem>
                            <MenuItem value="Pot">Pot</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"wateringName"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="wateringName">Watering Level</InputLabel>
                        <Select {...field} fullWidth label="Watering Level">
                            <MenuItem value="Plant">Plant</MenuItem>
                            <MenuItem value="Pot">Pot</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"humidityName"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="humidityName">Humidity Level</InputLabel>
                        <Select {...field} fullWidth label="Humidity Level">
                            <MenuItem value="Plant">Plant</MenuItem>
                            <MenuItem value="Pot">Pot</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"room_type"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="room_type"
                    name="room_type"
                    required
                    fullWidth
                    id="roomType"
                    label="Room Type"
                    placeholder="Kitchen"
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"size"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="size">Size</InputLabel>
                        <Select {...field} fullWidth label="Size">
                            <MenuItem value=""></MenuItem>
                            <MenuItem value="xs">XS(0-10cm)</MenuItem>
                            <MenuItem value="s">S(10-15cm)</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"pot_material"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl fullWidth>
                        <InputLabel id="potMaterial">Pot Material</InputLabel>
                        <Select {...field} fullWidth label="Pot Material">
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="xs">XS(0-10cm)</MenuItem>
                            <MenuItem value="s">S(10-15cm)</MenuItem>
                        </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name={"content"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="content"
                    name="content"
                    required
                    fullWidth
                    id="content"
                    label="Description"
                    placeholder="Multiline Texts"
                    error={error}
                    onChange={onChange}
                    value={value}
                    multiline
                  />
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

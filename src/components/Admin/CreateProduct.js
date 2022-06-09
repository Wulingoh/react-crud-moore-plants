import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { 
  useCategoryList, 
  useLightingCareList, 
  useCareLevelList, 
  useWateringList,
  useHumidityList  
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
import DeleteIcon from '@mui/icons-material/Delete';

const Input = styled("input")({
  display: "none",
});

export default function ListProduct() {
  const navigate = useNavigate();
  const { handleSubmit, setValue, control } = useForm();
  const { fields, remove, append } = useFieldArray({ control, name: "facts" });
  const categoryList = useCategoryList();
  const lightingCaresList = useLightingCareList();
  const careLevelsList = useCareLevelList();
  const wateringList = useWateringList();
  const humidityList = useHumidityList();
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
          Create New Product
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name={"type"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl error={error} fullWidth>
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
                name={"category_id"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl error={error} fullWidth>
                    <InputLabel id="category">Category</InputLabel>
                    <Select {...field} fullWidth label="Category" >
                    {categoryList.map((category) =>
                        <MenuItem key={category.category_id}
                        value={category.category_id}>{category.name}</MenuItem>
                     )}
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
                      type: "number",
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
                    type="number"
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
                    type="number"
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
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="latin_name"
                    name="latin_name"
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
                name={"lighting_care_id"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl error={error} fullWidth>
                    <InputLabel>Lighting Care</InputLabel>
                    <Select {...field} fullWidth label="Lighting Care" >
                    {lightingCaresList.map((lighting) =>
                        <MenuItem key={lighting.lighting_id}
                        value={lighting.lighting_id}>{lighting.name}</MenuItem>
                     )}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"care_level_id"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl error={error} fullWidth>
                    <InputLabel>Care Level</InputLabel>
                    <Select {...field} fullWidth label="Care Level">
                    {careLevelsList.map((care_level) =>
                        <MenuItem key={care_level.care_level_id}
                        value={care_level.care_level_id}>{care_level.name}</MenuItem>
                     )}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"watering_id"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl error={error} fullWidth>
                    <InputLabel>Watering Level</InputLabel>
                    <Select {...field} fullWidth label="Watering Level">
                    {wateringList.map((watering) =>
                        <MenuItem key={watering.watering_id}
                        value={watering.watering_id}>{watering.name}</MenuItem>
                     )}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"humidity_id"}
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error }}) => (
                  <FormControl error={error} fullWidth>
                    <InputLabel>Humidity Level</InputLabel>
                    <Select {...field} fullWidth label="Humidity Level">
                    {humidityList.map((humidity) =>
                        <MenuItem key={humidity.humidity_id}
                        value={humidity.humidity_id}>{humidity.name}</MenuItem>
                     )}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"room_type"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="room_type"
                    name="room_type"
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
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="content"
                    name="content"
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
            <Grid item xs={12}>
              {fields.map((item, k) => (
                <Grid container key={item.id} spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name={`facts.${k}.title`}
                      control={control}
                      rules={{ required: true }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          name="title"
                          required
                          fullWidth
                          label="Title"
                          error={error}
                          onChange={onChange}
                          value={value}
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name={`facts.${k}.description`}
                      control={control}
                      rules={{ required: true }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          name="description"
                          required
                          fullWidth
                          label="Description"
                          error={error}
                          onChange={onChange}
                          value={value}
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <IconButton color="error" type="button" onClick={() => remove(k)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                variant="outlined" 
                component="span" 
                fullWidth
                type="button"
                onClick={() =>
                  append({
                    title: "",
                    description: "",
                  })
                }
              >
                Add Quick Facts
              </Button>
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

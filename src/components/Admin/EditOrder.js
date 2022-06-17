import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import ListOrder from "./ListOrder";

const Input = styled("input")({
  display: "none",
});

export default function ListProduct() {
  const navigate = useNavigate();
  const { handleSubmit, control, reset, setValue, getValues } = useForm();
  const { orderId } = useParams();

  useEffect(() => {
    axios.get(`/api/admin/orders/${orderId}`).then(function (response) {
      reset(response.data);
    });
  }, [orderId, reset]);

  const onSubmit = (data) => {
    axios
      .put(`/api/admin/orders/${orderId}`, data)
      .then(function (response) {
        if (response.data.status === 1) {
          navigate("/admin/orders");
        } else {
          alert("Failed to update");
        }
      });
  };

  const updateTotal = () => {
    const { subtotal, shipping } = getValues()
    const tax = (parseFloat(subtotal) + parseFloat(shipping)) * 0.15;
    const total = parseFloat(subtotal) + parseFloat(shipping) + tax;
    setValue('tax', tax.toFixed(2))
    setValue('total',total);
  }
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
          Edit Orders
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name={"status"}
                control={control}
                defaultValue
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select {...field} fullWidth label="Status">
                      <MenuItem value=""></MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Paid">Paid</MenuItem>
                      <MenuItem value="Cash">Cash on Pick Up</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"user_id"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="user_id"
                    name="user_id"
                    fullWidth
                    id="user_id"
                    label="User ID"
                    autoFocus
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
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"email"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
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
                name={"mobile"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="mobile"
                    name="mobile"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    autoFocus
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
                name={"line_1"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="line_1"
                    name="line_1"
                    required
                    fullWidth
                    id="line_1"
                    label="Line 1"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"line_2"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="line_2"
                    name="line_2"
                    required
                    fullWidth
                    id="line_2"
                    label="Line 2"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name={"city"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="city"
                    name="city"
                    required
                    fullWidth
                    id="city"
                    label="City"
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
                name={"postcode"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="postcode"
                    name="postcode"
                    required
                    fullWidth
                    id="postcode"
                    label="Postcode"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"country"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="country"
                    name="country"
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={"subtotal"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="subtotal"
                    name="subtotal"
                    required
                    fullWidth
                    id="subtotal"
                    label="Subtotal"
                    placeholder="1234"
                    error={error}
                    onChange={(e) => {
                      onChange(e);
                      updateTotal();
                    }}
                    value={value}
                    InputLabelProps={{ shrink: true }}
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
                name={"tax"}
                control={control}
                rules={{ required: true }}
                render={({ field: { value } }) => (
                  <TextField
                    autoComplete="tax"
                    name="tax"
                    fullWidth
                    id="tax"
                    label="Tax"
                    placeholder="1234"
                    disabled
                    value={value}
                    InputLabelProps={{ shrink: true }}
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
                name={"shipping"}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="shipping"
                    name="shipping"
                    required
                    fullWidth
                    id="shipping"
                    label="Shipping"
                    placeholder="1234"
                    error={error}
                    onChange={(e) => {
                      onChange(e);
                      updateTotal();
                    }}
                    value={value}
                    InputLabelProps={{ shrink: true }}
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
                name={"total"}
                control={control}
                rules={{ required: true }}
                render={({ field: { value } }) => (
                  <TextField
                    autoComplete="total"
                    name="total"
                    required
                    fullWidth
                    id="total"
                    label="Total"
                    placeholder="1234"
                    disabled
                    value={value}
                    InputLabelProps={{ shrink: true }}
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
            <Grid item xs={12}>
              <Controller
                name={"comment"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="comment"
                    name="comment"
                    fullWidth
                    id="comment"
                    label="Comment"
                    placeholder="Multiline Texts"
                    error={error}
                    onChange={onChange}
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name={"items"}
                control={control}
                render={({ field: { value } }) => (
                  <List dense>
                    {value?.map((item) => (
                      <ListItem key={item.order_product_id}>
                        <ListItemText primary="Product Name" secondary={item.orderProductName} />
                        <ListItemText primary="Price" secondary={item.price} />
                        <ListItemText primary="Quantity" secondary={item.quantity} />
                      </ListItem>
                    ))}
                  </List>
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
            Update Product
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            component={Link}
            to={`/admin/orders`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

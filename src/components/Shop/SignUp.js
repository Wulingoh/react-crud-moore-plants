import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { API_HOST } from "../../config";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../AuthContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';



export const SignUp = () => {
  const { user, signUp } = useAuth()
  const navigate = useNavigate();
  const { handleSubmit, control, errors} = useForm();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography align="left" component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
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
                    label="Enter your full name"
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
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    id="name"
                    label="Enter your email"
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
                name={"password"}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="new-password"
                    name="password"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Create a password"
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
                name={"confirmPassword"}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="confirm-password"
                    name="confirmPassword"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Confirm Password"
                    autoFocus
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} display="flex" flexDirection="row">
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Stay Up To Date"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(signUp)}
            sx={{ mt: 1, mb: 2 }}
          >
            Create account
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(signUp)}
            sx={{ mt: 1, mb: 2 }}
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(signUp)}
            sx={{ mt: 1, mb: 2 }}
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
          <Grid container justifyContent="center" mb="20px">
            <Grid item>
              <Link to={`/login`} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;

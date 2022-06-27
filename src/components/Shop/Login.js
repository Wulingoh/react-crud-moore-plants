import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { Stack } from "@mui/material";

export const Login = () => {
  const { setUser, login, error } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) =>
      axios.post("/api/auth/googleLogin", tokenResponse).then((newUser) => {
        setUser(newUser);
        navigate("/checkout");
      }),
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#718879" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography align="left" component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => googleLogin()}
                sx={{
                  mt: 1,
                  mb: 2,
                  color: "white",
                  backgroundColor: "#0F9D58",
                  border: "1px solid #4285F4",
                  "&:hover": {
                    background: "#fff",
                    color: "#0F9D58",
                  },
                }}
                startIcon={<GoogleIcon />}
              >
                Sign In with Google {""}
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>or</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography textAlign={'center'} color="red" align="left" variant="subtitle1">
                {error}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name={"email"}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  validate: (value) =>
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
                }}
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
                    label="Enter your email"
                    autoFocus
                    error={!!error}
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
                    label="Password"
                    autoFocus
                    error={error}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(login)}
            sx={{
              mt: 1,
              mb: 2,
              color: "white",
              backgroundColor: "#102F25",
              border: "1px solid black",
              "&:hover": {
                background: "#fff",
                color: "#102F25",
              },
            }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center" mb="20px">
            <Stack>
              <Grid item>
                <Link
                  to={`/forgotPassword`}
                  variant="body2"
                  style={{ color: "#2E4D43", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to={`/signup`}
                  variant="body2"
                  style={{ color: "#2E4D43", textDecoration: "none" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;

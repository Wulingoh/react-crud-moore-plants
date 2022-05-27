import * as React from 'react';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import { API_HOST } from '../../config';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack } from '@mui/material';
  


export const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${API_HOST}api/auth/login`, data)
      .then(function (response) {
        console.log(response.data);
        navigate("/plants", {replace:true});
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
    <Container component="main" maxWidth="sm">
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
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                sx={{ mt: 1, mb: 2 }}
                startIcon={<GoogleIcon />}
              >
                Sign In with Google
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                sx={{ mt: 1, mb: 2 }}
                startIcon={<FacebookIcon />}
              >
                Sign In with Facebook
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>or</Typography>
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
                    id="email"
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
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 1, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center" mb="20px">
            <Stack>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
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
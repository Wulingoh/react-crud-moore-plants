import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../AuthContext";
import { resetPassword } from "../FetchApi";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { handleSubmit, control, getValues } = useForm();
  const navigate = useNavigate();
  const { token } = useParams();
  const onSubmit = (data) => {
    resetPassword({ ...data, token }).then(() => navigate("/login"));
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
          Reset Password
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography>or</Typography>
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
                    autoComplete="password"
                    name="password"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Enter your new password"
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
                name={"confirmPassword"}
                control={control}
                defaultValue=""
                rules={{
                    required: true,
                    validate: (value) => getValues().password === value ? true : "Password does not match"
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete="confirmPassword"
                    name="confirmPassword"
                    required
                    fullWidth
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password"
                    autoFocus
                    error={!!error}
                    helperText={error?.message}
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
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default ResetPassword;

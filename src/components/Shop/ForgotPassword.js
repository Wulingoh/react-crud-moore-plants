import React, {useState} from 'react';
import { Controller, useForm } from "react-hook-form";
import useAuth from "../AuthContext";
import { Link } from "react-router-dom";
import { forgotPassword } from "../FetchApi";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

  
export const ForgotPassword = () => {
  const [message, setMessage] = useState(null);
  const  onSubmit = (data)=> forgotPassword(data).then(() => setMessage("Please check your email!"));
  const navigate = useNavigate();
  const { handleSubmit, control, errors } = useForm();

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
        <Avatar sx={{ m: 1, bgcolor: "#718879" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography align="left" component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography color="green" align="left" variant="subtitle1">
         {message}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 1, mb: 2,
              color: "white",
              backgroundColor: "#102F25",
              border: '1px solid black' ,
              "&:hover": {
                background: "#fff",
                color: "#102F25"
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default ForgotPassword;
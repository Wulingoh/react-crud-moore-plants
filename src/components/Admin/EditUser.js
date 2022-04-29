import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ListUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios.get(`${API_HOST}api/users/${userId}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API_HOST}api/users/${userId}`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/users");
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
        marginBottom: 10
      }}
      
    >
      <Typography component="h1" variant="h5">
        Edit User
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              label="First Name"
              value={inputs.name}
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={inputs.email} 
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="role"
              label="Role"
              type="text"
              id="role"
              value={inputs.role} 
              autoComplete="role"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update User
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          component={Link } to={`/admin/users`}
          sx={{ mt: 1, mb: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Paper>
  );
}

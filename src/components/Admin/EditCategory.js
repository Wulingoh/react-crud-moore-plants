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

export default function ListCategory() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    getCategory();
  }, []);
  function getCategory() {
    axios.get(`${API_HOST}api/category/${categoryId}`).then(function (response) {
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
      .put(`${API_HOST}api/category/${categoryId}`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/category");
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
        Edit Category
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="type"
              name="type"
              required
              fullWidth
              id="type"
              label="Type"
              InputLabelProps={{ shrink: true }} 
              value={inputs.type}
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              InputLabelProps={{ shrink: true }}
              name="name"
              value={inputs.name} 
              autoComplete="name"
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
          Update Category
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          component={Link } to={`/admin/category`}
          sx={{ mt: 1, mb: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Paper>
  );
}

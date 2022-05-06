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

export default function ListWatering() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { wateringId } = useParams();
  useEffect(() => {
    getWater();
  }, []);
  function getWater() {
    axios.get(`${API_HOST}api/watering/${wateringId}`).then(function (response) {
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
      .put(`${API_HOST}api/watering/${wateringId}`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/watering");
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
        Edit Watering
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
              label="Name"
              InputLabelProps={{ shrink: true }} 
              value={inputs.name}
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="content"
              label="Content"
              InputLabelProps={{ shrink: true }}
              name="content"
              value={inputs.content} 
              autoComplete="content"
              onChange={handleChange}
              multiline
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update Watering
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          component={Link } to={`/admin/watering`}
          sx={{ mt: 1, mb: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Paper>
  );
}

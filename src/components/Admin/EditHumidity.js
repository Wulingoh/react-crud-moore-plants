import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { HumidityForm } from "./CreateHumidity";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function EditHumidity() {
  const navigate = useNavigate();
  const { humidityId } = useParams();
  const { handleSubmit, control, reset } = useForm();
  useEffect(() => {
    reset([]);
  }, []);
  const onSubmit = (data) => {
    console.log(data);
    navigate("/admin/humidity");
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
        }}
      >
        <Typography component="h1" variant="h5">
          Edit Humidity
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <HumidityForm control={control} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 3, mb: 2 }}
          >
            Update Humidity
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to={`/admin/humidity`}
            sx={{ mt: 1, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

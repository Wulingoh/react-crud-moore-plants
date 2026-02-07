import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CareLevelForm } from "./CreateCareLevel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function EditCareLevel() {
  const navigate = useNavigate();
  const { careLevelId } = useParams();
  const { handleSubmit, control, reset } = useForm();
  useEffect(() => {
    reset([]);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/admin/care_level");
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
        Edit Care Level
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <CareLevelForm control={control} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, mb: 2 }}
        >
          Update Care Level
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          component={Link } to={`/admin/care_level`}
          sx={{ mt: 1, mb: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Paper>
  );
}

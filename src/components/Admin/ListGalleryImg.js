import React, { useEffect, useState } from "react";
import Title from "./Title";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Input = styled("input")({
  display: "none",
});

export default function ListGalleryImg() {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    getGalleryImages();
  }, []);
  function getGalleryImages() {
    setGalleryImages([]);
  }
  const onFileChange = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
      console.log(event.target.result);
      getGalleryImages();
    };
  };
  const deleteGalleryImg = () => {
    // Stub: no backend
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Title>Gallery Images</Title>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={onFileChange}
        />
        <Button variant="outlined" component="span" size="medium">
          Upload Image
        </Button>
      </label>
      <Box m={3}>
        <Grid container item spacing={3}>
          {galleryImages.map((item, key) => (
            <Grid item key={key}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/images/${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.product_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    variant="outlined"
                    size="small"
                    onClick={() => deleteGalleryImg()}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

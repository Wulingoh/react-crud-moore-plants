import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_HOST } from "../../config";

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

const Input = styled("input")({
  display: "none",
});

export default function ListGalleryImg() {
  const { productId } = useParams();
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    getGalleryImages();
  }, []);
  function getGalleryImages() {
    axios
      .get(`/api/admin/gallery_img?product_id=${productId}`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        setGalleryImages(response.data);
      });
  }
  const onFileChange = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
      axios
        .post(`/api/admin/gallery_img`, {
          product_id: productId,
          img: event.target.result,
        })
        .then(function (response) {
          console.log(response.data);
          getGalleryImages();
        });
    };
  };
  const deleteGalleryImg = (galleryImgId) => {
    axios
      .delete(`/api/admin/gallery_img/${galleryImgId}/delete`, {
        validateStatus: function (status) {
          return status;
        },
      })
      .then(function (response) {
        console.log(response.data);
        getGalleryImages();
      });
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
          {galleryImages.map((item) => (
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/public/images/${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.product_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      deleteGalleryImg(item.gallery_img_id)
                    }
                    color="error"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

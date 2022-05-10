import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_HOST } from "../../config";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Title from "./Title";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
      .get(`${API_HOST}api/gallery_img?product_id=${productId}`, {
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
    const files = e.target.files
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
      axios
        .post(`${API_HOST}api/gallery_img`, {product_id: productId, img: event.target.result})
        .then(function (response) {
          console.log(response.data);
          getGalleryImages();
        })
    }
  }
  const deleteGalleryImg = (galleryImgId) => {
    axios
      .delete(`${API_HOST}api/gallery_img/${galleryImgId}/delete`, {
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
        <Button variant="outlined" component="span" fullWidth>
          Upload Image
        </Button>
      </label>

      <ImageList sx={{ width: 500, height: 450 }}>
        {galleryImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${API_HOST}public/images/${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
}

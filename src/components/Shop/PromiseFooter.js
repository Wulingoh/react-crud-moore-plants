import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HighQualityOutlinedIcon from '@mui/icons-material/HighQualityOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const PromiseFooter = () => {

  
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginTop: "20px", marginBottom:"20px" }}>
      <Box sx={{marginLeft:"10px", marginRight:"10px"}}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={12}>
            <Stack spacing={2} alignItems={"center"}>
              <PhoneForwardedIcon sx={{fontSize: '25px'}}/>
              <Typography>Need to get in touch? </Typography>
              <Typography>Customer service opening hours:
                Monday to Saturday 9am-5pm</Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Stack spacing={2} alignItems={"center"}>
              <SecurityIcon sx={{fontSize: '25px'}} />
              <Typography>Secure payment - our systems are protected with bank-grade security. Your payment is safe with us.</Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Stack spacing={2} alignItems={"center"}>
              <HighQualityOutlinedIcon sx={{fontSize: '25px'}} />
              <Typography>We work directly with over 40 specialist growers to bring you the best quality plants</Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Stack spacing={2} alignItems={"center"}>
              <ThumbUpOutlinedIcon sx={{fontSize: '25px'}} />
              <Typography>If you need advice, just get in touch - we’ll be your personal plant gurus as long as you need us. If something’s up, tell us within 30 days of delivery — we’ll sort it.</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};
export default PromiseFooter;

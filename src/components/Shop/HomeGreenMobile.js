import * as React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";


const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

export const HomeGreenMobile = () => {

  return (
    <div style={{}}>
        <Grid container spacing={2} >
            <Grid item sm={12} xs={12}>
                    <Box
                        sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        border: "3px solid #B5AEAB",
                        display:"block",
                        margin: "auto"
                        }}
                    >
                        <Container maxWidth={"xs"}>
                        <Typography
                            variant="h4"
                            fontFamily={"Oxygen"}
                            textAlign={"start"}
                            marginTop={"100px"}
                            marginBottom={"20px"}
                        >
                            How to Green
                        </Typography>
                        <Typography variant="body2" textAlign={"start"}>
                            Plants are as important as other accessories in the space.
                            Well-chosen plants — artfully displayed — enhance your
                            home’s unique look and make it feel healthier and more
                            connected with nature. In this article I will introduce you
                            to the most beautiful indoor plants and creative ways to use
                            them in the interior.
                        </Typography>
                        </Container>
                    </Box>

            </Grid>
            <Grid item  sm={12} xs={12}>
                <Img src="/images/homeImg7.png" alt="" />
            </Grid>
            <Grid item xs={12}>
                <Img
                    src="/images/homeImg8.png"
                    alt=""
                    />  
            </Grid>
            <Grid item sm={12} xs={12}>
                <Img src="/images/homeImg9.png" alt="" />
            </Grid>
        </Grid>

    </div>
  );
};


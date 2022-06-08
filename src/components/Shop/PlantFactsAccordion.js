import * as React from "react";
import { useProductDetailsShopList } from "../FetchApi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { Container } from "@mui/material";

export const PlantFactsAccordion = () => {
  const productDetails = useProductDetailsShopList();
  return (
    <div style={{ marginBottom: "50px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "Raleway" }}>
                  Plant Like
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              marginBottom: "20px",
              marginTop: "30px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                md={4}
                sm={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <OpacityOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {productDetails.wateringName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <WbSunnyOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {productDetails.lightingName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <ThermostatOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {productDetails.humidityName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "Raleway" }}>
                  Quick Facts
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            {productDetails.facts?.map((fact) => (
              <Grid container spacing={3}>
                <Grid
                  item
                  md={4}
                  sm={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Box item sx={{marginBottom:"10px", marginRight:"10px"}}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {fact.title}:
                      </Typography>
                    </Box>
                    <Box item sx={{justifyItems:"10px"}}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {fact.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "Raleway" }}>
                  About Plants
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              marginBottom: "20px",
              marginTop: "30px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Grid container spacing={1}>
              <Grid
                item
                md={12}
                sm={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Container>
                  <Grid container>
                    <Grid item xs={2}>
                      <FactCheckOutlinedIcon />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        {productDetails.content}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default PlantFactsAccordion;

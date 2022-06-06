import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { Container } from "@mui/material";

export const PlantFactsAccordion = () => {
  return (
    <div>
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
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
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
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
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
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item md={4} sm={12}>
                <Container>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
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

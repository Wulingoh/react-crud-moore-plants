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
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";

export const PotFactsAccordion = () => {
  const productDetails = useProductDetailsShopList();
  return (
    <div style={{ marginBottom: "50px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "Oxygen", fontWeight:"700"  }}>
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
                  <Stack direction="row" sx={{paddingTop:"24px"}}>
                    <Box item sx={{marginBottom:"10px", marginRight:"10px"}}>
                      <Typography sx={{ fontWeight:"600", textAlign:"left" }}>
                        {fact.title}:
                      </Typography>
                    </Box>
                    <Divider></Divider>
                    <Box>
                      <Typography sx={{ fontWeight:"Regular", textAlign:"left"}}>
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
                <Typography sx={{ fontFamily: "Oxygen", fontWeight:"700"  }}>
                  About Pot
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
                      <Typography sx={{ fontWeight:"Regular", textAlign:"left"}}>
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
export default PotFactsAccordion;

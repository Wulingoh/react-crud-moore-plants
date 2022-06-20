import * as React from "react";
import { useProductDetailsShopList } from "../FetchApi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { Container } from "@mui/material";

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
                <Typography sx={{ fontFamily: "Oxygen", fontWeight: "700" }}>
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
            <Grid container spacing={3}>
              {productDetails.facts?.map((fact, key) => (
                <Grid
                  key={key}
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography sx={{ fontWeight: "600", textAlign: "left" }}>
                        {fact.title}:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ fontWeight: "Regular", textAlign: "left" }}
                      >
                        {fact.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
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
                <Typography sx={{ fontFamily: "Oxygen", fontWeight: "700" }}>
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
                      <Typography
                        sx={{ fontWeight: "Regular", textAlign: "left" }}
                      >
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

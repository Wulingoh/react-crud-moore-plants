import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const PotsAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pot Height</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="XS (0 - 10cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="S (10 - 15cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="M (15 - 20cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="L (20 - 25cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pot Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox/>}
              label="White"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Cream"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Grey"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Black"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Blue"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Green"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Pink"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pot Material</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Clay"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Recycled Plastic"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Concrete"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Ceramic"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

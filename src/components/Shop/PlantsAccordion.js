import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function valuetext(value) {
  return `${value}°C`;
}

export const PlantsAccordion = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Light</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Happiest in direct sunlight"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Happy in light &amp; shade"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Happy in shade"
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
          <Typography>Care Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Almost un-killable"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Easy to care for"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Needs some love"
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
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Special Feature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Plant Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Flowering"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fern"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Cacti & succulents"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Palms & trees"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Hanging & climbing"
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
          <Typography>Plant Height</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Tall / 1m-2.8m"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medium / 50cm-1m"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Small / 15-50cm"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Tiny / 0-15cm"
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
          <Typography>Room</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Living room"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bedroom"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bathroom"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Kitchen"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Study"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Corridor"
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
          <Typography>Safety</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Child & Pet Safe"
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

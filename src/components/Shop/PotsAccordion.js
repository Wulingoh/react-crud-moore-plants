import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useLightingCareShopList,
  useCareLevelShopList,
  useCategoryShopList,
} from "../FetchApi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

export const PotsAccordion = (props) => {
  const priceLabel = [
    {
      value: 10,
      label: "$10",
    },
    {
      value: 80,
      label: "$80",
    },
    {
      value: 200,
      label: "$200",
    },
  ];

  const handleArrayChange = (event) => {
    let value = props.params[event.target.name] || [];
    if (event.target.checked) {
      value = [...value, event.target.value];
    } else {
      value = value.filter((id) => id !== event.target.value);
    }
    props.setParams({
      ...props.params,
      [event.target.name]: value,
    });
  };

  const handleSliderChange = (event, newValue) => {
    props.setParams({
      ...props.params,
      [event.target.name + "Gte"]: newValue[0],
      [event.target.name + "Lt"]: newValue[1],
    });
  };
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
              control={
                <Checkbox
                  name={"size"}
                  value={"xs"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.size
                      ? props.params.size.includes("xs")
                      : false
                  }
                />
              }
              label="XS (0 - 10cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"size"}
                  value={"s"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.size
                      ? props.params.size.includes("s")
                      : false
                  }
                />
              }
              label="S (10 - 15cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"size"}
                  value={"m"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.size
                      ? props.params.size.includes("m")
                      : false
                  }
                />
              }
              label="M (15 - 20cm)"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"size"}
                  value={"l"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.size
                      ? props.params.size.includes("l")
                      : false
                  }
                />
              }
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
              control={
                <Checkbox
                  name={"color"}
                  value={"white"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("white")
                      : false
                  }
                />
              }
              label="White"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"cream"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("cream")
                      : false
                  }
                />
              }
              label="Cream"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"grey"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("grey")
                      : false
                  }
                />
              }
              label="Grey"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"black"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("black")
                      : false
                  }
                />
              }
              label="Black"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"blue"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("blue")
                      : false
                  }
                />
              }
              label="Blue"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"green"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("green")
                      : false
                  }
                />
              }
              label="Green"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"color"}
                  value={"pink"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.color
                      ? props.params.color.includes("pink")
                      : false
                  }
                />
              }
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
              control={
                <Checkbox
                  name={"potMaterial"}
                  value={"clay"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.potMaterial
                      ? props.params.potMaterial.includes("clay")
                      : false
                  }
                />
              }
              label="Clay"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"potMaterial"}
                  value={"recycled"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.potMaterial
                      ? props.params.potMaterial.includes("recycled")
                      : false
                  }
                />
              }
              label="Recycled Plastic"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={<Checkbox 
                name={"potMaterial"}
                value={"concrete"}
                onChange={handleArrayChange}
                checked={
                  props.params.potMaterial
                    ? props.params.potMaterial.includes("concrete")
                    : false
                }/>
            }
              label="Concrete"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"potMaterial"}
                  value={"ceramic"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.potMaterial
                      ? props.params.potMaterial.includes("ceramic")
                      : false
                  }
                />
              }
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Slider
              getAriaLabel={() => "Price"}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              max={200}
              name="price"
              value={[props.params.priceGte || 0, props.params.priceLt || 200]}
              marks={priceLabel}
            />
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLightingCareShopList, useCareLevelShopList, useCategoryShopList } from "../FetchApi";
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

export const PlantsAccordion = (props) => {

  const lightingCare = useLightingCareShopList();
  const careLevelList = useCareLevelShopList();
  const categoryList = useCategoryShopList();
  const priceLabel = [
  
    {
      value: 10,
      label: '$10',
    },
    {
      value: 80,
      label: '$80',
    },
    {
      value: 200,
      label: '$200',
    },
  ];
  const heightLabel = [
    {
      value: 15,
      label: '15cm',
    },
    {
      value: 50,
      label: '50cm',
    },
    {
      value: 100,
      label: '1m',
    },
    {
      value: 200,
      label: '2m',
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
      [event.target.name + 'Gte']: newValue[0],
      [event.target.name + 'Lt']: newValue[1],
    });
  };

  return (
    <div style={{marginBottom: "20px"}}>
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
            {lightingCare.map((lighting) => (
              <FormControlLabel
                key={lighting.lighting_id}
                control={
                  <Checkbox
                    name={"lightingCareId"}
                    value={lighting.lighting_id}
                    onChange={handleArrayChange}
                    checked={
                      props.params.lightingCareId
                        ? props.params.lightingCareId.includes(
                            lighting.lighting_id.toString()
                          )
                        : false
                    }
                  />
                }
                label={lighting.name}
                labelPlacement="start"
                sx={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              />
            ))}
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
            {careLevelList.map((careLevel) => (
              <FormControlLabel
                key={careLevel.care_level_id}
                control={
                  <Checkbox
                    name={"careLevelId"}
                    value={careLevel.care_level_id}
                    onChange={handleArrayChange}
                    checked={
                      props.params.careLevelId
                        ? props.params.careLevelId.includes(
                            careLevel.care_level_id.toString()
                          )
                        : false
                    }
                  />
                }
                label={careLevel.name}
                labelPlacement="start"
                sx={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              />
            ))}
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
            {categoryList.map((category) => (
              <FormControlLabel
                key={category.category_id}
                control={
                  <Checkbox
                    name={"categoryId"}
                    value={category.category_id}
                    onChange={handleArrayChange}
                    checked={
                      props.params.categoryId
                        ? props.params.categoryId.includes(
                            category.category_id.toString()
                          )
                        : false
                    }
                  />
                }
                label={category.name}
                labelPlacement="start"
                sx={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              />
            ))}
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
            <Container>
              <Slider
                getAriaLabel={() => "Plant Height"}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              max={200}
              name="height"
              value={[
                props.params.heightGte || 0,
                props.params.heightLt || 200,
              ]}
                marks={heightLabel}
              />
            </Container>
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
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Living room"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Living room")
                      : false
                  }
                />
              }
              label="Living room"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Bedroom"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Bedroom")
                      : false
                  }
                />
              }
              label="Bedroom"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Bathroom"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Bathroom")
                      : false
                  }
                />
              }
              label="Bathroom"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Kitchen"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Kitchen")
                      : false
                  }
                />
              }
              label="Kitchen"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Study"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Study")
                      : false
                  }
                />
              }
              label="Study"
              labelPlacement="start"
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name={"roomType"}
                  value={"Corridor"}
                  onChange={handleArrayChange}
                  checked={
                    props.params.roomType
                      ? props.params.roomType.includes("Corridor")
                      : false
                  }
                />
              }
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
    </div>
  );
};

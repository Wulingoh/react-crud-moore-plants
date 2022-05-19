import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { PotsAccordion } from "./PotsAccordion";
import Grid from "@mui/material/Grid";
import ReplayIcon from '@mui/icons-material/Replay';
import Button from '@mui/material/Button';

const drawerWidth = 300;

export const SideBarPotFilter = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "transparent",
            top: "auto",
            backgroundColor: "#F3F7F3",
            height:"auto",
            position:"absolute",
          },
        }}
      >
        <Grid container spacing={2} sx={{marginBottom:"20px" }}>
          <Grid item xs={6} md={8}>
            <Typography textAlign="start" marginLeft="10px">
              Filters
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} sx={{ justifyContent: "flex-end" }}>
            <Button size="small" endIcon={<ReplayIcon />}>
              Reset
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ overflow: "auto"}}>
          <PotsAccordion />
        </Box>
      </Drawer>
    </Box>
  );
};

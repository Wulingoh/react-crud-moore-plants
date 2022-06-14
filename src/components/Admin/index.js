import * as React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import useAuth from "../AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
import CreateCategory from "./CreateCategory";
import CreateLightingCare from "./CreateLightingCare";
import CreateCareLevel from "./CreateCareLevel";
import CreateWatering from "./CreateWatering";
import CreateHumidity from "./CreateHumidity";
import EditOrder from "./EditOrder";
import EditUser from "./EditUser";
import EditProduct from "./EditProduct";
import EditCategory from "./EditCategory";
import EditLightingCare from "./EditLightingCare";
import EditCareLevel from "./EditCareLevel";
import EditWatering from "./EditWatering";
import EditHumidity from "./EditHumidity";
import ListOrder from "./ListOrder";
import ListUser from "./ListUser";
import ListProduct from "./ListProduct";
import ListGalleryImg from "./ListGalleryImg";
import ListCategory from "./ListCategory";
import ListLightingCare from "./ListLightingCare";
import ListCareLevel from "./ListCareLevel";
import ListWatering from "./ListWatering";
import ListHumidity from "./ListHumidity";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CategoryIcon from "@mui/icons-material/Category";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterIcon from "@mui/icons-material/Water";
import SpaIcon from "@mui/icons-material/Spa";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/orders">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/products">
      <ListItemIcon>
        <LocalFloristIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/category">
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/lighting">
      <ListItemIcon>
        <WbSunnyIcon />
      </ListItemIcon>
      <ListItemText primary="Lighting Care" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/care_level">
      <ListItemIcon>
        <SpaIcon />
      </ListItemIcon>
      <ListItemText primary="Care Level" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/watering">
      <ListItemIcon>
        <WaterIcon />
      </ListItemIcon>
      <ListItemText primary="Watering" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/humidity">
      <ListItemIcon>
        <WaterIcon />
      </ListItemIcon>
      <ListItemText primary="Humidity" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

const mdTheme = createTheme({
  typography: {
    h6: {
      fontFamily: "Oxygen",
    },
  },
});

function DashboardContent() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {user ? (
              <Tooltip title="Logout">
                <IconButton onClick={logout} sx={{ p: 0 }}>
                  <LogoutIcon sx={{ color: "white" }}/>
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Login">
                <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
                  <LoginIcon sx={{ color: "white" }}/>
                </IconButton>
              </Tooltip>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/orders" element={<ListOrder />} />
              <Route path="/orders/:orderId/edit" element={<EditOrder />} />
              <Route path="/users" element={<ListUser />} />
              <Route path="/users/create" element={<CreateUser />} />
              <Route path="/users/:userId/edit" element={<EditUser />} />
              <Route path="/products" element={<ListProduct />} />
              <Route path="/products/create" element={<CreateProduct />} />
              <Route
                path="/products/:productId/edit"
                element={<EditProduct />}
              />
              <Route
                path="/products/:productId/gallery_img"
                element={<ListGalleryImg />}
              />
              <Route path="/category" element={<ListCategory />} />
              <Route path="/category/create" element={<CreateCategory />} />
              <Route
                path="/category/:categoryId/edit"
                element={<EditCategory />}
              />
              <Route path="/lighting" element={<ListLightingCare />} />
              <Route path="/lighting/create" element={<CreateLightingCare />} />
              <Route
                path="/lighting/:lightingId/edit"
                element={<EditLightingCare />}
              />
              <Route path="/care_level" element={<ListCareLevel />} />
              <Route path="/care_level/create" element={<CreateCareLevel />} />
              <Route
                path="/care_level/:careLevelId/edit"
                element={<EditCareLevel />}
              />
              <Route path="/watering" element={<ListWatering />} />
              <Route path="/watering/create" element={<CreateWatering />} />
              <Route
                path="/watering/:wateringId/edit"
                element={<EditWatering />}
              />
              <Route path="/humidity" element={<ListHumidity />} />
              <Route path="/humidity/create" element={<CreateHumidity />} />
              <Route
                path="/humidity/:humidityId/edit"
                element={<EditHumidity />}
              />
            </Routes>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

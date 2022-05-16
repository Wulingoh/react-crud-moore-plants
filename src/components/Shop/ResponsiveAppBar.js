import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Login";
import { ReactComponent as MoorePlantLogo } from "../Images/moorePlantLogo1.svg";
import { Route, Link} from "react-router-dom";

const pages = [
  ["Home", ""],
  ["Plant", "/plants"],
  ["Pot", "/pots"],
  ["How To Green", "/howToGreen"],
  ["Story", "/about"],
  ["Shop", "/shop"],
  ["Contact", "/contact"]
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F3F7F3", color: "#323232", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MoorePlantLogo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map(([title, path]) => (
                <MenuItem key={path} onClick={handleCloseNavMenu} component={Link} to={path}>
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, marginRight: "10px" }}
                  >
                    <ShoppingBagIcon />
                  </IconButton>
                </Tooltip>
              </MenuItem>
              <MenuItem>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <LoginIcon />
                  </IconButton>
                </Tooltip>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map(([title, path]) => (
              <Button
                key={path}
                onClick={handleCloseNavMenu}
                component={Link} to={path}
                sx={{ my: 2, color: "#323232", display: "block" }}
              >
                {title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0,
              display: { xs: "none", md: "flex" }}}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, marginRight: "10px" }}
              >
                <ShoppingBagIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LoginIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

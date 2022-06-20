import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { ReactComponent as MoorePlantLogo } from "../Images/moorePlantLogo1.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Plants from "./Plants";
import useAuth from "../AuthContext";
import { Badge } from "@mui/material";
import { useCart } from "./CartContext";
import { Cart } from "./Cart";
import { CartMobile } from "./CartMobile";

const pages = [
  ["Home", ""],
  ["Plants", "/plants"],
  ["Pots", "/pots"],
  ["How To Green", "/howToGreen"],
  ["Story", "/about"],
  ["Contact", "/contact"],
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const { user, logout, signUp } = useAuth();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartOpenMobile, setCartOpenMobile] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { itemCount } = useCart();

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
          <Link to={"/"}>
            <MoorePlantLogo
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(([title, path]) => (
                <MenuItem
                  key={path}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={path}
                >
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Tooltip title="Shopping Cart">
                  <IconButton
                    onClick={(event) => {setCartOpenMobile(!cartOpenMobile); handleCloseNavMenu()} }
                    sx={{ p: 0, marginRight: "10px" }}
                  >
                    <Badge color="secondary" badgeContent={itemCount}>
                      <ShoppingBagIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Drawer
                  anchor={"right"}
                  open={cartOpenMobile}
                  onClose={() => setCartOpenMobile(false)}
                  PaperProps={{
                    sx: {
                      width: 300,
                      height: 600,
                      backgroundColor: "#F3F7F3",
                    },
                  }}
                >
                  <CartMobile onClose={() => setCartOpenMobile(false)} />
                </Drawer>
              </MenuItem>
              <MenuItem>
                <Tooltip title="Sign Up">
                  <IconButton
                    onClick={() => navigate("/signup")}
                    sx={{ p: 0, marginRight: "10px" }}
                  >
                    <AppRegistrationIcon />
                  </IconButton>
                </Tooltip>
              </MenuItem>
              <MenuItem>
                {user ? (
                  <Tooltip title="Logout">
                    <IconButton onClick={logout} sx={{ p: 0 }}>
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Login">
                    <IconButton
                      onClick={() => navigate("/login")}
                      sx={{ p: 0 }}
                    >
                      <LoginIcon />
                    </IconButton>
                  </Tooltip>
                )}
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
                component={Link}
                to={path}
                sx={{ my: 2, color: "#323232", display: "block" }}
              >
                {title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Shopping Cart">
              <IconButton
                onClick={() => setCartOpen(!cartOpen)}
                sx={{ p: 0, marginRight: "10px" }}
              >
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Drawer
              anchor={"right"}
              open={cartOpen}
              onClose={() => setCartOpen(false)}
              PaperProps={{
                sx: {
                  width: 450,
                  height: 700,
                  backgroundColor: "#F3F7F3",
                },
              }}
            >
              <Cart onClose={() => setCartOpen(false)} />
            </Drawer>
            <Tooltip title="Sign Up">
              <IconButton
                onClick={() => navigate("/signup")}
                sx={{ p: 0, marginRight: "10px" }}
              >
                <AppRegistrationIcon />
              </IconButton>
            </Tooltip>

            {user ? (
              <Tooltip title="Logout">
                <IconButton onClick={logout} sx={{ p: 0 }}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Login">
                <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
                  <LoginIcon />
                </IconButton>
              </Tooltip>
            )}

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

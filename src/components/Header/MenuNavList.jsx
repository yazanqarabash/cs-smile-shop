import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Jewelery", "Electronics", "Men's Clothing", "Women's Clothing"];

function MenuNavList() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box>
      {/* MOBILE */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
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
          {pages.map((page) => (
            <MenuItem
              key={page}
              onClick={handleCloseNavMenu}
              component={NavLink}
              to={`/products/category/${page.toLowerCase()}`}
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* DESKTOP */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleOpenNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to={`/products/category/${page.toLowerCase()}`}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default MenuNavList;

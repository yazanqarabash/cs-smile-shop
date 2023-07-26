import * as React from "react";
import { Link } from "react-router-dom";
import MenuNavList from "./MenuNavList";
import CartWidget from "../Cart/CartWidget";
import SearchBar from "./SearchBar";
import { Typography, Container, Toolbar, AppBar } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static" sx={{ px: { xs: 20, sm: 0 } }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                py: "15px",
                fontSize: { xs: "35px", sm: "40px" },
                px: { xs: "10px", md: "0" },
                fontFamily: "Rosmatika",
              }}
            >
              SmileShop
            </Typography>
          </Link>
          <MenuNavList />
          <Container
            maxWidth="xs"
            disableGutters
            sx={{ m: 0, px: { xs: "1px", md: "0" } }}
          >
            <SearchBar />
          </Container>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

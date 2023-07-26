import * as React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import { Grid, Container } from "@mui/material";

function RootLayout() {
  return (
    <Grid height="100vh" display="flex" flexDirection="column">
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs>
        <Container>
          <Outlet />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default RootLayout;

import * as React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Link, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", p: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.main" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.main">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.main" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.main">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.main">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.main">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.main" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="text.main">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="text.main"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="text.main">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.main" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

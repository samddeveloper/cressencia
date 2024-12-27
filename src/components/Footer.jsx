import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FFF8E8",
        color: "#333",
        bottom: 0, // Align to bottom
        left: 0, // Align to left
        right: 0, // Align to right
        py: 4, // Reduced padding for better fit
        borderTop: " 1px solid black",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Section */}
          <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Norrköping
            </Typography>
            <Typography
              component="a"
              href="mailto:info@cressencia.se"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              info@cressencia.se
            </Typography>
            <Typography
              component="a"
              href="tel:076-7862346"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              076 - 786 23 46
            </Typography>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Våra tjänster
            </Typography>
            <Link
              href="/tjanster"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Reiki
            </Link>
            <Link
              href="/tjanster"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Radiestesi
            </Link>
            <Link
              href="/tjanster"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Tarotläsning
            </Link>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Navigering
            </Typography>
            <Link
              href="/om"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Om Cressencia
            </Link>
            <Link
              href="/kontakt"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Kontakta oss
            </Link>
            <Link
              href="/boka"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#5a6f2e" },
              }}
            >
              Boka tid
            </Link>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 3,
            pt: 2,
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Cressencia
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

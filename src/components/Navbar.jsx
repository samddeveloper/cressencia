import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Hem", path: "/" },
    { text: "Tjänster", path: "/tjanster" },
    { text: "Om Cressencia", path: "/om" },
    { text: "Kontakt", path: "/kontakt" },
    { text: "Boka Tid", path: "/boka" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#FFF8E8", // Bakgrundsfärg
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={logo}
              alt="Cressencia logo"
              style={{
                height: "80px", // Anpassa höjden på logotypen
                objectFit: "contain",
              }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              color="inherit" // Behåller textfärgen
              sx={{
                color: "#6B6B6B", // Sätt färg på texten (ändra vid behov)
                textTransform: "none", // Gör texten mindre "skrikig"
                fontWeight: 500, // Ger en behaglig tyngd till texten
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <Button
          variant="outlined"
          startIcon={<PhoneIcon />}
          sx={{
            ml: 2,
            display: { xs: "none", md: "flex" },
            color: "#6B6B6B", // Samma textfärg som menyknapparna
            borderColor: "#6B6B6B",
          }}
        >
          076 - 786 23 46
        </Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={item.text} sx={{ color: "#6B6B6B" }} />
            </ListItem>
          ))}
          <ListItem button component="a" href="tel:076-786-23-46">
            <ListItemText primary="076 - 786 23 46" sx={{ color: "#6B6B6B" }} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

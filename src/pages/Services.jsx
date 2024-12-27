import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import reikiimg from "../Assets/reiki.jpg";
import radiestesiimg from "../Assets/radiestesi.jpg";
import tarot from "../Assets/tarot.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Reiki",
    description:
      "Reiki är en japansk energiterapi som hjälper till att balansera kropp och själ.",
    image: reikiimg,
    price: "500 kr",
    duration: "90 minuter",
  },
  {
    name: "Radiestesi",
    description:
      "Radiestesi använder energiavläsning för att ge klarhet och vägledning.",
    image: radiestesiimg,
    price: "500 kr",
    duration: "90 minuter",
  },
  {
    name: "Tarotläsning",
    description:
      "Tarotkort ger insikter och hjälper dig att fatta medvetna beslut i livet.",
    image: tarot,
    price: "500 kr",
    duration: "90 minuter",
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Tjänster
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.name} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.name}
                </Typography>
                <Typography>{service.description}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {service.duration}, {service.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  sx={{
                    backgroundColor: "#5a6f2e", // Använd den primära färgen
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "12px 24px",
                    "&:hover": {
                      backgroundColor: "#4b5a28", // Lite mörkare grön för hover-effekt
                    },
                  }}
                  component={Link}
                  to="/boka"
                >
                  Boka tid
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

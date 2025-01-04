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
    description: [
      "Reiki är en kraftfull metod som hjälper dig att släppa stressen, harmonisera din energi och hitta tillbaka till en känsla av lugn och balans.",
      "Genom djup avslappning och energiarbete kan Reiki lindra ångest, förbättra din sömn och till och med påskynda återhämtning från skador.",
      "Tänk dig att vakna upp med ett klarare sinne och en nyfunnen livskvalitet – det är möjligt med Reiki.",
      "Reiki är godkänd som stresshantering av skatteverket. Det innebär att du som har friskvårdspeng på jobbet kan använda den till Reikibehandlingar.",
    ],
    image: reikiimg,
    price: "890 kr",
    duration: "90 minuter",
  },
  {
    name: "Radiestesi",
    description: [
      "Radiestesi är en metod som hjälper dig att identifiera möjliga obalanser i kroppen och energifältet, och ger dig insikter om vad som kan ligga bakom dina symtom eller utmaningar.",
      "Genom att använda pendeln som ett verktyg kan du få vägledning i allt från hälsa och kost till livets stora beslut, som karriär eller relationer.",
      "Tänk dig att få klarhet i vad din kropp behöver, eller att känna dig tryggare i de val du gör – radiestesi kan hjälpa dig att hitta balans och riktning i livet.",
    ],
    image: radiestesiimg,
    price: "490 kr",
    duration: "90 minuter",
  },
  {
    name: "Tarotläsning",
    description: [
      "Brottas du med känslor eller mönster som du inte riktigt förstår, eller står inför beslut där du inte vet vilken väg du ska välja?",
      "Tarotläsning är ett kraftfullt verktyg för dig som känner dig osäker eller fast i livets stora frågor.",
      "Tänk dig att få klarhet i vad som håller dig tillbaka, eller att förstå dynamiken i en relation på ett djupare plan.",
      "*Observera att tarotläsning inte är en exakt vetenskap, utan ett kreativt verktyg för självreflektion och nya perspektiv.*",
    ],
    image: tarot,
    price: "490 kr",
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
                {service.description.map((paragraph, index) => (
                  <Typography
                    key={index}
                    paragraph
                    sx={
                      paragraph.startsWith("*Observera")
                        ? { color: "text.secondary", fontStyle: "italic" }
                        : {}
                    }
                  >
                    {paragraph.replace("*", "")}
                  </Typography>
                ))}
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
                    backgroundColor: "#5a6f2e",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "12px 24px",
                    "&:hover": {
                      backgroundColor: "#4b5a28",
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

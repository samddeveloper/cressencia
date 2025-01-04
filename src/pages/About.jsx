import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import HealingIcon from "@mui/icons-material/Healing";
import ProfileImg from "../Assets/profile.png";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Om Cressencia
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          Under mer än ett decennium har jag bott i Sverige, en plats som har
          format min syn på livet och min koppling till energi och helande. Min
          resa började som lärare i idrott och hälsa, ett yrke som lärde mig att
          förstå kroppen, sinnet och vikten av att hitta balans vilket har
          omvandlat mig till en passionerad person i undervisning och
          välbefinnande.
        </Typography>
        <Typography variant="body1" paragraph>
          Idag, som holistisk terapeut, har jag förvandlat denna passion till en
          djupare väg: att hjälpa människor att läka och återknyta till sin
          essens. Jag använder tekniker som Reiki, radiestesi, tarotläsning och
          helande samtal för att vägleda dem som söker klarhet, lättnad och
          förnyelse i sina liv.
        </Typography>
        <Typography variant="body1" paragraph>
          Min mission är enkel men kraftfull: att vara en bro till läkning,
          balans och inre frid. Varje terapi jag erbjuder är noggrant utformad
          och anpassad till varje persons unika behov, eftersom jag starkt tror
          att vi alla har kraften att läka, men ibland behöver vi en fyr som
          lyser upp vägen.
        </Typography>
        <Typography variant="body1" paragraph>
          Jag bjuder in dig att upptäcka hur dessa terapier kan hjälpa dig att
          förändra ditt liv. Här hittar du inte bara en plats för helande, utan
          också en plats för lyssnande, förståelse och förnyande energi.
          Välkommen till denna resa!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={ProfileImg}
          sx={{
            width: 200,
            height: "auto",
          }}
        />
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <FavoriteIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Passion
            </Typography>
            <Typography variant="body2">
              Vår passion för helande driver oss att ge dig den bästa möjliga
              upplevelsen.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <BalanceIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Balans
            </Typography>
            <Typography variant="body2">
              Vi hjälper dig att hitta balans i kropp, sinne och själ.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <HealingIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Helande
            </Typography>
            <Typography variant="body2">
              Våra terapier är utformade för att främja djupgående helande och
              förnyelse.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

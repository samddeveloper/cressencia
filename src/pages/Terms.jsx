import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Terms = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FFF8E8",
        color: "#333",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          Villkor
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Här är våra villkor för bokning av tjänster:
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Tjänster och priser
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          - Reiki: 90 minuter, 890 kr <br />
          - Radiestesi: 90 minuter, 490 kr <br />- Tarotläsning: 90 minuter, 490
          kr
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Plats för tjänster
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tjänsterna kan utföras antingen digitalt via Google Meet eller på
          plats i kundens bostad (gäller endast inom Norrköpings tätort). Vid
          bokning på plats ansvarar kunden för att tillhandahålla en lugn och
          ostörd plats i bostaden.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Avbokningspolicy
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Avbokning som sker senare än 3 timmar innan avtalad tid debiteras med
          fullt pris.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Betalning
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Fakturering sker efter att tjänsten har utförts. Betalning ska ske
          enligt de angivna betalningsvillkoren på fakturan.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Övrigt
        </Typography>
        <Typography variant="body1">
          Vid digitala möten ansvarar kunden för att ha en stabil
          internetuppkoppling och tillgång till Google Meet. Vid bokning av
          tjänster godkänner kunden dessa villkor.
        </Typography>
      </Container>
    </Box>
  );
};

export default Terms;

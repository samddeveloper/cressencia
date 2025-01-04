import React from "react";
import { InlineWidget } from "react-calendly";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";

const BookingPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Boka din tid
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Välj en tid som passar dig och boka enkelt via vår kalender.
        </Typography>
        <Card
          sx={{
            width: "100%",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardContent>
            <InlineWidget
              url="https://calendly.com/cressencia-info/30min"
              styles={{
                height: "1000px", // Adjusted height to fit the entire widget
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default BookingPage;

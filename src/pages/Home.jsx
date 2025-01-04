import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import heroImage from "../Assets/hero.jpg";
import emailjs from "@emailjs/browser";
import SittingImg from "../Assets/sitting-profile.png";

const Home = () => {
  // Lokal FadeInSection-komponent
  const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.7 }
      );

      if (domRef.current) {
        observer.observe(domRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={domRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {children}
      </div>
    );
  };

  // Lägg till dessa state-variabler för formuläret
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Uppdaterad handleSubmit-funktion
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_619nomk", // från EmailJS
        "template_fre6q4i", // från EmailJS
        form.current,
        "CM1sRTV76T7S7V_9C" // från EmailJS
      )
      .then((result) => {
        setSubmitStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "100vh", sm: "98vh" }, // Full height on mobile, 98vh on larger screens
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundAttachment: { xs: "scroll", md: "fixed" }, // Disable fixed background on mobile
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        />
        <Container
          maxWidth="md"
          sx={{
            zIndex: 2,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
            px: 4,
          }}
        >
          <FadeInSection>
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: { xs: "36px", sm: "50px" }, // Adjust font size for mobile
                fontWeight: 500,
              }}
            >
              Cressencia - Holistic Center
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                fontSize: { xs: "16px", sm: "20px" }, // Adjust font size for mobile
              }}
            >
              Avslappnande, Helande
            </Typography>
          </FadeInSection>

          <FadeInSection>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/boka"
                sx={{
                  bgcolor: "#5a6f2e",
                  "&:hover": { bgcolor: "#4d5e26" },
                  marginRight: 2,
                }}
              >
                Boka en tid
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/tjanster"
                sx={{
                  bgcolor: "#5a6f2e",
                  "&:hover": { bgcolor: "#4d5e26" },
                }}
              >
                Tjänster
              </Button>
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* Other Sections */}
      <FadeInSection>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Om Cressencia
          </Typography>
          <Typography variant="body1" paragraph>
            Med över ett decennium av erfarenhet i Sverige har jag utvecklat en
            djup förståelse för kropp, sinne och energi. Som holistisk terapeut
            är min mission att hjälpa dig hitta balans och inre frid genom
            tekniker som Reiki, radiestesi och tarotläsning.
          </Typography>
          <Button component={Link} to="/om" variant="contained" color="primary">
            Läs mer
          </Button>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom align="center">
              Tjänster
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{
                color: "text.secondary", // Use a lighter color from the theme
                fontStyle: "italic", // Add a subtle italic style
                mb: 4, // Add some margin below the text
              }}
            >
              Föredrar du mötet digitalt? – Välj "Google Meet" vid bokning.
            </Typography>
            <Grid container spacing={4}>
              {["Reiki", "Radiestesi", "Tarotläsning"].map((service) => {
                let price = "490 kr"; // Standardpris
                if (service === "Reiki") {
                  price = "890 kr";
                }

                return (
                  <Grid item key={service} xs={12} sm={6} md={4}>
                    <Card>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {service}
                        </Typography>
                        <Typography>90 minuter, {price}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          component={Link}
                          to="/boka"
                        >
                          Boka nu
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          variant="outlined"
                          component={Link}
                          to="/tjanster"
                          sx={{
                            ml: 2,
                          }}
                        >
                          Läs mer
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            "Healing är en resa, inte en destination."
          </Typography>
          <Typography variant="body1" align="center">
            Låt oss tillsammans utforska vägen till ditt inre välbefinnande.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
              pt: 5,
            }}
          >
            <Box
              component="img"
              src={SittingImg}
              sx={{
                width: 200,
                height: "auto",
              }}
            />
          </Box>
        </Container>
      </FadeInSection>

      {/* Contact Form */}
      <FadeInSection>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h2" gutterBottom align="center">
            Kontakta oss
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <form ref={form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="user_name"
                      label="Namn"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="user_email"
                      label="E-post"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Meddelande"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Skickar..." : "Skicka"}
                    </Button>
                    {submitStatus === "success" && (
                      <Typography color="success" sx={{ mt: 2 }}>
                        Meddelandet har skickats!
                      </Typography>
                    )}
                    {submitStatus === "error" && (
                      <Typography color="error" sx={{ mt: 2 }}>
                        Ett fel uppstod. Försök igen senare.
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Kontaktinformation
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Typography>076 - 786 23 46</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography>info@cressencia.se</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon sx={{ mr: 2 }} />
                  <Typography>Norrköping, Sverige</Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="tel:+46767862346"
                  >
                    Ring
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FadeInSection>
    </Box>
  );
};

export default Home;

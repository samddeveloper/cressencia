import React, { useRef, useState } from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
          </Box>
          {/* <Box sx={{ width: "100%", height: 300, bgcolor: "grey.300" }}>
            Placeholder for Google Map
            <Typography variant="body2" align="center" sx={{ pt: 2 }}>
              Google Map kommer att visas här
            </Typography>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

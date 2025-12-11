// src/pages/SmartGensetMS.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "Full-Stack Web Development",
    text: "We build modern, scalable, and secure websites using React, Node.js, MERN, and cloud technologies.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Mobile App Development",
    text: "Custom Android, iOS, and cross‑platform mobile apps with excellent UI/UX and powerful backend systems.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Artificial Intelligence (AI)",
    text: "AI tools, smart prediction engines, automation scripts, and business intelligence models for companies.",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Automation Solutions",
    text: "Process automation systems to reduce manual work, boost productivity, and save time.",
    image: "https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Logo & Branding Design",
    text: "Professional logos and visual branding to help your business stand out with a strong identity.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Data Entry & Documentation",
    text: "Accurate, fast, and reliable data entry services to manage your business information efficiently.",
    image: "https://images.pexels.com/photos/2058131/pexels-photo-2058131.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Services() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Our Services
      </Typography>
      <Box sx={{ mb: 3 }}>
  <Typography variant="h4" sx={{ fontWeight: 700 }}>
    Our Services
  </Typography>

  <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
    Explore the range of digital solutions we provide, including full‑stack web
    development, app development, AI systems, automation, branding, and more.
  </Typography>
</Box>

      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                }}
              />

              {/* Text */}
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {service.text}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// src/pages/SmartEnergyMSAI.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

// Hero image (tablet + industrial background – similar to your design)
const HERO_IMAGE =
  "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1600";
const FEATURE_CARDS = [
  {
    title: "Rupee-Level Energy Cost Intelligence",
    text: "Know exactly where every rupee of your energy bill is going.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/ChatGPT-Image-Dec-4-2025-02_20_10-PM.png",
  },
  {
    title: "Real-Time SCADA-Grade Plant Visibility",
    text: "One live screen for your entire plant power system.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/ChatGPT-Image-Dec-4-2025-03_29_06-PM.png",
  },
  {
    title: "AI-Driven Anomaly Detection & Smart Alerts",
    text: "Your 24×7 digital energy guard that shouts only when it matters.",
    image:
      "	https://esm.co.in/wp-content/uploads/2025/12/Airbrush-image-extender-5.jpeg",
  },
  {
    title: "Digital Twin of Your Electrical Network",
    text: "A virtual mirror of your electrical system – from transformer to last machine.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/4b2c8132-6dc0-41d8-a8fc-ca3975a27ba8_figure4-2.jpg",
  },
  {
    title: "Power Factor, MD & ToD Optimizer",
    text: "From penalty to incentive – on autopilot.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/Airbrush-image-extender-1-2.jpeg",
  },
  {
    title: "Predictive Maintenance & Asset Health",
    text: "Know which machine needs attention before it fails.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/Predictive-Maintenance-Asset-Health-2.jpg",
  },
  {
    title: "Multi-Plant Management",
    text: "One login. Every plant, every tower, every device.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/Mult-Plants-Management-1.webp",
  },
  {
    title: "Made-in-India Edge Hardware + Secure AWS Cloud",
    text: "Indian hardware for industry, powered by global cloud.",
    image:
      "	https://esm.co.in/wp-content/uploads/2025/12/Make-in-India-1-2.jpg",
  },
  {
    title: "Automated Reports, Compliance & APIs",
    text: "From raw data to ready-to-attach reports and easy integrations.",
    image:
      "https://esm.co.in/wp-content/uploads/2025/12/Airbrush-image-extender-3-1.jpeg",
  },
];


export default function SmartEnergyMSAI() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          minHeight: { xs: 260, md: 340 },
          boxShadow: "0 25px 60px rgba(15,23,42,0.25)",
        }}
      >
        {/* background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.75)",
          }}
        />

        {/* subtle gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.45) 45%, rgba(15,23,42,0.15) 100%)",
          }}
        />

        {/* text content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
            maxWidth: { xs: "100%", md: "60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Chip
            label="Product • Smart Energy Monitoring System-AI"
            sx={{
              alignSelf: "flex-start",
              mb: 2,
              bgcolor: "rgba(15,23,42,0.9)",
              color: "white",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 1,
              letterSpacing: 0.3,
            }}
          >
            Internet of Things (IoT) Skill Program
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(241,245,249,0.95)",
              maxWidth: 640,
              mb: 1.5,
            }}
          >
            ESM’s skill development programs have a core focus on IoT (Internet of Things), preparing participants to excel in the rapidly growing field of connected technology. The programs cover IoT fundamentals, device integration, and data communication across smart systems. Participants learn about sensors, microcontrollers, networking protocols, cloud platforms, and IoT-specific software development. Practical applications include designing and implementing smart systems for industrial automation, smart cities, healthcare, and consumer electronics.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(226,232,240,0.95)",
              maxWidth: 640,
            }}
          >
           
ESM emphasizes hands-on experience through projects such as smart gensets, smart restrooms, and IoT-enabled aerospace solutions. With a focus on innovation and problem-solving, the IoT curriculum equips learners with skills in real-time monitoring, data analytics, machine learning integration, and end-to-end IoT system development.
          </Typography>
        </Box>
      </Box>

      {/* ================= FEATURE CARD GRID ================= */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 1.5, textAlign: "center" }}
        >
          What Smart Energy MS-AI Delivers
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 4, maxWidth: 720, mx: "auto" }}
        >
          Nine tightly integrated capabilities — from rupee-level energy
          visibility to predictive maintenance and automated reporting — built
          for Indian industry and global competitiveness.
        </Typography>

        <Grid container spacing={3}>
          {FEATURE_CARDS.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.title}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                  cursor: "pointer",
                  border: "1px solid rgba(148,163,184,0.35)",
                  boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
                  transform: "translateY(0) scale(1)",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.01)",
                    boxShadow: "0 26px 70px rgba(15,23,42,0.25)",
                    borderColor: "primary.main",
                  },
                  "&:hover .bgImg": {
                    transform: "scale(1.06)",
                    filter: "brightness(1.05)",
                  },
                  "&:hover .overlay": {
                    opacity: 0.5,
                  },
                }}
              >
                {/* Top image */}
                <Box
                  className="bgImg"
                  sx={{
                    position: "relative",
                    height: 160,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.6s ease, filter 0.6s ease",
                    transform: "scale(1.02)",
                  }}
                >
                  {/* gradient overlay for readability */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.65) 100%)",
                      opacity: 0.75,
                      transition: "opacity 0.35s ease",
                    }}
                  />

                  {/* small label chip in corner */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 16,
                      bottom: 14,
                    }}
                  >
                    <Chip
                      label="SEMS-AI"
                      size="small"
                      sx={{
                        bgcolor: "rgba(15,23,42,0.9)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: 0.5,
                      }}
                    />
                  </Box>
                </Box>

                {/* Text content */}
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: 17,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 14, lineHeight: 1.6 }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// src/pages/SmartGensetMS.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

// Hero image – mobile light tower / genset vibe
const HERO_IMAGE =
  "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=1600";

// Feature cards content
const FEATURE_CARDS = [
  {
    title: "All Smart Genset Status Dashboard",
    text: "Centralized dashboard for viewing the operational status of all mobile light towers.",
    image:
      "https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Fuel and Run Time Analysis",
    text: "Monitors fuel usage and estimates run time to optimize fuel efficiency.",
    image:
      "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Fuel Theft Detection",
    text: "Detects anomalies in fuel levels, alerting operators in case of suspected fuel theft.",
    image:
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Engine Run Hour and Predictive Maintenance",
    text: "Monitors engine run hours and predicts maintenance needs to reduce unplanned downtime.",
    image:
      "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "4G Connectivity and Remote Diagnostics",
    text: "Provides continuous monitoring and real-time alerts via 4G LTE.",
    image:
      "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "GPS and Geofencing",
    text: "Tracks the location of each mobile light tower and sets up geofencing to monitor movement or unauthorized relocation.",
    image:
      "https://images.pexels.com/photos/4425557/pexels-photo-4425557.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function SmartGensetMS() {
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

        {/* gradient overlay */}
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
            label="Product • Smart Genset Monitoring System"
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
            Smart Genset Monitoring System
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(241,245,249,0.95)",
              maxWidth: 720,
              mb: 1.5,
            }}
          >
            The Smart Genset Monitoring System converts every mobile light tower
            into a fully connected, intelligent asset — without changing the
            existing genset. Edge hardware inside the tower captures live data
            on fuel level, consumption, engine health, run hours, battery,
            electrical load and alarms, and securely pushes it over 4G LTE to
            the cloud dashboard.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(226,232,240,0.95)",
              maxWidth: 720,
            }}
          >
            Fleet owners get a single-pane view of all towers, with fuel and run
            time analytics, theft detection, remote diagnostics and GPS
            tracking. The result: higher uptime, safer sites, lower operating
            costs and complete visibility across every deployed tower.
          </Typography>
        </Box>
      </Box>

      {/* ================= FEATURE GRID ================= */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 1.5, textAlign: "center" }}
        >
          Key Capabilities of Smart Genset MS
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 4, maxWidth: 720, mx: "auto" }}
        >
          From a single dashboard for every tower to deep analytics on fuel,
          engine health and movement — these features are built for rental
          companies, EPCs and infrastructure projects that can’t afford dark
          sites.
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
                    opacity: 0.45,
                  },
                }}
              >
                {/* Image */}
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
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.70) 100%)",
                      opacity: 0.8,
                      transition: "opacity 0.35s ease",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      left: 16,
                      bottom: 14,
                    }}
                  >
                    <Chip
                      label="Smart Genset"
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

                {/* Text */}
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

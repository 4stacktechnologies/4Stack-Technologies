// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function SkillIoT() {
  return (
    <Box sx={{ display: "flex", padding:"10rem",flexDirection: "column", gap: 6 }}>
      {/* ================= TEXT HERO (NO IMAGE) ================= */}
      
      {/* ================= ABOUT SECTION (ONLY TEXT) ================= */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            textAlign: "center",
            fontSize: { xs: 22, md: 28 },
          }}
        >
Internet of Things (IoT) Skill Program        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            mb: 4,
            maxWidth: 720,
            mx: "auto",
          }}
        >
          An “Industry Inside the Institute” concept by ELIXIR Strategic
          Management (ESM), designed to bridge the gap between academic learning
          and real-world applications.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                boxShadow:
                  "0 18px 45px rgba(15,23,42,0.12), 0 0 0 1px rgba(148,163,184,0.15)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.7, color: "text.primary" }}
              >
                ESM’s skill development programs have a core focus on IoT (Internet of Things), preparing participants to excel in the rapidly growing field of connected technology. The programs cover IoT fundamentals, device integration, and data communication across smart systems. Participants learn about sensors, microcontrollers, networking protocols, cloud platforms, and IoT-specific software development. Practical applications include designing and implementing smart systems for industrial automation, smart cities, healthcare, and consumer electronics.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.7, color: "text.primary" }}
              >
                ESM emphasizes hands-on experience through projects such as smart gensets, smart restrooms, and IoT-enabled aerospace solutions. With a focus on innovation and problem-solving, the IoT curriculum equips learners with skills in real-time monitoring, data analytics, machine learning integration, and end-to-end IoT system development.


              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

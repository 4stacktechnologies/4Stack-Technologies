// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function SkillEVElectronic() {
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
EV Electronic Skill Program
        </Typography>

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
ESM offers a comprehensive set of skill development programs in the 2-wheeler EV electronics space, designed to equip engineers and professionals with the knowledge and tools needed to excel in the growing electric vehicle market. The Battery Management System program focuses on efficient battery design, safety, and performance management, while the Advanced Driver Assistance Systems course teaches essential rider safety technologies like collision warnings and lane assistance. Participants in EV Electronic Fundamentals will gain a deep understanding of motor control and power electronics. The EV Communication Protocols program covers standards like CAN bus and LIN, crucial for system integration. EV Connectivity Solutions provides training in IoT and telematics for connected vehicle platforms, and the Electric Powertrain Control course focuses on optimizing motor and powertrain performance. These programs combine theoretical knowledge and practical applications, preparing professionals to innovate in the EV industry.

              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

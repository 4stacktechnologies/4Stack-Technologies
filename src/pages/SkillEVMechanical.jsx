// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function SkillEVMechanical() {
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
E-Vehicle Mechanical Skill Program
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
                ESM offers a comprehensive skill development program in Electric Vehicle (EV) Design, Development, and Manufacturing tailored specifically for Mechanical Engineering professionals. The program covers critical areas such as EV chassis design, where participants learn to design lightweight yet strong vehicle structures using advanced materials and FEA analysis. It also delves into thermal management systems, crucial for maintaining battery and powertrain performance, and electric powertrain design, focusing on integrating motors, transmissions, and battery packs. Participants will also explore vehicle dynamics, focusing on the mechanical design of suspension, steering, and braking systems, along with the integration of control electronics. Additionally, the program highlights advanced manufacturing techniques for precision EV components and includes hands-on training in prototyping and testing to ensure design readiness for production. By covering the full lifecycle from design to manufacturing, ESM equips engineers with the expertise to drive innovation in the growing EV industry.
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

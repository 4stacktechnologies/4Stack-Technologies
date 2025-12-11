// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function SkillSmartManufacturing() {
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
         Smart Manufacturing Skill Program
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
                ESM offers a comprehensive Skill Development Program in Smart Manufacturing, designed to equip participants with cutting-edge knowledge and hands-on experience. The program covers Industry 4.0 technologies like IoT, data analytics, automation, robotics, and AI, as well as advanced tools such as CNC, CAM, CAE, and Reverse Engineering. Participants also gain expertise in specialized areas like Class A Surface modeling, Knowledge-Based Engineering (KBE), and Sheetmetal Development. The curriculum includes emerging technologies like Augmented Reality (AR) and Additive Manufacturing, preparing learners for the future of manufacturing. With a focus on real-time data monitoring, predictive maintenance, and process optimization, this program equips professionals and students with the skills needed to excel in smart factories and digital transformation.
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

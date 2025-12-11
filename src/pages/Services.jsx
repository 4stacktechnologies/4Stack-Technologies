// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function Services() {
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
          Data Science Skill Program

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
                ELIXIR Strategic Management Pvt. Ltd. (ESM) offers comprehensive skill development programs tailored to meet the demands of various industries. Our programs focus on equipping participants with essential skills in areas such as Data Science, Avionics, Embedded Systems, and Composite Engineering. Each program combines theoretical knowledge with practical experience, enabling learners to apply concepts in real-world scenarios.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.7, color: "text.primary" }}
              >
                In Data Science, participants explore data analysis, machine learning, and natural language processing. The Avionics program emphasizes system design and integration, while the Embedded Systems track covers programming and hardware interfacing. In Composite Engineering, we focus on advanced materials and manufacturing techniques. By fostering technical skills and industry-relevant competencies, ESM prepares individuals for successful careers in rapidly evolving fields, ensuring they are job-ready and equipped to tackle modern challenges.


              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

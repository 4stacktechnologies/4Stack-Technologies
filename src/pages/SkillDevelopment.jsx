// src/pages/SkillDevelopment.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const TRACKS = [
  {
    title: "Smart Energy & Industry 4.0",
    text:
      "Hands-on programs on energy monitoring, dashboards and industrial IoT using real factory-style projects.",
  },
  {
    title: "Data Science & Analytics",
    text:
      "Tracks that cover data preparation, visualisation, ML models and storytelling for management decisions.",
  },
  {
    title: "IBC, Finance & Operations",
    text:
      "Domain-led learning on insolvency, turnaround strategy, financial modelling and operational excellence.",
  },
  {
    title: "Product & Innovation Labs",
    text:
      "Idea-to-prototype journeys where learners work with mentors to build and validate practical solutions.",
  },
];

export default function SkillDevelopmentPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {/* HERO TEXT */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Skill Development Programs
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 720 }}
        >
          Elixgen Systems Management Pvt. Ltd. designs industry-aligned Skill
          Development programs that bridge classroom learning with live
          projects. From Smart Energy and Industry 4.0 to Data Science and
          IBC-driven business strategy, each program is created to make learners
          job-ready and innovation-ready.
        </Typography>
      </Box>

      {/* TRACK CARDS */}
      <Grid container spacing={3}>
        {TRACKS.map((track) => (
          <Grid item xs={12} md={6} key={track.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(148,163,184,0.4)",
                boxShadow: "0 12px 32px rgba(15,23,42,0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {track.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {track.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// src/pages/SkillEV.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function SkillEV() {
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Electric Vehicle Programs
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Overview of EV skill development – covering both mechanical and
        electronics streams.
      </Typography>
    </Box>
  );
}

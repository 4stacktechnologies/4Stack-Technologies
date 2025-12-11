import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

export default function VisionMissionPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" className='pt-10' sx={{ fontWeight: 700 }}>
        Vision &amp; Mission
      </Typography>

      <Grid container sx={{display:"flex", justifyContent:"center", alignItems:"center"}} spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid rgba(148,163,184,0.4)',
              background:
                'radial-gradient(circle at top right, rgba(27,132,231,0.18), transparent 60%)'
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To become the most trusted energy intelligence partner for industries, enabling every
              plant in India and beyond to run smarter, safer, and more sustainably through
              data‑driven decisions.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid rgba(148,163,184,0.4)',
              background:
                'radial-gradient(circle at bottom left, rgba(124,58,237,0.16), transparent 60%)'
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our mission is to simplify industrial energy data, transform it into actionable
              insights, and deliver measurable financial and operational improvements for every
              stakeholder—from machine operators to CFOs and owners.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

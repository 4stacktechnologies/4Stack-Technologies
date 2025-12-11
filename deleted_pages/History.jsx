import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

const timeline = [
  {
    year: '2019–2020',
    title: 'Concept & Early Prototypes',
    text: 'Initial work on smart energy monitoring started with custom boards and experimental dashboards for select industrial units.'
  },
  {
    year: '2021–2022',
    title: 'Platform Foundation',
    text: 'ESM formalised its Smart Energy Monitoring platform, building a modular architecture that could scale from a single panel to an entire plant.'
  },
  {
    year: '2023–2024',
    title: 'Industry Deployments',
    text: 'Pilot and production deployments across multiple industries validated the platform with real‑world energy savings and improved power quality.'
  },
  {
    year: '2025+',
    title: 'AI‑Driven Energy Intelligence',
    text: 'The roadmap focuses on AI‑assisted energy decisions, predictive maintenance, and tighter integration with ERP and production systems.'
  }
];

export default function HistoryPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Our Journey
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
        ESM grew out of real pain points observed in factories where energy cost was rising but
        visibility was limited. Over time, the platform evolved from simple monitoring to a complete
        decision support system for energy and reliability.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          border: '1px solid rgba(148,163,184,0.4)'
        }}
      >
        <Stack spacing={3}>
          {timeline.map((item) => (
            <Box key={item.year} sx={{ display: 'flex', gap: 2 }}>
              <Box
                sx={{
                  minWidth: 96,
                  fontWeight: 700,
                  color: 'primary.main'
                }}
              >
                {item.year}
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

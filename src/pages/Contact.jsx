import React from 'react';
import { Box, Typography, Paper, Tabs, Tab, Grid, TextField, Button } from '@mui/material';

const locations = [
  {
    id: 'nagpur',
    label: 'Nagpur',
    address: '1502, Ved Solitaire, Cement Road, Shivaji Nagar, Nagpur-440010',
    note: 'Head office & innovation lab'
  },
  {
    id: 'pune',
    label: 'Pune',
    address: '425, Pride Purple Square, Aundh Ravet Road,Kalawadi Phata, Wakad, Pune-411057',
    note: 'Customer success & partner support'
  },
  {
    id: 'ahmedabad',
    label: 'Ahmedabad',
    address: '911-912-913, Span Trade Centre, Opp. Kocharab Ashram, Ashram Road, Paldi, Ahmedabad: 380 007',
    note: 'Industrial cluster outreach'
  },
  {
    id: 'california',
    label: 'California',
    address: '257 Oak Glen, Irvine, California-92618',
    note: 'Global collaboration & partnerships'
  }
];

export default function ContactPage() {
  const [tab, setTab] = React.useState('nagpur');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (hash && locations.some((l) => l.id === hash)) {
      setTab(hash);
    }
  }, []);

  const activeLocation = locations.find((l) => l.id === tab) ?? locations[0];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Whether you are exploring Smart Energy Monitoring for the first time or expanding an ongoing
        initiative, our team can help you design the right roadmap for your plant.
      </Typography>

      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {locations.map((loc) => (
          <Tab key={loc.id} value={loc.id} label={loc.label} />
        ))}
      </Tabs>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid rgba(148,163,184,0.4)'
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
              {activeLocation.label} Office
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {activeLocation.address}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {activeLocation.note}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Email: info@elixgensystems.com
              <br />
              Phone: +919423400945
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid rgba(148,163,184,0.4)'
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Write to us
            </Typography>
            <Box
              component="form"
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField size="small" label="Full Name" required />
              <TextField size="small" label="Company / Organization" />
              <TextField size="small" label="Email" type="email" required />
              <TextField size="small" label="Phone" />
              <TextField
                size="small"
                label="Message"
                multiline
                minRows={3}
                placeholder="Tell us briefly about your plant and energy challenges."
              />
              <Button variant="contained" type="submit">
                Submit enquiry
              </Button>
            </Box>
          </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
}

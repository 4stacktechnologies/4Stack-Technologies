import React from "react";
import { Box, Typography, Paper, Grid, TextField, Button } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Contact Us
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Have a project in mind? Whether it’s full‑stack development, app development,
        AI, automation, or branding — our team is here to help.
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT SIDE — Address */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
              Office Address
            </Typography>

            <Typography variant="body2" color="text.secondary">
              4 Stack Technologies  
              <br />
              <br />
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Email: 4stacktechnologies@gmail.com 
              <br />
              Phone: +91 9405420396
            </Typography>
          </Paper>
        </Grid>

        {/* RIGHT SIDE — Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Write to us
            </Typography>

            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField size="small" label="Full Name" required />
              <TextField size="small" label="Email" type="email" required />
              <TextField size="small" label="Phone" />
              <TextField
                size="small"
                label="Message"
                multiline
                minRows={3}
                placeholder="Tell us about your requirements..."
              />

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

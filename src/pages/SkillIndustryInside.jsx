// src/pages/SmartGensetMS.jsx   (pure text version – no images)
import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

export default function SkillIndustryInside() {
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
          ABOUT CENTER OF EXCELLENCE FOR PROJECT BASED LEARNING
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
                In response to the current gaps in application-based learning,
                ELIXIR Strategic Management (ESM) has initiated a unique concept
                designed to address these challenges through a program called
                COE. ESM proposes the establishment of an “Industry Inside the
                Institute” model, also referred to as the Center for Skill and
                Entrepreneurship Development (COE). This center will function
                like a consulting firm within the college or university,
                tackling real-world problems faced by industries.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.7, color: "text.primary" }}
              >
                ESM will source projects from various industries, and students,
                working alongside the ESM team, will gain hands-on experience by
                contributing to these projects. This approach will expose
                students to real-world applications, allowing them to understand
                and solve practical problems rather than relying solely on
                theoretical knowledge.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.7, color: "text.primary" }}
              >
                The main objective of COE is to develop end-to-end products,
                from conceptualization to delivery, all within the facility.
                Students interested in entrepreneurship will also have the
                opportunity to start their own businesses within COE, where they
                can receive guidance and mentorship from industry professionals.
                This practical, application-driven learning environment prepares
                students for both employment and entrepreneurial ventures by
                equipping them with the skills and experience they need to
                succeed.
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.7, color: "text.primary" }}
              >
                ESM has already successfully implemented this model in eight
                other colleges and universities, demonstrating its effectiveness
                in bridging the gap between academic learning and real-world
                applications. By establishing COE within institutions, ESM is
                not only fostering skill development but also empowering the next
                generation of engineers to become job creators rather than just
                job seekers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

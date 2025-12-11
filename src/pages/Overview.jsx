// src/pages/Overview.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const sections = [
  {
    id: "who-we-are",
    label: "About ESM",
    title: "Who We Are",
    image:
      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1600",
    paragraphs: [
      `Elixgen System Management Pvt. Ltd. (ESM) is a Nagpur-based technology company focused on IoT product development, digital engineering, and skill-driven innovation.`,
      `Through its Innovation Lab and Center of Excellence initiatives, ESM works with students, engineers, and industry partners to design and build real-world solutions using embedded systems, cloud platforms, data analytics, and automation technologies.`,
      `Our "Industry Inside Institute" approach brings classroom learning closer to live industry projects, helping young talent move from concepts to working prototypes and industry-ready products.`,
      `With a strong emphasis on "Make in India" and future-ready skills, ESM supports industries in their digital transformation journey while building an ecosystem where innovation, practical learning, and industrial problem-solving come together under one roof.`
    ]
  },
  {
    id: "what-we-do",
    label: "About ESM",
    title: "What We Do",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    paragraphs: [
      `At Elixgen System Management Pvt. Ltd. (ESM), we design and build IoT and digital solutions that connect machines, data, and decision-makers.`,
      `We develop end-to-end products—from embedded hardware and edge firmware to secure cloud platforms and dashboards—for smart energy management, genset monitoring, remote asset tracking, and industrial automation.`,
      `Through our Innovation Lab and Center of Excellence programs, we convert real industry problems into projects for students and engineers, guiding them from ideas to working prototypes and deployable solutions.`,
      `For industry partners, we act as a technology implementation and R&D partner—digitising operations, visualising performance, reducing losses, and preparing them for AI-ready, future-focused manufacturing and services.`
    ]
  },
  {
    id: "our-commitment",
    label: "About ESM",
    title: "Our Commitment",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600",
    paragraphs: [
      `At ESM, our commitment is to deliver solutions that actually work on the ground—reliable systems, clear insights, and measurable business impact.`,
      `We stay engaged beyond deployment, supporting teams during rollout, training users, and refining products based on real feedback from shop floors and field sites.`,
      `For students and young engineers, we commit to honest mentorship, hands-on exposure, and pathways from projects to internships, startups, and careers.`,
      `Whether for industry or academia, we aim to be a long-term partner—co-owning challenges, celebrating outcomes, and continuously raising the bar on innovation and quality.`
    ]
  },
  {
    id: "industry-inside-institute",
    label: "About ESM",
    title: "Our Unique Approach: Industry Inside Institute",
    image:
      "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1600",
    paragraphs: [
      `Our "Industry Inside Institute" model brings real industry problems, tools, and mentors directly into the campus environment.`,
      `Instead of simulated case studies, students and young engineers work on live projects from companies—using actual data, hardware, and workflows.`,
      `Industry experts and ESM engineers co-mentor these teams, aligning project outcomes with both academic requirements and real business needs.`,
      `This approach builds confidence, practical skills, and a strong portfolio for students, while giving industry partners faster prototypes, fresh ideas, and a direct pipeline of job-ready talent.`
    ]
  }
];

export default function Overview() {
  return (
    <Box
      sx={{
        bgcolor: "#f4f7fb",
        // Global keyframes for this page
        "@keyframes heroZoom": {
          "0%": { transform: "scale(1.03)" },
          "100%": { transform: "scale(1.08)" }
        },
        "@keyframes fadeUp": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "@keyframes fadeUpSoft": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      }}
    >
      {/* ================= HERO BAND (FULL WIDTH 100vw) ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          minHeight: { xs: 260, md: 360 },
          overflow: "hidden",
          mb: { xs: 5, md: 7 }
        }}
      >
        {/* background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "heroZoom 18s ease-out forwards"
          }}
        />
        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.1) 100%)"
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding:0,
            py: { xs: 4, md: 7 },
            px: { xs: 2, sm: 4, md: 6 }
          }}
        >
          <Box
            sx={{
              maxWidth: 900,
              animation: "fadeUpSoft 700ms ease-out forwards",
              opacity: 0
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "rgba(226,232,240,0.9)",
                letterSpacing: 4,
                textTransform: "uppercase"
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 800,
                mt: 1,
                mb: 1.5,
                letterSpacing: 0.3
              }}
            >
              A Systems Blend of Insolvency, Education & Digital Innovation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(241,245,249,0.95)",
                maxWidth: 720,
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.8
              }}
            >
              Elixgen Systems Management (ESM) brings together distressed-asset
              expertise, industry-ready skill development and cutting-edge
              digital engineering to help organisations transform, recover and
              grow.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ================= CONTENT SECTIONS ================= */}
      <Container
        maxWidth="xl"
        sx={{
          pb: { xs: 6, md: 9 },
          px: { xs: 2, sm: 4, md: 6 } // reduced side padding vs default Container
        }}
      >
        {sections.map((sec, index) => (
          <Grid
            key={sec.id}
            container
            spacing={4}
            alignItems="stretch"
            sx={{
              mb: index === sections.length - 1 ? 0 : { xs: 6, md: 8 },
              animation: "fadeUp 700ms ease-out forwards",
              opacity: 0,
              animationDelay: `${index * 120}ms`
            }}
            direction={index % 2 === 1 ? "row-reverse" : "row"}
          >
            {/* IMAGE SIDE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: { xs: 220, md: 320 },
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(15,23,42,0.35)",
                  position: "relative"
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${sec.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.03)",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.06)"
                    }
                  }}
                />
              </Box>
            </Grid>

            {/* TEXT SIDE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    letterSpacing: 2,
                    textTransform: "uppercase"
                  }}
                >
                  {sec.label}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  {sec.title}
                </Typography>

                {sec.paragraphs.map((p, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: i === sec.paragraphs.length - 1 ? 0 : 1.5,
                      lineHeight: 1.7,
                      fontSize: { xs: 14.5, md: 15.5 }
                    }}
                  >
                    {p}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

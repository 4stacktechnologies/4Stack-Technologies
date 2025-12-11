// src/pages/WhyEsm.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  LinearProgress,
  Stack,
  Paper,
  IconButton
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// -------------------- DATA --------------------
const delightMetrics = [
  {
    label: "SEMS-AI",
    percent: 95,
    caption:
      "95% of our clients express strong satisfaction with our SEMS-AI & IBC advisory services."
  },
  {
    label: "Skill Development",
    percent: 90,
    caption:
      "90% of our customers are delighted with outcomes from our Skill Development programmes."
  },
  {
    label: "SGMS",
    percent: 76,
    caption:
      "76% of our customers rate our SGMS support as highly impactful."
  },
  {
    label: "Product Development",
    percent: 83,
    caption:
      "83% satisfaction for our Product Development services across digital, IoT and smart manufacturing."
  }
];

const skillProgramBars = [
  { label: "SEMS-AI", value: 95 },
  { label: "Skill Development", value: 90 },
  { label: "SGMS", value: 76 },
  { label: "Product Development", value: 83 }
];

const counters = [
  { value: "2000+", label: "Stressed Accounts" },
  { value: "7", label: "SEMS-AI Mandates" },
  { value: "9", label: "Centres of Excellence" },
  { value: "59,000+", label: "Students" },
  { value: "140+", label: "Companies" },
  { value: "24+", label: "Business Years (combined leadership experience)" }
];

const clients = [
  {
    name: "K.S.R College of Engineering",
    segment: "Industry Inside Institute • Smart Manufacturing COE"
  },
  {
    name: "Symbiosis Institute of Technology",
    segment: "Skill Development • Digital & Industry 4.0 programmes"
  },
  {
    name: "Jayaspal Neco Industries Limited",
    segment: "Corporate Advisory • Digital & Smart Manufacturing initiatives"
  },
  {
    name: "Multiple PSU & Private Banks",
    segment: "Stressed Asset Management • SEMS-AI & SARFAESI assignments"
  }
];

// -------------------- SMALL COMPONENTS --------------------
function SkillBar({ label, value }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 0.75
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontWeight: 500 }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: 600 }}
        >
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 6,
          borderRadius: 999,
          backgroundColor: "#e5e7eb",
          "& .MuiLinearProgress-bar": {
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #0ea5e9 0%, #2563eb 40%, #7c3aed 100%)"
          }
        }}
      />
    </Box>
  );
}

// -------------------- PAGE --------------------
export default function WhyEsm() {
  const [clientIndex, setClientIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setClientIndex((prev) => (prev + 1) % clients.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const handlePrevClient = () => {
    setClientIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const handleNextClient = () => {
    setClientIndex((prev) => (prev + 1) % clients.length);
  };

  const currentClient = clients[clientIndex];

  return (
    <Box
      sx={{
        bgcolor: "#f3f4f6",
        minHeight: "100vh",
        // -------- animations --------
        "@keyframes cardFloat": {
          "0%": { transform: "translateY(0px)", boxShadow: "0 18px 40px rgba(15,23,42,0.12)" },
          "50%": { transform: "translateY(-4px)", boxShadow: "0 24px 55px rgba(15,23,42,0.20)" },
          "100%": { transform: "translateY(0px)", boxShadow: "0 18px 40px rgba(15,23,42,0.12)" }
        },
        "@keyframes clientSlideIn": {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      }}
    >
      {/* ================= HERO: WHY ESM + CUSTOMER DELIGHT ================= */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 420, md: 500 },
          overflow: "hidden"
        }}
      >
        {/* subtle background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top, #e0f2fe 0, #eff6ff 40%, #f3f4f6 100%)"
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 5, md: 7 }
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#2563eb"
            }}
          >
            Why ESM
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              mt: 1,
              mb: 0.5
            }}
          >
            Customer Delight Across Every Vertical
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              color: "text.secondary",
              mb: { xs: 4, md: 6 }
            }}
          >
            ESM combines distressed-asset expertise, industry-ready skill
            development and digital product innovation. Our track record shows
            consistently high satisfaction from banks, institutions and
            enterprises.
          </Typography>

          {/* Delight metrics (4 circles) */}
          <Grid container spacing={4}>
            {delightMetrics.map((m) => (
              <Grid item xs={12} sm={6} md={3} key={m.label}>
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                  <Box
                    sx={{
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      position: "relative",
                      border: "4px solid #bfdbfe",
                      boxShadow: "0 0 0 6px rgba(148,163,184,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "radial-gradient(circle at 30% 0, #eff6ff, #dbeafe)"
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 800, color: "#1e293b" }}
                    >
                      {m.percent}%
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: 0.6
                    }}
                  >
                    {m.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      maxWidth: 260,
                      lineHeight: 1.6
                    }}
                  >
                    {m.caption}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= SKILL PROGRAM SECTION ================= */}
      <Box
        sx={{
          py: { xs: 5, md: 7 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#6b7280"
                }}
              >
                Industry Inside Institute
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#111827",
                  mt: 1,
                  mb: 2
                }}
              >
                ESM Skill Development Program
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  maxWidth: 520
                }}
              >
                Our “Industry Inside Institute” model tracks satisfaction across
                key service lines. The programme consistently delivers strong
                feedback from learners, faculty and industry partners.
              </Typography>

              <Box sx={{ maxWidth: 540 }}>
                {skillProgramBars.map((b) => (
                  <SkillBar key={b.label} label={b.label} value={b.value} />
                ))}
              </Box>
            </Grid>

            {/* ====== UPDATED: Why our programs work card ====== */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3, // reduced curve
                  p: 3,
                  height: "20rem",
                  bgcolor: "white",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 18px 40px rgba(15,23,42,0.14)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  animation: "cardFloat 14s ease-in-out infinite",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 0 0, rgba(59,130,246,0.08), transparent 55%)",
                    pointerEvents: "none"
                  },
                  "&:hover": {
                    boxShadow: "0 24px 55px rgba(15,23,42,0.22)",
                    transform: "translateY(-2px)",
                    transition: "all 0.25s ease"
                  }
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    mb: 1.5,
                    px: 1.4,
                    py: 0.5,
                    borderRadius: 999,
                    backgroundColor: "rgba(37,99,235,0.06)"
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#22c55e",
                      mr: 1
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      color: "#1d4ed8",
                      fontWeight: 600
                    }}
                  >
                    Why our programs work
                  </Typography>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#111827",
                    mb: 1.5
                  }}
                >
                  What makes ESM programmes different
                </Typography>

                <Stack spacing={1.4}>
                  {[
                    "Live industry projects with real data, not just classroom case studies.",
                    "Hands-on work with IoT, analytics and smart manufacturing stacks.",
                    "Co-mentoring by industry experts, faculty and ESM engineers.",
                    "Outcomes mapped to employability, innovation and measurable ROI."
                  ].map((item, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          mt: "3px",
                          fontSize: 18,
                          color: "#2563eb"
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= COUNTERS ================= */}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, #eff6ff 0%, #dbeafe 40%, #e0f2fe 100%)",
          py: { xs: 4, md: 5 },
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {counters.map((c) => (
              <Grid
                key={c.label}
                item
                xs={12}
                sm={4}
                md={2}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: "#111827", mb: 0.5 }}
                >
                  {c.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#4b5563"
                  }}
                >
                  {c.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= CLIENTS SLIDER ================= */}
      <Box
        sx={{
          py: { xs: 5, md: 7 }
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "#111827",
              mb: 1
            }}
          >
            Clients
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mb: 3
            }}
          >
            Trusted by leading institutions, universities and industrial groups.
          </Typography>

          <Box sx={{ position: "relative", maxWidth: 760, mx: "auto" }}>
            {/* arrows */}
            <IconButton
              onClick={handlePrevClient}
              sx={{
                position: "absolute",
                top: "50%",
                left: -12,
                transform: "translateY(-50%)",
                bgcolor: "white",
                color: "#111827",
                boxShadow: "0 12px 30px rgba(148,163,184,0.65)",
                "&:hover": { bgcolor: "#f3f4f6" },
                zIndex: 2,
                borderRadius: "999px"
              }}
              size="small"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNextClient}
              sx={{
                position: "absolute",
                top: "50%",
                right: -12,
                transform: "translateY(-50%)",
                bgcolor: "white",
                color: "#111827",
                boxShadow: "0 12px 30px rgba(148,163,184,0.65)",
                "&:hover": { bgcolor: "#f3f4f6" },
                zIndex: 2,
                borderRadius: "999px"
              }}
              size="small"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* UPDATED: animated client card */}
            <Paper
              key={clientIndex}
              elevation={0}
              sx={{
                borderRadius: 3, // reduced radius
                p: { xs: 3, md: 4 },
                textAlign: "center",
                bgcolor: "white",
                border: "1px solid #e5e7eb",
                minHeight: 160,
                boxShadow: "0 18px 40px rgba(15,23,42,0.14)",
                animation: "clientSlideIn 450ms ease-out"
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#111827",
                  mb: 1
                }}
              >
                {currentClient.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {currentClient.segment}
              </Typography>
            </Paper>
          </Box>

          {/* dots */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            {clients.map((_, i) => (
              <Box
                key={i}
                onClick={() => setClientIndex(i)}
                sx={{
                  width: i === clientIndex ? 20 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor: i === clientIndex ? "#2563eb" : "#cbd5f5",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

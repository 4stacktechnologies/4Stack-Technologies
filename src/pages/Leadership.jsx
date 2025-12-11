// src/pages/Leadership.jsx
import React from "react";
import { Box, Grid, Paper, Avatar, Typography, Chip } from "@mui/material";

// Hero background image (online)
const HERO_ILLUSTRATION =
  "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=1600";

// ---- LOCAL LEADER IMAGES ----
import AmitNaiduImg from "../assets/Amit-Naidu.jpg";
import RahulMImg from "../assets/Rahul-m.jpg";
import RajatImg from "../assets/Rajat.jpg";
import SuparnNaiduImg from "../assets/Suparn-Naidu.jpg";
import VijayKumarImg from "../assets/Vijay-Kumar.jpg";

const leaders = [
  {
    name: "Vijay Kumar",
    image: VijayKumarImg
  },
  {
    name: "Rajat Naidu",
    image: RajatImg
  },
  {
    name: "Rahul Naidu",
    image: RahulMImg
  },
  {
    name: "Amit Naidu",
    image: AmitNaiduImg
  },
  {
    name: "Suparn Naidu",
    image: SuparnNaiduImg
  }
];

export default function LeadershipPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          minHeight: 260,
          mb: 2,
          boxShadow: "0 25px 60px rgba(15,23,42,0.25)"
        }}
      >
        {/* background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_ILLUSTRATION})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,23,42,0.80) 0%, rgba(15,23,42,0.35) 55%, rgba(15,23,42,0.05) 100%)"
          }}
        />

        {/* content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
            maxWidth: { xs: "100%", md: "55%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <Chip
            label="Leadership"
            sx={{
              alignSelf: "flex-start",
              mb: 2,
              bgcolor: "rgba(15,23,42,0.9)",
              color: "white",
              fontWeight: 600,
              letterSpacing: 1
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 1,
              letterSpacing: 0.4
            }}
          >
            Elixgen Leadership Team
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(241,245,249,0.95)", maxWidth: 520 }}
          >
            ESM is led by a multidisciplinary leadership team across insolvency,
            banking, digital engineering and skill development — combining decades
            of experience in stressed asset management, industry–academia
            collaboration and product innovation.
          </Typography>
        </Box>
      </Box>

      {/* LEADERS GRID */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 3, textAlign: "left" }}
        >
          Core Leadership
        </Typography>

        <Grid container spacing={3}>
          {leaders.map((leader) => (
            <Grid item xs={12} sm={6} md={4} key={leader.name}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(148,163,184,0.35)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 26px 60px rgba(15,23,42,0.18)"
                  }
                }}
              >
                <Avatar
                  src={leader.image}
                  alt={leader.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    boxShadow: "0 14px 30px rgba(15,23,42,0.35)"
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700 }}
                >
                  {leader.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

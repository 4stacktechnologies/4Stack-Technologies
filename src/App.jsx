// src/App.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  TextField
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NorthIcon from "@mui/icons-material/North";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/Home";
import OverviewPage from "./pages/Overview";
import WhyEsmPage from "./pages/WhyEsm";
import LeadershipPage from "./pages/Leadership";
import VisionMissionPage from "./pages/VisionMission";
import ContactPage from "./pages/ContactPage";

import SkillDevelopmentPage from "./pages/SkillDevelopment";
import SmartEnergyPage from "./pages/SmartEnergyMSAI";
import SmartGensetPage from "./pages/SmartGensetMS";

import IndustryInsidePage from "./pages/SkillIndustryInside";
import SkillIoTPage from "./pages/SkillIoT";
import SkillDataSciencePage from "./pages/SkillDataScience";
import SkillSmartMfgPage from "./pages/SkillSmartManufacturing";
import SkillEVPage from "./pages/SkillEV";
import SkillEVMechanicalPage from "./pages/SkillEVMechanical";
import SkillEVElectronicPage from "./pages/SkillEVElectronic";
import About from "./pages/About";
import Services from "./pages/Services";
import Galary from "./pages/Galary";

export default function App() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      className="min-h-screen flex flex-col bg-slate-50"
      sx={{ overflowX: "hidden" }}
    >
      <Navbar />

      {/* MAIN CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          pt: 1,
          px: { xs: 0, md: 2 },   // ✅ no padding on mobile
          pb: { xs: 3, md: 4 },
          overflow: "visible"    // ✅ allow slide movement
        }}
      >

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Skill Development */}
          <Route path="/services" element={<Services />} />

          {/* Products */}
          <Route
            path="/galary"
            element={<Galary />}
          />


        </Routes>
      </Container>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          mt: 4,
          pt: 6,
          pb: 3,
          bgcolor: "#111827",
          color: "rgba(249,250,251,0.9)",
          overflowX: "hidden"
        }}
      >
        <Container maxWidth="lg" sx={{ overflowX: "hidden" }}>
          <Grid container spacing={6}>
            {/* Contact Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="subtitle1"
                sx={{ letterSpacing: 1.5, fontWeight: 600, mb: 1 }}
              >
                CONTACT US
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase" }}
              >
                Elixgen Systems Management Pvt. Ltd.
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                1502, 15th Floor, Ved Solitaire, Above Starbucks
                <br />
                Cement Road, Dharmapeth Extension
                <br />
                Shivaji Nagar, Nagpur, Maharashtra, 440010
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="subtitle1"
                sx={{ letterSpacing: 1.5, fontWeight: 600, mb: 1 }}
              >
                QUICK LINKS
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <a
                  href="/"
                  style={{
                    color: "rgba(249,250,251,0.9)",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  Home
                </a>

                <a
                  href="/about"
                  style={{
                    color: "rgba(249,250,251,0.9)",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  About
                </a>

                <a
                  href="/services"
                  style={{
                    color: "rgba(249,250,251,0.9)",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  Services
                </a>

                <a
                  href="/contact"
                  style={{
                    color: "rgba(249,250,251,0.9)",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  Contact
                </a>
              </Box>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="subtitle1"
                sx={{ letterSpacing: 1.5, fontWeight: 600, mb: 1 }}
              >
                FOLLOW US
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton
                  component="a"
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white" }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white" }}
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://linkedin.com/company/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>


          {/* Bottom Strip */}
          <Box
            sx={{
              mt: 5,
              borderTop: "1px solid rgba(148,163,184,0.4)",
              pt: 2
            }}
          >
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                color: "rgba(148,163,184,0.9)"
              }}
            >
              © {new Date().getFullYear()} Elixgen Systems Management Pvt. Ltd.
              All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>


      {/* SCROLL TO TOP */}
      <IconButton
        onClick={handleScrollTop}
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "1.5px solid rgba(249,250,251,0.8)",
          color: "rgba(249,250,251,0.9)",
          bgcolor: "transparent",
          "&:hover": { bgcolor: "rgba(15,23,42,0.8)" }
        }}
      >
        <NorthIcon />
      </IconButton>
    </Box>
  );
}

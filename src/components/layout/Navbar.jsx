// src/components/layout/Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

// ✅ use the actual logo file that exists
import Logo from "../../assets/logo.jpeg";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [aboutAnchor, setAboutAnchor] = React.useState(null);
  const [productsAnchor, setProductsAnchor] = React.useState(null);
  const [skillAnchor, setSkillAnchor] = React.useState(null);
  const [evAnchor, setEvAnchor] = React.useState(null);
  const [contactAnchor, setContactAnchor] = React.useState(null);
  const [mobileAnchor, setMobileAnchor] = React.useState(null);

  const navigate = useNavigate();

  const openAbout = Boolean(aboutAnchor);
  const openProducts = Boolean(productsAnchor);
  const openSkill = Boolean(skillAnchor);
  const openEv = Boolean(evAnchor);
  const openContact = Boolean(contactAnchor);
  const openMobile = Boolean(mobileAnchor);

  const handleAboutClick = (event) => setAboutAnchor(event.currentTarget);
  const handleProductsClick = (event) => setProductsAnchor(event.currentTarget);
  const handleSkillClick = (event) => setSkillAnchor(event.currentTarget);
  const handleEvClick = (event) => setEvAnchor(event.currentTarget);
  const handleContactClick = (event) => setContactAnchor(event.currentTarget);
  const handleMobileClick = (event) => setMobileAnchor(event.currentTarget);

  const closeAllMenus = () => {
    setAboutAnchor(null);
    setProductsAnchor(null);
    setSkillAnchor(null);
    setEvAnchor(null);
    setContactAnchor(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeAllMenus();
    setMobileAnchor(null);
  };

  const handleContactLocation = (loc) => {
    navigate(`/contact#${loc.toLowerCase()}`);
    closeAllMenus();
    setMobileAnchor(null);
  };

  return (
    <AppBar
      // position="static"
      elevation={0}
      color="inherit"
      className="border-b  border-slate-200 bg-white/80 fixed backdrop-blur"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        {/* LEFT: logo */}
        <Box
            sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          >
            <Box
              component="img"
              src={Logo}
              alt="ELIXGEN Systems Management Pvt. Ltd."
              sx={{ height: 40, width: "auto", objectFit: "contain" }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, letterSpacing: 0.4, lineHeight: 1 }}
              >
               4 STACK TECHNO
              </Typography>
            </Box>
          </Box>

        {/* DESKTOP MENU */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          {/* Home */}
          <Button
            color="primary"
            variant="text"
            onClick={() => handleNavigate("/")}
            sx={{ fontWeight: 500 }}
          >
            Home
          </Button>

          {/* About Us */}
          <Button
            color="primary"
            variant="text"
            sx={{ fontWeight: 500 }}
            onClick={() => handleNavigate("/about")}
          >
            About Us
          </Button>
          {/* Products */}
          <Button
            color="primary"
            variant="text"
            sx={{ fontWeight: 500 }}
            onClick={() => handleNavigate("/galary")}
          >
            Galary
          </Button>

          {/* Skill Development */}
          <Button
            color="primary"
            variant="text"
            sx={{ fontWeight: 500 }}
            onClick={() => handleNavigate("/services")}
          >
            Services
          </Button>


          {/* Contact Us */}
          <Button
            color="primary"
            variant="text"
            sx={{ fontWeight: 500 }}
            onClick={() => handleContactLocation("Nagpur")}
          >
            Contact Us
          </Button>
        </Box>

        {/* MOBILE MENU */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMobileClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileAnchor}
            open={openMobile}
            onClose={() => setMobileAnchor(null)}
            MenuListProps={{ dense: true }}
          >
            <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>

            {/* About Us mobile */}
            <MenuItem onClick={() => handleNavigate("/about")} >About Us</MenuItem>
            

            {/* Products mobile */}
            <MenuItem onClick={() => handleNavigate("/galary")} >Products</MenuItem>
            <MenuItem
              sx={{ pl: 4 }}
              onClick={() => handleNavigate("/products/smart-energy-ms-ai")}
            >
              Smart Energy MS-AI
            </MenuItem>
            <MenuItem
              sx={{ pl: 4 }}
              onClick={() => handleNavigate("/products/smart-genset-ms")}
            >
              Smart Genset MS
            </MenuItem>

            {/* Skill Dev mobile */}
            <MenuItem onClick={() =>
                handleNavigate("/services")
              }>Skill Development</MenuItem>
            

            {/* Contact mobile */}
            <MenuItem onClick={() => handleContactLocation("contact#nagpur")} >Contact Us</MenuItem>
            
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

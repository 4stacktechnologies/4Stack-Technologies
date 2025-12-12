// src/pages/Home.jsx
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ---- local images for intro carousel (right side of ESM section) ----
import Intro1 from "../assets/1A-1920x1195.jpg";
import Intro2 from "../assets/2A-1920x1195.jpg";
import Intro3 from "../assets/4A-1920x1194.jpg";

// ================= TOP HERO: 6 SLIDES (removed SEMS-AI, IBC, SARFAESI, Systems Management) =================
const heroSlides = [
  {
    title: "Pedopt",
    tag: "Web Application", // category used here
    description:
      "Pedopt is a pet donation and adoption website that connects pet owners, shelters, and adopters. Users can donate pets, browse adoptable pets, schedule visits, and complete the adoption process seamlessly.",
    image: "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg"
  },
  {
    title: "Hostel Maintenance Website",
    tag: "Web Portal", // category used here
    description:
      "A website designed to manage hostel maintenance requests, track issues, assign workers, and maintain transparency in the hostel management system.",
    image: "https://img.youtube.com/vi/PatfriYA4Tg/maxresdefault.jpg"
  },
  {
    title: "Solar Customer Handling",
    tag: "Management System", // category used here
    description:
      "A system for managing solar customer inquiries, installation tracking, AMC handling, and customer support.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },
  {
    title: "Kindergarten School Website",
    tag: "Website Development", // category used here
    description:
      "A vibrant kindergarten website featuring admissions info, gallery, curriculum details, and parent communication tools.",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f"
  }
];


// ================= INTRO MINI CAROUSEL (RIGHT SIDE, 3 SLIDES) =================
const introSlides = [{ image: Intro1 }, { image: Intro2 }, { image: Intro3 }];

// ================= OTHER DATA (SERVICES, PROJECTS) =================
const serviceCards = [
  {
    title: "Full-Stack Web Development",
    text: "End-to-end web development services using modern front-end and back-end technologies to build fast, responsive, and scalable websites.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Mobile App Development",
    text: "Cross-platform and native app development with clean UI, smooth performance, and secure architecture tailored to your business needs.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Artificial Intelligence (AI)",
    text: "Custom AI solutions including prediction models, automation tools, data processing pipelines, and intelligent decision systems.",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Automation Solutions",
    text: "Smart automation systems to streamline processes, reduce manual effort, and increase efficiency across your business operations.",
    image: "https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Logo & Branding Design",
    text: "Professional logo design and brand identity development to help your business stand out with a strong visual presence.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Data Entry & Digital Documentation",
    text: "Reliable and accurate data entry services to help you manage business information efficiently and securely.",
    image: "https://images.pexels.com/photos/2058131/pexels-photo-2058131.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
];


// ================= PROJECTS (6) =================
const projects = [
  {
    title: "Pedopt",
    category: "Web Application",
    tag: "Completed",
    description:
      "Pedopt is a pet donation and adoption website that connects pet owners, shelters, and adopters. Users can donate pets, browse adoptable pets, schedule visits, and complete the adoption process seamlessly.",
    image: "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg"
  },
  {
    title: "Hostel Maintenance Website",
    category: "Web Portal",
    tag: "Ongoing",
    description:
      "A website designed to manage hostel maintenance requests, track issues, assign workers, and maintain transparency in the hostel management system.",
    image: "https://img.youtube.com/vi/PatfriYA4Tg/maxresdefault.jpg"
  },
  {
    title: "Solar Customer Handling",
    category: "Management System",
    tag: "In Use",
    description:
      "A system for managing solar customer inquiries, installation tracking, AMC handling, and customer support.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231" // Works 100%
  },
  {
    title: "Kindergarten School Website",
    category: "Website Development",
    tag: "Completed",
    description:
      "A vibrant kindergarten website featuring admissions info, gallery, curriculum details, and parent communication tools.",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f" // Works 100%
  }
];



export default function HomePage() {
  // HERO + intro mini carousel state
  const [slide, setSlide] = React.useState(0);
  const [introSlide, setIntroSlide] = React.useState(0);

  // projects carousel: index of FIRST visible card
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [projDirection, setProjDirection] = React.useState(1); // 1 = next, -1 = prev
  const VISIBLE_COUNT = 4;

  const visibleProjects = React.useMemo(
    () =>
      Array.from({ length: VISIBLE_COUNT }).map((_, i) => {
        const idx = (projectIndex + i + projects.length) % projects.length;
        return projects[idx];
      }),
    [projectIndex]
  );

  const goNextProjects = () => {
    setProjDirection(1);
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const goPrevProjects = () => {
    setProjDirection(-1);
    setProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToProjectIndex = (idx) => {
    if (idx === projectIndex) return;
    setProjDirection(idx > projectIndex ? 1 : -1);
    setProjectIndex(idx);
  };

  // HERO: auto-slide every 3s
  React.useEffect(() => {
    const id = setInterval(
      () => setSlide((prev) => (prev + 1) % heroSlides.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  // INTRO MINI CAROUSEL: auto-slide every 4s
  React.useEffect(() => {
    const id = setInterval(
      () => setIntroSlide((prev) => (prev + 1) % introSlides.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  // PROJECTS AUTO-SLIDE: every 4.5s
  React.useEffect(() => {
    const id = setInterval(() => {
      setProjDirection(1);
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const handlePrevHero = () => {
    setSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextHero = () => {
    setSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevIntro = () => {
    setIntroSlide((prev) =>
      prev === 0 ? introSlides.length - 1 : prev - 1
    );
  };

  const handleNextIntro = () => {
    setIntroSlide((prev) => (prev + 1) % introSlides.length);
  };

  const currentHero = heroSlides[slide];
  const currentIntro = introSlides[introSlide];

  return (
    <Box sx={{ bgcolor: "#f3f4f6" }}>
      {/* ================= TOP FULL-WIDTH HERO ================= */}
      <Box
        sx={{
          position: "relative",
          left: "50%",
          right: "50%",
          maxWidth: "100vw",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "70vh", md: "80vh" },
            overflow: "hidden",
          }}
        >
          {/* Animated hero layer */}
          <Box
            key={slide}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: "heroFade 800ms ease-in-out",
              "@keyframes heroFade": {
                "0%": {
                  opacity: 0,
                  transform: "scale(1.03) translateY(8px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "scale(1) translateY(0)",
                },
              },
            }}
          >
            {/* background image */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                maxWidth: "100vw",
                backgroundImage: `url(${currentHero.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
            {/* overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 40%, rgba(15,23,42,0.25) 100%)",
              }}
            />
            {/* content */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                px: { xs: 3, md: 8 },
                py: { xs: 4, md: 6 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: { xs: "100%", md: "60%" },
              }}
            >
              {/* tag pill */}
              <Box
                sx={{
                  mb: 3,
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 999,
                  bgcolor: "rgba(15,23,42,0.7)",
                  border: "1px solid rgba(148,163,184,0.7)",
                  px: 3,
                  py: 0.6,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#E5E7EB",
                  }}
                >
                  {currentHero.tag}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "white",
                  mb: 1,
                }}
              >
                {currentHero.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(241,245,249,0.95)",
                  maxWidth: 540,
                  mb: 3,
                }}
              >
                {currentHero.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" color="primary">
                  Read More
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "rgba(148,163,184,0.7)",
                    "&:hover": { borderColor: "white" },
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          </Box>

          {/* HERO arrows */}
          <IconButton
            onClick={handlePrevHero}
            sx={{
              position: "absolute",
              top: "50%",
              left: 16,
              transform: "translateY(-50%)",
              bgcolor: "rgba(15,23,42,0.75)",
              color: "white",
              zIndex: 2,
              "&:hover": { bgcolor: "rgba(15,23,42,0.95)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleNextHero}
            sx={{
              position: "absolute",
              top: "50%",
              right: 16,
              transform: "translateY(-50%)",
              bgcolor: "rgba(15,23,42,0.75)",
              color: "white",
              zIndex: 2,
              "&:hover": { bgcolor: "rgba(15,23,42,0.95)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          {/* HERO clickable dots */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {heroSlides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setSlide(i)}
                sx={{
                  width: i === slide ? 18 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor:
                    i === slide ? "white" : "rgba(148,163,184,0.7)",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          pb: { xs: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* ================= ESM INTRO SECTION ================= */}
        <Grid container spacing={4} alignItems="stretch">
          {/* LEFT TEXT */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              4ST
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Welcome To 4 STACK TECHNOLOGIES .
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              4 Stack Technologies is a modern and innovative tech firm focused on building fast, reliable, and scalable digital solutions. We specialize in web development, mobile app development, UI/UX design, and full‑stack software engineering.

              Our goal is simple: to help individuals and businesses bring their ideas to life using clean code, smart design, and the latest technologies.

              We believe in delivering high‑quality products, transparent communication, and long‑term support so our clients can grow with confidence. Whether you’re a startup or an established business, we provide solutions that fit your needs.
            </Typography>
          </Grid>

          {/* RIGHT HALF: MINI CAROUSEL */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(15,23,42,0.15)",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 260,
                  overflow: "hidden",
                }}
              >
                {/* slide image with fade */}
                <Box
                  key={introSlide}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${currentIntro.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    animation: "introFade 700ms ease-in-out",
                    "@keyframes introFade": {
                      "0%": { opacity: 0, transform: "scale(1.03)" },
                      "100%": { opacity: 1, transform: "scale(1)" },
                    },
                  }}
                />

                {/* subtle gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.2) 100%)",
                  }}
                />

                {/* invisible click zones */}
                <Box
                  onClick={handlePrevIntro}
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "30%",
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                />
                <Box
                  onClick={handleNextIntro}
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: "30%",
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* ================= SERVICES GRID ================= */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
            Services
          </Typography>

          <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
            {serviceCards.map((card) => (
              <Grid item xs={12} md={4} key={card.title}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    minHeight: { xs: 220, md: 260 },
                    cursor: "pointer",
                    boxShadow: "0 20px 40px rgba(15,23,42,0.35)",
                    transform: "translateY(0) scale(1)",
                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 30px 70px rgba(15,23,42,0.55)",
                    },
                    "&:hover .overlay": {
                      opacity: 0.95,
                    },
                    "&:hover .bgImg": {
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  {/* background image */}
                  <Box
                    className="bgImg"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.6s ease",
                      transform: "scale(1.02)",
                    }}
                  />

                  {/* dark gradient overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.92) 100%)",
                      opacity: 0.88,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* content */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      p: { xs: 2.4, md: 2.8 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mb: 1,
                        fontSize: { xs: 18, md: 20 },
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(241,245,249,0.92)",
                        mb: 2,
                        fontSize: { xs: 14, md: 15 },
                      }}
                    >
                      {card.text}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#22d3ee",
                        fontWeight: 600,
                        fontSize: 14,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        letterSpacing: 0.4,
                      }}
                    >
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= PROJECTS PORTFOLIO (CAROUSEL) ================= */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, textAlign: "center", mb: 1 }}
          >
            Our Projects Portfolio
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 3 }}
          >
            Showcasing Excellence in Execution
          </Typography>

          <Box sx={{ position: "relative", px: { xs: 0, md: 3 } }}>
            {/* LEFT ARROW */}
            <IconButton
              onClick={goPrevProjects}
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: -4, md: -10 },
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 10px 30px rgba(15,23,42,0.25)",
                "&:hover": { bgcolor: "grey.100" },
                zIndex: 2,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* RIGHT ARROW */}
            <IconButton
              onClick={goNextProjects}
              sx={{
                position: "absolute",
                top: "50%",
                right: { xs: -4, md: -10 },
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 10px 30px rgba(15,23,42,0.25)",
                "&:hover": { bgcolor: "grey.100" },
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* SLIDING GRID */}
            <Box
              key={projectIndex}
              sx={{
                pt: 1,
                pb: 2,
                animation:
                  projDirection === 1
                    ? "portfolioSlideLeft 500ms ease"
                    : "portfolioSlideRight 500ms ease",
                overflow: "visible", // allow hover lift
                "@keyframes portfolioSlideLeft": {
                  "0%": { opacity: 0, transform: "translateX(40px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" },
                },
                "@keyframes portfolioSlideRight": {
                  "0%": { opacity: 0, transform: "translateX(-40px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              <Grid container spacing={3}>
                {visibleProjects.map((p) => (
                  <Grid item xs={12} md={3} key={p.title}>
                    <Paper
                      elevation={0}
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        height: "100%",
                        border: "1px solid rgba(148,163,184,0.4)",
                        display: "flex",
                        flexDirection: "column",
                        transition:
                          "transform 0.3s ease, box-shadow 0.3s ease",
                        boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
                        "&:hover": {
                          transform: "translateY(-10px)",
                          boxShadow: "0 26px 60px rgba(15,23,42,0.28)",
                        },
                      }}
                    >
                      {/* TOP IMAGE */}
                      <Box
                        sx={{
                          position: "relative",
                          height: 190,
                          backgroundImage: `url(${p.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >

                      </Box>

                      {/* CONTENT */}
                      <Box sx={{ p: 2.3, flex: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            mb: 0.5,
                            fontSize: 17,
                          }}
                        >
                          {p.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            mb: 1,
                            fontSize: 13,
                          }}
                        >
                          {p.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            fontSize: 14,
                          }}
                        >
                          {p.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          {/* DOTS / PAGINATION */}
          <Box
            sx={{
              mt: 2.5,
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {projects.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => goToProjectIndex(idx)}
                sx={{
                  width: idx === projectIndex ? 22 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor:
                    idx === projectIndex
                      ? "primary.main"
                      : "rgba(148,163,184,0.7)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* ================= STATS BAND ================= */}
       
      </Box>
    </Box>
  );
}

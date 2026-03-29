const colors = {
  bg: "#0a0a0b",
  surface: "#141415",
  surfaceLight: "#1c1c1e",
  border: "#27272a",
  textPrimary: "#e4e4e7",
  textSecondary: "#a1a1aa",
  textMuted: "#71717a",
  accent: "#6366f1",
  accentLight: "#818cf8",
  accentDim: "rgba(99, 102, 241, 0.1)",
  green: "#10b981",
};

const projectsList = [
  {
    name: "Muse Web App",
    title: "Databases Project",
    description:
      "Full-stack web app that queries a MySQL database of music data and integrates the Spotify API for recommendations and in-app playback. Built from scratch with no prior web dev experience.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    href: "https://github.com/tfitzpatrick0/Databases-MuseWebApp",
    image: require("./assets/muse.png"),
  },
  {
    name: "Facial Recognition",
    title: "Computer Vision Project",
    description:
      "Real-time facial recognition system using OpenCV. Captures training data via webcam, detects facial regions, and recognizes faces in real time against the trained model.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    href: "https://github.com/tfitzpatrick0/CV-FaceRecognition",
    image: require("./assets/facerec.png"),
  },
  {
    name: "Simple File System",
    title: "Operating Systems Project",
    description:
      "A C library emulating the Unix file system — loads a disk image into memory and performs file system operations with manual memory management.",
    technologies: ["C", "Linux"],
    href: "https://github.com/tfitzpatrick0/OSproject4-FileSystem",
    image: require("./assets/filesys.png"),
  },
  {
    name: "Gains Tracker",
    title: "React Native App",
    description:
      "Cross-platform fitness app for creating workout routines and tracking gym progress over time. Uses local device storage for data persistence.",
    technologies: ["JavaScript", "React Native"],
    href: "https://github.com/tfitzpatrick0/GainsTracker",
    image: require("./assets/gainsTracker.png"),
  },
];

const socials = {
  github: "https://github.com/tfitzpatrick0/",
  linkedin: "https://www.linkedin.com/in/tfitzpatrick3/",
};

export { colors, projectsList, socials };

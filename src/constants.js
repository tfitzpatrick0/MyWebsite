import muse from "./images/muse.png";
import facerec from "./images/facerec.png";
import filesys from "./images/filesys.png";

const colors = {
  teal: "#1DC198",
  seaGreen: "#24F4C2",
  blue: "#0A0EF0",
  skyBlue: "#A1C7E0",
  coral: "#FF4858",
  orange: "#F28705",
  honey: "#F2BE5C",
  white: "#F2F2F2",
  black: "#1A1A1A",
};

const projectsList = [
  {
    name: "Muse Web App",
    title: "Databases Project",
    description:
      "For the semester project in my Databases Concepts course, my group and I created a web app that interacts with a MySQL database containing information about music, and utilizes the free Spotify API to implement additional features using this data. Users are able to search the database for a song, and upon selection the user is presented with additional information, new recommendations, and the ability to interact with their Spotify account in-app. Our group had no prior web development experience, so we needed to learn the basics of full-stack web development to create the app.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    href: "https://github.com/tfitzpatrick0/Databases-MuseWebApp",
    image: muse,
  },
  {
    name: "Facial Recognition",
    title: "Computer Vision Project",
    description:
      "For this project in my Computer Vision course, my partner and I developed a facial recognition system. The first iteration of the program was only focused on recognizing and detecting faces within a dataset. After reaching a high level of success, we added the ability for our system to detect and recognize faces in real time. This works by taking around 100 photos of someone's face using the webcam, detecting the facial region, and adding them to our dataset and model for recognition.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    href: "https://github.com/tfitzpatrick0/CV-FaceRecognition",
    image: facerec,
  },
  {
    name: "Simple File System",
    title: "Operating Systems Project",
    description:
      "This was the final project for my Operating Systems course. In this project, my partner and I developed a library in C that emulated the Unix file system by first loading a disk image into memory and efficiently performing file system operations on the image. In order to develop this program, we needed to learn about system calls and the structure of the Unix filesystem. In addition to this, we needed to continuously maintain proper memory allocation, which was the cause of the majority of errors during our development process.",
    technologies: ["C", "Linux"],
    href: "https://github.com/tfitzpatrick0/OSproject4-FileSystem",
    image: filesys,
  },
];

export { colors, projectsList };

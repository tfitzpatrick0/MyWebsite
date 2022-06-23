import muse from "./images/muse.png";

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
      "For the semester project in my Databases Concepts course, my group and I created a web app that interacts with a MySQL database containing information about music, and utilizes the free Spotify API to implement additional features using this data. Users are able to search the database for a song, and upon selection the user is presented with additional information, new recommendations, and the ability to interact with their Spotify account in-app. This project was created using basic HTML/CSS and JavaScript to design the frontend, and PHP to design MySQL queries for our database.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    name: "Face Recognition System",
    title: "Computer Vision Project",
    description:
      "For this project in my Computer Vision course, my partner and I developed a facial recognition system. The first iteration of the program was only focused on recognizing and detecting faces within a dataset. After reaching a high level of success, we added the ability for our system to detect and recognize faces in real time. This works by taking around 100 photos of someone's face using the webcam, detecting the facial region, and adding them to our dataset and model.",
    technologies: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    name: "Simple File System",
    title: "Operating Systems Project",
    description:
      "This is the fourth project for my Operating Systems course. In this project, my partner and I developed a library in C that emulated the Unix file system by first loading a disk image into memory and efficiently performing file system operations on the image. In order to develop this program, we needed to learn about proper system calls and the structure of the Unix filesystem. In addition to this, we needed to continuously maintain proper memory allocation, which was the cause of the majority of errors during our development process.",
    technologies: ["C", "Linux"],
  },
];

const images = {
  museImg: muse,
};

export { colors, projectsList, images };

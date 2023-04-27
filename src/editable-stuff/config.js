// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ruben",
  middleName: "",
  lastName: "Choi",
  message: " There is a goal but no way; what we call the way is mere wavering. - Franz Kafka ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/rubenchoi",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/honey312",
    // },
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/ruben.choi_/",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/rubenchoi/",
    },
    {
      // image: "far fa-newspaper",
      image: "fab fa-blogger",
      url: "https://rubenchoi.tistory.com/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/flamencochoi/",
    // },
    {
      image: "fab fa-youtube",
      url: "https://www.youtube.com/flamencochoi/",
    },
    {
      image: "fab fa-ethereum",
      url: "https://opensea.io/rubenchoi",
    },
    {
      image: "fab fa-soundcloud",
      url: "https://soundcloud.com/ruben-choi",
    },

  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/p21-name.jpg"),
  imageSize: 375,
  message:
    "Musician & Technical Artist@Advanced Robotics Lab, LG Electronics",
  resume: "/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "rubenchoi", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const music = {
  show: true,
  heading: "Music",
  data: [
    {
      title: 'Farewell',
      logo: require('../assets/img/farewell.jpg'),
      description: 'Ruben Choi EP 2020',
      urls: {
        apple: 'https://music.apple.com/us/album/farewell-ep/1526794613',
        spotify: 'https://open.spotify.com/album/2tYbRlayczJJsycDc4UHnA',
        melon: 'https://www.melon.com/album/music.htm?albumId=10473820'
      }
    },
    {
      title: 'Inferno - The Divine Comedy',
      logo: require('../assets/img/inferno.png'),
      description: 'Kokytus EP 2021',
      urls: {
        apple: 'https://music.apple.com/us/album/inferno-the-divine-comedy-ep/1585627398',
        spotify: 'https://open.spotify.com/album/1BI98eYBjm9HyMWluRhnvg',
        melon: 'https://www.melon.com/album/detail.htm?albumId=10712852'
      }
    },
    {
      title: 'Full Bloom',
      logo: require('../assets/img/fullbloom.jpg'),
      description: 'Ruben Choi EP 2023 (coming up soon)',
      urls: {
        apple: 'https://music.apple.com/us/album/full-bloom/1684698636',
        spotify: 'https://open.spotify.com/album/33dobnS4gJf2PWgGaS3AJg',
        melon: 'https://www.melon.com/album/detail.htm?albumId=11232157'
      }
    }

  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/p41.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/p41.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#/Unity", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message:
    "honey312 (at) naver.com",
  // email: "honey312@naver.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/farewell.jpg'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/farewell.jpg'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, music, skills, leadership, getInTouch, experiences };

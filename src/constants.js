// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's
import bciitlogo from './assets/education_logo/bciitlogo1.jpg'
import IITMlogo from './assets/education_logo/IITMlogo.jpg'
import sarvodyavidyalya from './assets/education_logo/sarvodayavidyalya.png'

// Project Section Logo's
import ravionaiimg from './assets/work_logo/ravionaiimg.png';
import blogappimg from './assets/work_logo/blogappimg.png'
import airesumeimg from './assets/work_logo/ai_resume.png'
import personalportfolio from './assets/work_logo/personalportfolioimg.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
   
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

export const experiences = [

];

export const education = [
  {
    id: 0,
    img: bciitlogo,
    school: "BCIIT College, Delhi",
    date: "Aug 2024 - July 2026",
    grade: "8.7 CGPA",
    desc: "I am currently pursuing my Master of Computer Applications (MCA) degree at BCIIT, an affiliated college of Guru Gobind Singh Indraprastha University, Delhi, with an expected completion year of 2026. This intensive academic program is providing me with a solid foundation in software development, fundamental computer science concepts, and hands-on skills essential for solving real-world technological problems, while also enhancing my analytical thinking, research mindset, and collaborative leadership abilities.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: IITMlogo,
    school: "IITM College, Delhi",
    date: "Sept 2020 - July 2023",
    grade: "8.7 CGPA",
    desc: "I have successfully completed my Bachelor of Computer Applications (BCA) degree from IITM College, Delhi, which is affiliated with Guru Gobind Singh Indraprastha University. During the program, I built a strong academic foundation in key areas such as programming, database management, and software engineering. It also helped me strengthen my analytical thinking, problem-solving abilities, and teamwork skills through project-based learning and exposure to real-world IT scenarios.",
    degree: "Bachelor of Computer Application - BCA",
  },
  {
    id: 2,
    img: sarvodyavidyalya,
    school: "Sarvodaya Bal Vidyalaya, Mayur Vihar Ph-1, Delhi",
    date: "Apr 2019 - March 2020",
    grade: "75%",
    desc: "I completed my Class 12 education from Sarvodaya Bal Vidyalaya, located in Delhi, under the Central Board of Secondary Education (CBSE), with a focus on the Science stream, where I studied Physics, Chemistry, and Mathematics (PCM) as my core subjects.",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: sarvodyavidyalya,
    school: "Sarvodaya Bal Vidyalaya, Mayur Vihar Ph-1, Delhi",
    date: "Apr 2017 - March 2018",
    grade: "58.2%",
    desc: "I completed my Class 10 education from Sarvodaya Bal Vidyalaya, located in Delhi, under the Central Board of Secondary Education (CBSE), where I focused on core academic subjects and built a strong foundation for my further studies.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Personal Portfolio App",
    description:
    "A responsive personal portfolio website showcasing my skills, projects, experience, and education — designed to highlight my professional journey and attract potential employers or collaborators.",
    image: personalportfolio,
    tags: ["React JS", "TailwindCss", "HTML", "JavaScript"],
    github: "https://github.com/jitinnailwal/personal-portfolio-website",
    webapp: "https://personal-portfolio-website-jitin-nailwal.vercel.app/",
  },
  {
    id: 1,
    title: "Ravion AI",
    description:
      "A full-stack AI application featuring conversational AI powered by Google Gemini 2.0 Flash, AI image generation via ImageKit, a community gallery for sharing creations, Firebase authentication with Google OAuth, a credit-based economy, chat management, and dark mode support.",
    image: ravionaiimg,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "TailwindCss", "Firebase", "Gemini API"],
    github: "https://github.com/jitinnailwal/RavionAi",
    webapp: "https://ravionai-client.vercel.app/",
  },
  {
    id: 2,
    title: "AI Resume Screening",
    description:
      "An AI-powered resume screening application that intelligently analyzes and evaluates resumes, helping streamline the hiring process by automatically assessing candidate qualifications, skills, and experience to find the best-fit candidates efficiently.",
    image: airesumeimg,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "TailwindCss", "JavaScript"],
    github: "https://github.com/jitinnailwal/ai-resume-screening",
    webapp: "https://ai-resume-client-one.vercel.app/",
  },

];  
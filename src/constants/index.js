import {
    creator,
    leetcode,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    mentro,
    internshala,
    juet,
    smbackend,
    uschat,
    cpp,
    codingninja,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "experience",
      title: "Work-Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "tech",
      title: "Tech-Stack",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Node.js Developer",
      icon: nodejs,
    },
    {
      title: "Leetcoder",
      icon: leetcode,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name:"C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Technical Content Creator",
      company_name: "Mentro",
      icon: mentro,
      iconBg: "#383E56",
      date: "September 2023 - Currently",
      points: [
        "Developed comprehensive learning materials for Backend Development with Node.js, spanning foundational to advanced concepts, coupled with practical real-world projects.",
        "Collaborated on the continuous improvement of the application by enhancing its core services, including resources, job listings, mentorship programs, and more.",
        "Facilitated technical polling and knowledge-sharing initiatives on WhatsApp and Telegram to foster a highly engaged community.",
        "Worked closely with the founder(s) in a multidisciplinary capacity, actively participating in operations, technology, product development, content creation, and marketing tasks.",
      ],
    },
    {
      title: "Teaching Assistant Intern",
      company_name: "Coding Ninjas",
      icon: codingninja,
      iconBg: "#E6DEDD",
      date: "July 2021 - Nov 2021",
      points: [
        "Mentored students in Data Structures and Algorithms and OOPS Concepts in C++, facilitating understanding and problem-solving abilities, resulting in 30% reduction in assignment errors",
        "Attained an average rating of 4.73 out of 5 from students for resolving their doubts in the course.",
        "Resolved over 800+ complex queries and debugged over 500+ codes significantly contributing to the academic progress of over 600+ students.",
        "Participating in code reviews and providing constructive feedback to the students",
      ],
    },
    
  ];

  const courses = [
    {
      title: "B.Tech CSE",
      company_name: "Jaypee University of Enginering and Technology",
      icon: juet,
      iconBg: "#383E56",
      date: "2020 - 2024",
      points: [
        " I have consistently excelled in my B.Tech program, achieving CGPA of 8.1","Studied Computer Science fundamentals subjects like Database Management Systems, Software Engineering, Object Oriented Porgramming, Operating Systems and Computer Networks to provide a strong foundation.",
      ],
    },
    {
      title: "React.js Course",
      company_name: "Internshala Trainings",
      icon: internshala,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "During the training, I acquired a strong foundation in ReactJS, gaining proficiency in key concepts and practical skills such as JSX, API integration, and component development.",
        "Successfully completed a certified ReactJS training program accredited by the National Development Skill Centre and Skill India, attaining a government-approved certificate.",
      ],
    },
    {
      title: "C++ Foundation and DSA Course",
      company_name: "Coding Ninjas",
      icon: codingninja,
      iconBg: "#E6DEDD",
      date: "September 2020 - April 2021",
      points: [
        "Completed an extensive C++ Foundation and Data Structures and Algorithms (DSA) course, which provided a solid grounding in programming fundamentals and advanced problem-solving techniques.",
        "Over the course of the program, I honed my problem-solving abilities by tackling more than 200 coding challenges. ",
      ],
    },
    
  ];

  
  const projects = [
    {
      name: "Social Media Backend",
      description:
        "Designed and implemented with distinct models for posts and users, Incorported security measures for authentication and authorization through jwt and bcrypt. Utilized multer for seamless file uploads. ",
      tags: [
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "white-text-gradient",
        },
      ],
      image: smbackend,
      source_code_link: "https://github.com/",
    },
    {
      name: "UsChat",
      description:
        "Built a responsive web app where users can create public chat rooms and do real-time messaging. It also has features like online/offline status, room description.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: uschat,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences,projects,courses };
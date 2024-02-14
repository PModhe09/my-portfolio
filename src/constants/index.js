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
    firebase,
    expressjs,
    mysql,
    nextjs,
    postman,
    deltax
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
      title: "Frontend Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: nodejs,
    },
    {
      title: "Leetcoder",
      icon: leetcode,
    },
    {
      title: "Teaching Assistant",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name:"Next.js",
      icon: nextjs
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: expressjs,
    },
    {
      name: "Firebase",
      icon: firebase
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "My SQL",
      icon: mysql,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "DeltaX",
      icon: deltax,
      iconBg: "#212B35",
      date: "February 2024 - Currently",
      points: [
       
      ],
    },
    {
      title: "Teaching Assistant Intern",
      company_name: "Coding Ninjas",
      icon: codingninja,
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
      date: "2020 - 2024",
      points: [
        " I have consistently excelled in my B.Tech program, achieving CGPA of 8.1","Studied Computer Science fundamentals subjects like Database Management Systems, Software Engineering, Object Oriented Porgramming, Operating Systems and Computer Networks to provide a strong foundation.",
      ],
    },
    {
      title: "React.js Course",
      company_name: "Internshala Trainings",
      icon: internshala,
      iconBg: "#00A5EC",
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
      iconBg: "#FFFFFF",
      date: "September 2020 - April 2021",
      points: [
        "Completed an extensive C++ Foundation and Data Structures and Algorithms (DSA) course, which provided a solid grounding in programming fundamentals and advanced problem-solving techniques.",
        "Over the course of the program, I honed my problem-solving abilities by tackling more than 200 coding challenges. ",
      ],
    },
    
  ];

  
  const projects = [
    {
      name: "NextSpark",
      description:
        "Developed and launced an innovative and resonsive web application enabling job and internship seekers with off-campus application links, dereasing their search time by 50%",
      tags: [
        {
          name: "React.js",
          color: "green-pink-gradient",
        },
        {
          name: "mongodb",
          color: "green-pink-gradient",
        },
        {
          name: "express.js",
          color: "green-pink-gradient",
        },
      ],
      image: smbackend,
      source_code_link: "https://github.com/",
    },
    {
      name: "CoderCard",
      description:
        "Developed CoderCard, a web app giving access to developer profiles saving 50% of traditional research time for potential employers, Empowering developer to eliminating the need to resume creation to showcase their skills or projects.",
      tags: [
        {
          name: "Next.js",
          color: "green-pink-gradient",
        },
        {
          name: "OAuth2",
          color: "green-pink-gradient",
        },
        {
          name: "AWS",
          color: "green-pink-gradient",
        },
      ],
      image: smbackend,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences,projects,courses };
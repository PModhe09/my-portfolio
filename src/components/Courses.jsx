import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import {styles} from '../style';
import { courses } from "../constants";
import { textVariant } from "../utils/motion";

const CourseCard = ({ course }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={course.date}
      iconStyle={{ background: course.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={course.icon}
            alt={course.company_name}
            className='w-[80%] h-[80%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{course.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {course.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {course.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Courses = () => {
  return (
    <div className="mt-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education & Online Courses
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {courses.map((course, index) => (
            <CourseCard
              key={`experience-${index}`}
              course={course}
            />
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-t-2 border-white mt-10" />
    </div>
  );
};

export default Courses;
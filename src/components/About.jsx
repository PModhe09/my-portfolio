import {styles} from '../style.js';
import { services } from '../constants';
import AboutCard from './AboutCard.jsx';



const About = () => {
  return (
    <div className='mt-6'>
      
      <p className={`text-center ${styles.sectionHeadText}` } >About Me</p>

      <div className="mt-4 mx-auto w-3/4border border-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg p-4 text-center text-white">
  <p>
    I am a BTech student in Computer Science at Jaypee University of Engineering and Technology, expected to graduate in 2024. I have a strong interest and passion for coding and problem-solving, and I have completed multiple courses and certifications in C++, Data Structures, Algorithms, and React.
  </p>
</div>



        <div className='mt-20 flex flex-wrap gap-10 mx-auto w-3/4'>
        {services.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <hr className="border-t-2 border-white mt-10" />
    </div>
  )
}

export default About
import ProjectCard from './ProjectCard';
import { projects } from '../constants/index.js';
import { styles } from '../style.js';

const Projects = () => {
  return (
    <div className=''>
      <div className={`text-center ${styles.sectionHeadText} mb-4 mt-6` }>
        Projects
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {projects.map((project) => (
          <div key={project.name}>
            <ProjectCard project={project}  className=""/>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-white mt-10" />
    </div>
  );
};

export default Projects;

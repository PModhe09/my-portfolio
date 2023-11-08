import { technologies } from "../constants"
import TechCard from './TechCard'
import { styles } from "../style"

const Tech = () => {
  return (
    <>
    <div className={`text-center font-semibold py-4 transition-transform transform hover:scale-105 ring-transparent ring-white text-white-400 hover:text-blue-600 mt-12 ${styles.sectionHeadText} w-full`} >
  Technologies I know about
</div>




    <br></br>
    <div className='flex flex-row flex-wrap justify-center gap-10 overflow-hidden'>
      {technologies.map((technology) => (
        <div className='w-30 h-28' key={technology.name}>
          <TechCard icon={technology.icon} name={technology.name}/>
        </div>
      ))}
    </div>
    <hr className="border-t-2 border-white mt-10" />
    </>

  )
}

export default Tech
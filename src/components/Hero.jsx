import {styles} from '../style';
import pm from '../assets/pm1.jpg';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div
        className={`absolute inset-0 top-[120px]  max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-20`}
      >
        <div className='flex flex-col justify-center items-center mt-20'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-2 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-20`}>
            <span className='text-[#FFFFFF]'>Prathmesh Modhe</span>
          </h1>
          <img src={pm} height={300} width={300}  className='absolute rounded-full right-0 transform hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-blue-500 mt-24'/>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A <span className='text-red-500'>Full-Stack Developer</span> and a <span className='text-yellow-400'>LeetCoder</span><br className='sm:block hidden' />
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
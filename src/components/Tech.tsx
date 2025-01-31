import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'
import { fadeIn, textVariant } from '../utils/motion'

const TechCard = ({ index, name, icon }: { index: number, name: string, icon: string }) => (
  <motion.div 
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full sm:w-[250px] flex flex-col items-center'
  >
    <div className='w-[200px] h-[200px] rounded-full shadow-2xl bg-tertiary/80 flex items-center justify-center 
    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative
    border-4 border-tertiary/50 hover:border-tertiary'>
      <div className='w-[170px] h-[170px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
        <div className='w-[130px] h-[130px] relative'>
          <BallCanvas icon={icon} />
          <div className='absolute inset-0 flex items-center justify-center'>
            <p className='text-white text-[14px] font-bold text-center 
            tracking-wide'>
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Digital Marketing Toolkit
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[32px]`}>
          Tools & Expertise
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <TechCard 
            key={technology.name} 
            index={index} 
            {...technology} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")

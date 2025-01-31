import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import AboutImage from '../assets/about.jpg'

interface ServiceCardProps {
  index: number
  title: string
  icon: string
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt 
    className='xs:w-[250px] w-full'
    options={{
      max: 25,
      scale: 1.02,
      speed: 800,
      transition: true,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card 
      transition-all duration-500 ease-in-out hover:shadow-2xl'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col 
        transition-all duration-500 ease-in-out group'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain 
          transition-transform duration-500 ease-in-out 
          group-hover:scale-110'
        />
        <h3 className='text-white text-[20px] font-bold text-center 
        transition-all duration-500 ease-in-out 
        group-hover:text-opacity-80'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl mx-auto leading-[30px] grid grid-cols-1 md:grid-cols-3 gap-10 items-center'
      >
        <div className='md:col-span-2 space-y-4'>
          <p>
            I'm a skilled Digital Marketing Strategist with a passion for crafting innovative 
            online marketing solutions. With extensive experience in SEO, social media marketing, 
            and content strategy, I help businesses enhance their digital presence and drive 
            meaningful engagement.
          </p>
          <p>
            My approach combines data-driven insights with creative storytelling, ensuring 
            that every marketing campaign not only reaches but resonates with the target audience. 
            I thrive on transforming complex digital challenges into strategic opportunities.
          </p>
          <p>
            Leveraging cutting-edge digital tools and analytics, I develop targeted strategies 
            that maximize brand visibility, increase audience interaction, and drive measurable 
            business growth.
          </p>
        </div>

        <div className='md:col-span-1 w-full flex justify-center'>
          <img 
            src={AboutImage} 
            alt='About Fariha' 
            className='w-full max-w-[400px] h-auto rounded-2xl shadow-lg object-cover 
            transition-transform duration-500 hover:scale-105 hover:rotate-1'
          />
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")

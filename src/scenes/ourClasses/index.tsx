import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import { Htext } from '@/shared/Htext'
import { Class } from './Class'

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Enhance muscle strength and endurance with structured weight training led by professional instructors.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    description:
      'Improve flexibility, balance, and mindfulness with guided yoga sessions for all skill levels.',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Strengthen your core muscles and build endurance with targeted ab and core workouts.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description:
      'Engage in dynamic and exciting workouts that challenge your body in adventurous ways.',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    description:
      'Join high-energy fitness sessions designed to improve overall health and stamina.',
    image: image5,
  },
  {
    name: 'Training Classes',
    description:
      'Tailored training programs to help you achieve your fitness goals with expert guidance.',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              "Fringilla is positioned and adapts with ease. Strength combines
              with fluidity in every movement, while balance and precision shape
              progress. Confidence grows with each step, embracing the rhythm of
              motion and stability
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

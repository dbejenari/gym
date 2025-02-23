import { Htext } from '@/shared/Htext'
import { BenefitType, SelectedPage } from '@/shared/types'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Benefit } from './Benefit'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Experience top-tier, modern facilities designed for peak performance and ultimate comfort. Equipped with cutting-edge technology and premium amenities.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'I am in need of growth, time, and always striving for excellence. Connected by structure and guided by ease. Rooted in strength and agility.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Solid foundations for progress. Structured growth in every step. Strength and agility in motion. A future built on excellence.',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* {HEADER} */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* {BENEFITS} */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* {GRAPHICS AND DESCRIPTION} */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28">
          {/* {GRAPHIC} */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* {DESCRIPTION} */}
          <div>
            {/* {TITLE} */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  className="md:my-5 md:w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* {DESCRIPT} */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>
                A newborn mass builds strength with precision. Powerful posture
                and movements enhance growth, while structured discipline
                refines every step. Stability shapes progress, and resilience
                fuels the journey. Each motion is a testament to controlled
                excellence, embracing both balance and strength
              </p>
              <p>
                Fringilla sits gracefully, adapting with ease. Strength meets
                fluidity in every motion, while balance and precision shape
                progress. Confidence grows with each step, embracing the rhythm
                of movement and resilience.
              </p>
            </motion.div>
            {/* {BUTTON} */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { images } from '../constants/images';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Academy</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Rhythm Academy has been at the forefront of dance education,
              nurturing talent and inspiring creativity through movement. Our world-class
              instructors bring decades of experience across various dance styles.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that dance is more than just movement – it's a form of expression,
              a way to connect with others, and a path to personal growth. Our academy
              provides a supportive environment where students of all levels can explore
              their passion for dance.
            </p>
            <ul className="space-y-4">
              {[
                'Professional instructors with international experience',
                'State-of-the-art dance studios with sprung floors',
                'Small class sizes for personalized attention',
                'Regular performances and showcases',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              src={images.about}
              alt="Dance studio"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
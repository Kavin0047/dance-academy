import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Users, Star, Timer } from 'lucide-react';
import { images } from '../constants/images';

const danceClasses = [
  {
    title: 'Contemporary Dance',
    description: 'Express yourself through fluid movements and modern techniques',
    image: images.classes.contemporary,
    level: 'All Levels',
    duration: '90 min',
    capacity: '15 students'
  },
  {
    title: 'Classical Ballet',
    description: 'Master the fundamentals of ballet with proper technique and form',
    image: images.classes.ballet,
    level: 'Beginner to Advanced',
    duration: '120 min',
    capacity: '12 students'
  },
  {
    title: 'Hip Hop',
    description: 'Learn street dance styles and urban choreography',
    image: images.classes.hiphop,
    level: 'All Levels',
    duration: '60 min',
    capacity: '20 students'
  },
  {
    title: 'Jazz Dance',
    description: 'Combine technical precision with artistic expression',
    image: images.classes.jazz,
    level: 'Intermediate',
    duration: '90 min',
    capacity: '15 students'
  }
];

const Classes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Dance Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover your perfect dance style with our diverse range of classes led by expert instructors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {danceClasses.map((danceClass, index) => (
            <motion.div
              key={danceClass.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={danceClass.image}
                  alt={danceClass.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{danceClass.title}</h3>
                <p className="text-gray-600 mb-4">{danceClass.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{danceClass.level}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Timer className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{danceClass.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{danceClass.capacity}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
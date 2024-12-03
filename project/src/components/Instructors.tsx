import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Globe } from 'lucide-react';
import { images } from '../constants/images';

const instructors = [
  {
    name: 'Sarah Johnson',
    role: 'Contemporary Dance',
    image: images.instructors.instructor1,
    bio: '15+ years of professional dance experience',
    social: {
      instagram: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Classical Ballet',
    image: images.instructors.instructor2,
    bio: 'Former principal dancer at National Ballet',
    social: {
      instagram: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Emma Rodriguez',
    role: 'Hip Hop & Street Dance',
    image: images.instructors.instructor3,
    bio: 'Award-winning choreographer',
    social: {
      instagram: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Jazz & Modern',
    image: images.instructors.instructor4,
    bio: 'International performer & instructor',
    social: {
      instagram: '#',
      twitter: '#',
      website: '#'
    }
  }
];

const Instructors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Instructors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from world-class dancers who bring years of experience and passion to every class
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-purple-300">{instructor.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{instructor.bio}</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={instructor.social.instagram}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={instructor.social.twitter}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={instructor.social.website}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Globe className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
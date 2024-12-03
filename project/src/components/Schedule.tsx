import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const scheduleData = {
  Monday: [
    { time: '09:00 AM', class: 'Ballet Basics', instructor: 'Sarah Johnson' },
    { time: '11:00 AM', class: 'Contemporary', instructor: 'Emma Rodriguez' },
    { time: '04:00 PM', class: 'Hip Hop', instructor: 'David Kim' },
    { time: '06:00 PM', class: 'Jazz Advanced', instructor: 'Michael Chen' }
  ],
  Tuesday: [
    { time: '10:00 AM', class: 'Contemporary', instructor: 'Sarah Johnson' },
    { time: '02:00 PM', class: 'Ballet Advanced', instructor: 'Michael Chen' },
    { time: '05:00 PM', class: 'Street Dance', instructor: 'Emma Rodriguez' },
    { time: '07:00 PM', class: 'Modern Dance', instructor: 'David Kim' }
  ],
  Wednesday: [
    { time: '09:00 AM', class: 'Jazz Basics', instructor: 'David Kim' },
    { time: '11:00 AM', class: 'Hip Hop', instructor: 'Emma Rodriguez' },
    { time: '04:00 PM', class: 'Ballet', instructor: 'Michael Chen' },
    { time: '06:00 PM', class: 'Contemporary', instructor: 'Sarah Johnson' }
  ],
  Thursday: [
    { time: '10:00 AM', class: 'Modern Dance', instructor: 'Sarah Johnson' },
    { time: '02:00 PM', class: 'Street Dance', instructor: 'Emma Rodriguez' },
    { time: '05:00 PM', class: 'Jazz Advanced', instructor: 'David Kim' },
    { time: '07:00 PM', class: 'Ballet Advanced', instructor: 'Michael Chen' }
  ],
  Friday: [
    { time: '09:00 AM', class: 'Contemporary', instructor: 'Sarah Johnson' },
    { time: '11:00 AM', class: 'Hip Hop', instructor: 'Emma Rodriguez' },
    { time: '04:00 PM', class: 'Ballet', instructor: 'Michael Chen' },
    { time: '06:00 PM', class: 'Jazz', instructor: 'David Kim' }
  ]
};

const Schedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect time for your dance classes with our flexible schedule
          </p>
        </motion.div>

        <div className="grid gap-8">
          {Object.entries(scheduleData).map(([day, classes], dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">{day}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {classes.map((classInfo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-lg font-semibold text-gray-800">{classInfo.time}</p>
                    <p className="text-purple-600">{classInfo.class}</p>
                    <p className="text-gray-600 text-sm">with {classInfo.instructor}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
import { Music2, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Music2 className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">Rhythm Academy</span>
            </div>
            <p className="text-gray-400">
              Inspiring dancers to reach their full potential through expert instruction and passionate dedication.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Classes', 'Schedule', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Dance Styles</h3>
            <ul className="space-y-2">
              {['Contemporary', 'Ballet', 'Hip Hop', 'Jazz', 'Modern'].map((style) => (
                <li key={style}>
                  <a
                    href="#classes"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {style}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rhythm Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
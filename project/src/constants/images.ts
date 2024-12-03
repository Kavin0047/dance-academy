// Image paths for dance academy
export const images = {
  hero: '/images/hero-dance.jpg',
  about: '/images/about-dance.jpg',
  gallery: {
    image1: '/images/gallery/gallery1.jpg',
    image2: '/images/gallery/gallery2.jpg',
    image3: '/images/gallery/gallery3.jpg',
    image4: '/images/gallery/gallery4.jpg',
    image5: '/images/gallery/gallery5.jpg',
    image6: '/images/gallery/gallery6.jpg'
  },
  classes: {
    contemporary: '/images/classes/contemporary.jpg',
    ballet: '/images/classes/ballet.jpg',
    hiphop: '/images/classes/hiphop.jpg',
    jazz: '/images/classes/jazz.jpg'
  },
  instructors: {
    instructor1: '/images/instructors/instructor1.jpg',
    instructor2: '/images/instructors/instructor2.jpg',
    instructor3: '/images/instructors/instructor3.jpg',
    instructor4: '/images/instructors/instructor4.jpg'
  }
} as const;

// Type definitions for image paths
export type ImagePaths = typeof images;
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = {
  'images/hero-dance.jpg': 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea',
  'images/about-dance.jpg': 'https://images.unsplash.com/photo-1509670572852-5823184def71',
  'images/gallery/gallery1.jpg': 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434',
  'images/gallery/gallery2.jpg': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  'images/gallery/gallery3.jpg': 'https://images.unsplash.com/photo-1535525153412-5a092c564c20',
  'images/gallery/gallery4.jpg': 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea',
  'images/gallery/gallery5.jpg': 'https://images.unsplash.com/photo-1547153760-18fc86324498',
  'images/gallery/gallery6.jpg': 'https://images.unsplash.com/photo-1509670572852-5823184def71',
  'images/classes/contemporary.jpg': 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434',
  'images/classes/ballet.jpg': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  'images/classes/hiphop.jpg': 'https://images.unsplash.com/photo-1535525153412-5a092c564c20',
  'images/classes/jazz.jpg': 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea',
  'images/instructors/instructor1.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'images/instructors/instructor2.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'images/instructors/instructor3.jpg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'images/instructors/instructor4.jpg': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.join('public', filepath);
    const dir = path.dirname(fullPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullPath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  for (const [filepath, url] of Object.entries(images)) {
    console.log(`Downloading ${filepath}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`Successfully downloaded ${filepath}`);
    } catch (error) {
      console.error(`Error downloading ${filepath}:`, error);
    }
  }
};

downloadAllImages();
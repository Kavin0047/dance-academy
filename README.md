This is a modern and responsive website for Rhythm Dance Academy created using React, TypeScript, and Framer Motion. The website presents information on dance classes, instructors, schedules, etc., with great animation and transition styling.

🌟 Features

- **Responsive Layout**: An entirely responsive layout that suits any device.

- **Smooth Animation**: Beautiful transitions and animations that are done using Framer Motion.

- **Modern UI**: Simple but professional UI styling done using Tailwind CSS.

- **Interactive Components**: Animated gallery, dance sections, and contact forms for better dynamic interaction.

- **Performance Optimized**: Images have been optimized and lazy-loaded.

🚀 Tech Stack

- React 18

- TypeScript

- Tailwind CSS

- Framer Motion

- Vite

- Lucide Icons


🛠️ Setup and Installation

1. Clone the repository:

```bash

git clone <repository-url>

```

2. Install dependencies:

```bash

npm install

```

3. Place your images into the public images directory:

```

public/

└── images/

    ├── hero-dance.jpg

    ├── about-dance.jpg

    ├── gallery/

    │   └── gallery{1-6}.jpg

    ├── classes/

    │   ├── contemporary.jpg

    │   ├── ballet.jpg

    │   ├── hiphop.jpg

    │   └── jazz.jpg

    └── instructors/

        └── instructor{1-4}.jpg

```

4. Start the development server:

```bash

npm run dev

```

🎨 Customization

Images

- Replace all placeholder images from the public/images directory with your own images.

- Either keep the same file names or alter the imports in src/constants/images.ts.

Colors

- Set up a customization for colors in tailwind.config.js.

- Primary color-Purple (#9333EA)

- Secondary colors-White and Grayscales.

Content

- Changing text contents on respective components.

- Modifying classes timetable in src/components/Schedule.tsx.

- Changing instructors' lists in src/components/instructors.tsx.

📱 Responsive Design

This is fully responsive and adaptive for the following breakpoints:

- Mobile device: < 640px

- Tablet: 640px - 1024px

- Desktop: > 1024px

✨ Animations

The website features various animations:

- Scroll-triggered reveals

- Hover effects

- Page transitions

- Image gallery interactions

- Smooth scrolling navigation

🔧 Development

Available Scripts

- `npm run dev`: Start development server

- `npm run build`: Build for production

- `npm run preview`: Preview production build

- `npm run lint`: Run ESLint

Code Style

- TypeScript for type safety

- ESLint for code quality

- Prettier for code formatting

- Component-based architecture

- Custom hooks for reusable logic


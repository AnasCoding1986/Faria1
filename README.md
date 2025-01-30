# Fariha's Digital Marketing Portfolio

A modern 3D portfolio website showcasing Fariha's digital marketing expertise and services.

## Features

- Modern 3D animations using Three.js
- Responsive design for all devices
- Dark/Light mode
- Interactive components
- Contact form with EmailJS integration
- Beautiful UI with Tailwind CSS
- Smooth animations with Framer Motion
- TypeScript for better development experience

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Three.js
- Framer Motion
- EmailJS
- Vite

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/fariha-portfolio.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd fariha-portfolio
npm install
\`\`\`

3. Create a .env file and add your EmailJS credentials:
\`\`\`env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Build for production:
\`\`\`bash
npm run build
\`\`\`

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/assets` - Images and other static files
  - `/styles` - Global styles and Tailwind configuration
  - `/constants` - Constants and data
  - `/utils` - Utility functions
  - `/hoc` - Higher-order components

## Customization

1. Update the content in `/src/constants/index.ts`
2. Replace images in `/public/tech/` and `/public/company/`
3. Modify styles in `tailwind.config.js` and `/src/styles.ts`
4. Update 3D models in `/public/desktop_pc/` and `/public/planet/`

## Contributing

Feel free to contribute to this project. Open a PR or issue for any improvements.

## License

MIT

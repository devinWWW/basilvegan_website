# Basil Vegan Thai & Sushi Website

A modern, responsive website for Basil Vegan Thai & Sushi restaurant built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚛️ **React 19** with TypeScript for type safety
- ⚡ **Vite** for lightning-fast development and optimized builds
- 🎨 **Tailwind CSS v4** with custom Basil brand colors
- 🧭 **React Router** for seamless navigation
- 📱 **Fully Responsive** with mobile-first design
- ♿ **Accessible** with ARIA labels and keyboard navigation
- 🎯 **Mobile Navigation** with fixed bottom navigation bar

## Brand Colors

- Primary Teal: `#008080`
- Secondary Orange: `#F28C28`
- Accent Gold: `#D4AF37`
- Neutral Cream: `#FEF7ED`
- Dark Text: `#333333`

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- React Router DOM 7

## Project Structure

```
basil-react/
├── public/
│   └── images/          # Restaurant images and assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── Hero.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Catering.tsx
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
└── tailwind.config.js   # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd basil-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Pages

- **Home** (`/`) - Hero section with slideshow and featured dishes
- **About** (`/about`) - Chef Mindy's story and restaurant mission
- **Contact** (`/contact`) - Location, hours, and contact information
- **Catering** (`/catering`) - Catering services information

## External Links

The site integrates with these external services:
- **Menu/Order**: https://order.toasttab.com/online/basil-vegan-thai
- **Reservations**: https://rewards.vegansushilv.com/book/basil
- **Rewards**: https://rewards.vegansushilv.com/scan
- **Gift Cards**: https://order.toasttab.com/egiftcards/basil-vegan-thai

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

### Deploying to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Deployment Options

The built files in `dist/` can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Customization

### Update Brand Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'primary-teal': '#008080',
      'secondary-orange': '#F28C28',
      // ... more colors
    }
  }
}
```

### Add New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```

## License

© 2024 Basil Vegan Thai & Sushi. All rights reserved.

## Support

For questions or issues, contact:
- Email: basilveganthai01@gmail.com
- Phone: (702) 357-3837

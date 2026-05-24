# Manas Kapoor - Premium Portfolio Website

> A cinematic, motion-heavy portfolio website showcasing fintech expertise and modern digital creation.
>
> **Fast. Modern. Intelligent. Impossible to ignore.**

## 🚀 Overview

This is a premium portfolio website built for Manas Kapoor — an 18-year-old fintech-focused developer, 3D creator, and modern digital builder. The site communicates expertise, ambition, and execution through a luxury dark aesthetic combined with advanced motion design and interactive experiences.

## ✨ Features

### Design & Aesthetics
- ✅ **Dark Luxury Aesthetic** - Premium #0C0C0C background with gradient accents
- ✅ **Cinematic Motion** - Heavy use of Framer Motion animations
- ✅ **Responsive Design** - Smooth scaling across all devices
- ✅ **Glass Morphism** - Modern blur and transparency effects
- ✅ **Gradient Text** - Beautiful gradient typography throughout
- ✅ **Glow Effects** - Subtle shadows and lighting effects

### Interactive Features
- ✅ **Custom Cursor** - Magnetic, multi-part cursor following mouse position
- ✅ **Scroll Progress Indicator** - Visual scroll progress bar at top
- ✅ **Smooth Scrolling** - Lenis-powered smooth scroll experience
- ✅ **Magnetic Buttons** - Interactive buttons with hover effects
- ✅ **Parallax Scrolling** - Depth-based scroll animations
- ✅ **Stagger Animations** - Sequential element animations

### Sections
1. **Navbar** - Fixed responsive navigation with mobile menu
2. **Hero** - Full viewport with animated gradient text and CTAs
3. **Marquee** - Infinite scrolling project showcase
4. **About** - Personal introduction with stats
5. **Services** - 6 core services with stagger animations
6. **Experience** - Timeline of professional experience
7. **Skills** - Interactive skill pills with hover effects
8. **Projects** - Sticky stacking project cards
9. **Contact** - Footer with CTA and social links

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool & dev server
- **Lenis** - Smooth scrolling (optional)
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Manas756/portfolio-premium.git
cd portfolio-premium

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Scheme

- **Primary Gradient**: `#646973` → `#BBCCD7`
- **Background**: `#0C0C0C`
- **Text**: `#FFFFFF` / `#BBCCD7`
- **Accents**: White/Gray with 5-20% opacity

## 📝 Font

- **Family**: Kanit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 🚀 Performance Optimizations

- ✅ CSS transforms for animations
- ✅ Hardware acceleration via `will-change`
- ✅ Lazy loading images
- ✅ Code splitting
- ✅ `prefers-reduced-motion` support
- ✅ Optimized animations for mobile

## 📱 Responsive Breakpoints

- Mobile: Base (320px+)
- Tablet: md (768px+)
- Desktop: lg (1024px+)
- Large Desktop: xl (1280px+)

All typography uses `clamp()` for fluid scaling.

## 🎬 Animation System

### Animation Patterns

- **Fade Up** - Elements fade in while moving up
- **Stagger Children** - Sequential animations for lists
- **Parallax** - Background/foreground depth movement
- **Scale on Scroll** - Elements scale based on scroll position
- **Character Reveals** - Text reveals character-by-character
- **Magnetic Movement** - Elements follow mouse with delay
- **Spring Physics** - Smooth, bouncy animations

### Framer Motion Variants

All components use consistent Framer Motion patterns:

```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
```

## 🔧 Customization

### Edit Colors

Modify gradient colors in `tailwind.config.js`:

```js
colors: {
  // Change primary gradient
  'gradient-primary': '#646973',
  'gradient-accent': '#BBCCD7',
}
```

### Edit Content

- **Hero**: Modify text in `App.tsx` Hero component
- **Services**: Update services array
- **Projects**: Add/edit project data
- **Social Links**: Update href in Contact section

### Add Lenis Smooth Scrolling

```bash
npm install lenis
```

Uncomment Lenis initialization in `App.tsx`.

## 📊 Performance Metrics

Target metrics:
- **Lighthouse Score**: 90+
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder
```

## 📚 Project Structure

```
src/
├── App.tsx                 # Main component with all sections
├── main.tsx               # React entry point
├── index.css              # Global styles & animations
tailwind.config.js         # Tailwind configuration
tsconfig.json              # TypeScript config
vite.config.ts            # Vite configuration
index.html                 # HTML entry point
```

## ✅ Features Checklist

- ✅ Dark luxury aesthetic with gradient text
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom cursor with hover effects
- ✅ Scroll progress indicator
- ✅ Smooth scrolling experience
- ✅ Magnetic button interactions
- ✅ Marquee showcase section
- ✅ Experience timeline
- ✅ Skills section with pills
- ✅ Sticky project cards
- ✅ Contact footer with social links
- ✅ Framer Motion animations throughout
- ✅ Tailwind CSS with custom theme
- ✅ TypeScript for type safety
- ✅ Production-ready code

## 🐛 Known Limitations

- Lenis requires manual installation (optional)
- Some animations may need adjustment for older browsers
- Mobile animations optimized with reduced motion

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Manas Kapoor**
- GitHub: [@Manas756](https://github.com/Manas756)
- Portfolio: [Your portfolio link]
- Email: manas@example.com

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion.**
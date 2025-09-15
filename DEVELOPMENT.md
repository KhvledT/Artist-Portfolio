# Development Workflow Guide

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
This starts the Vite development server with hot reloading at `http://localhost:5173`

### 2. Production Build
```bash
npm run build
```
Creates optimized production build in the `dist` directory.

### 3. Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## 📁 File Organization

### Asset Management
- **Images**: Store in `src/assets/images/`
- **Design Assets**: Store in `src/assets/designs/`
- **Icons**: Use Lucide React icons (already imported)

### Component Structure
```
components/
├── ui/                 # Reusable UI components (Button, Input, Card)
├── sections/          # Page-specific sections
├── Navbar.jsx         # Main navigation
└── Footer.jsx         # Site footer
```

### Data Management
- **Constants**: `src/lib/constants.js` - Navigation, gallery data, contact info
- **Utilities**: `src/lib/utils.js` - Helper functions (cn utility for className merging)

## 🎨 Styling Guidelines

### Tailwind CSS Classes
- Use Tailwind utility classes for styling
- Follow the design system colors (blue, purple, gray)
- Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)

### Custom Components
- Use the `cn()` utility for conditional className merging
- Follow the existing component patterns
- Maintain consistency with the design system

## 🔧 Common Tasks

### Adding New Images
1. Add image files to `src/assets/images/`
2. Import in `src/assets/images/index.js`:
   ```javascript
   import newImage from './new-image.jpg';
   export const images = { ..., newImage };
   ```
3. Use in components: `src={images.newImage}`

### Creating New Sections
1. Create component in `src/components/sections/`
2. Import and use in appropriate page component
3. Follow existing naming conventions

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="new-page" element={<NewPage />} />
   ```
3. Update navigation in `src/lib/constants.js`

## 🐛 Debugging Tips

### Common Issues
1. **Images not loading**: Check import paths in `src/assets/images/index.js`
2. **Styling issues**: Verify Tailwind classes and responsive breakpoints
3. **Routing problems**: Check route definitions in `App.jsx`

### Development Tools
- Use browser dev tools for debugging
- Check console for any JavaScript errors
- Use React DevTools extension for component debugging

## 📱 Responsive Testing

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Testing Checklist
- [ ] Mobile navigation works
- [ ] Images scale properly
- [ ] Text remains readable
- [ ] Interactive elements are accessible

## 🚀 Deployment

### Build Optimization
The production build includes:
- Minified JavaScript and CSS
- Optimized images
- Tree-shaking for unused code
- Gzip compression

### Deployment Options
1. **Static Hosting**: Deploy `dist` folder to Netlify, Vercel, or GitHub Pages
2. **CDN**: Use services like Cloudflare for global distribution
3. **Traditional Hosting**: Upload to any web server

## 🔄 Maintenance

### Regular Updates
- Keep dependencies updated
- Review and optimize images
- Check for accessibility improvements
- Monitor performance metrics

### Content Updates
- Update gallery images in `src/lib/constants.js`
- Modify contact information
- Add new testimonials or projects
- Update about section content

## 📊 Performance Monitoring

### Key Metrics
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)

### Optimization Tips
- Optimize images before adding to assets
- Use lazy loading for below-the-fold content
- Minimize bundle size with proper imports
- Use CDN for static assets

## 🎯 Future Enhancements

### Potential Features
- [ ] Blog section for artist updates
- [ ] Client portal for project management
- [ ] E-commerce integration for art sales
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced filtering for portfolio
- [ ] Social media integration
- [ ] Newsletter signup

### Technical Improvements
- [ ] Add unit tests with Jest/React Testing Library
- [ ] Implement error boundaries
- [ ] Add loading states and skeletons
- [ ] Optimize bundle splitting
- [ ] Add PWA capabilities
- [ ] Implement analytics tracking

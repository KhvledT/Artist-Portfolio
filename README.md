# Artist Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and React Router DOM. This project showcases an artist's creative work through a beautifully designed interface with seamless navigation and interactive features.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Gallery**: Image gallery with modal view and filtering capabilities
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized images and efficient code structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite 7.1.2
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/          # Portfolio images
│   └── designs/         # Design assets and mockups
├── components/
│   ├── sections/        # Page-specific sections
│   ├── ui/             # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── layouts/
│   └── MainLayout.jsx  # Main layout wrapper
├── lib/
│   ├── constants.js    # App constants and data
│   └── utils.js        # Utility functions
├── pages/
│   ├── Home.jsx        # Home page
│   ├── Work.jsx        # Portfolio/Work page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component with routing
└── main.jsx           # App entry point
```

## 🎨 Pages Overview

### Home Page
- Hero section with compelling call-to-action
- About section showcasing artist's journey
- Featured work preview
- Creative process explanation
- Client testimonials

### Work Page
- Portfolio hero section
- Category filtering system
- Interactive image gallery with modal view
- Recent projects showcase
- Project details and case studies

### Contact Page
- Contact form with validation
- Contact information display
- Interactive map placeholder
- FAQ section
- Availability status

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd artist-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Customization Guide

### Adding New Images
1. Add images to `src/assets/images/`
2. Import them in `src/assets/images/index.js`
3. Update the `galleryImages` array in `src/lib/constants.js`

### Modifying Content
- Update contact information in `src/lib/constants.js`
- Modify page content in respective component files
- Customize styling using Tailwind CSS classes

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/lib/constants.js`

## 🎨 Design System

### Color Palette
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Green (#10b981)
- Neutral: Gray scale

### Typography
- Headings: Bold, large sizes
- Body: Regular weight, readable sizes
- Font: System font stack for optimal performance

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Responsive spacing that adapts to screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email artist@example.com or create an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
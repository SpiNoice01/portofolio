# John Doe - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for showcasing projects and skills, and optimized for Google Ads campaigns.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds, animations, and responsive layout
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast performance
- **SEO Ready**: Comprehensive meta tags and OpenGraph configuration
- **Google Ads Ready**: Optimized for conversion tracking and analytics
- **Responsive**: Works perfectly on all devices
- **Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Custom Animations** - Smooth CSS animations and transitions

## 🎯 Perfect for Google Ads

This portfolio is specifically designed to work great with Google Ads:

- **Fast Loading**: Optimized for Core Web Vitals
- **Clear CTAs**: Strategic call-to-action buttons
- **Contact Forms**: Lead capture ready
- **Analytics Ready**: Easy to integrate Google Analytics and Tag Manager
- **Conversion Optimized**: High-converting landing page design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

## 📦 Deployment

### Deploy to Render

1. **Push to GitHub**:
```bash
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

2. **Create Render Service**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Use these settings:
     - **Build Command**: `npm run build`
     - **Start Command**: `npm run start`
     - **Node Version**: 18+

3. **Environment Variables** (if needed):
   - Add any required environment variables in Render dashboard

### Deploy to Vercel (Alternative)

```bash
npx vercel --prod
```

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **src/app/layout.tsx** - Update metadata, title, description
2. **src/components/HeroSection.tsx** - Update name, title, description
3. **src/app/page.tsx** - Update all sections with your content

### Add Google Analytics

Add to `src/app/layout.tsx`:

```typescript
// Add Google Analytics script
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

## 🔧 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Sections Included

- **Hero Section** - Eye-catching introduction with animated elements
- **About Section** - Skills, experience, and statistics
- **Projects Section** - Showcase of featured projects
- **Contact Section** - Contact form and information
- **Navigation** - Smooth scrolling navigation
- **Footer** - Additional information and links

## 🎯 Google Ads Integration

Ready for Google Ads with:
- Fast loading times (< 3s)
- Clear value propositions
- Strategic CTA placement
- Mobile-optimized design
- Contact form for lead generation
- Analytics tracking ready

## 📈 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with Next.js optimization
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and Tailwind CSS**

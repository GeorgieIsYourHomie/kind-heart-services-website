# Kind Heart Services Website

A modern, accessible website for Kind Heart Services, a family-run assisted living facility in Minnesota. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏠 About

This website showcases Kind Heart Services' compassionate, personalized assisted living services. It provides information about care services, amenities, health & safety protocols, and makes it easy for families to contact and schedule tours.

## ✨ Features

- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: WCAG-compliant with comprehensive ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, semantic structure, and SEO-friendly content
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images and Next.js best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Lora (serif), Work Sans (sans-serif)
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── pages/             # Page-specific components
│   ├── ui/                # Reusable UI components
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx         # Site footer
│   └── ContactForm.tsx   # Contact form
├── lib/                   # Utilities and data
│   ├── data/             # Static data (services, contact info)
│   └── types/            # TypeScript type definitions
└── public/               # Static assets
    └── images/           # Image files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kind-heart-services-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`): Hero section, story, services snapshot, amenities, health & safety, testimonials, and contact
- **About** (`/about`): Company story, mission, and vision with tabbed interface
- **Services** (`/services`): Comprehensive list of all assisted living services
- **Contact** (`/contact`): Contact form, location, hours, and map

## 🎨 Design System

### Colors

The site uses a warm, trustworthy color palette optimized for the assisted living industry:

- **Primary**: Deep blue (`oklch(0.42 0.09 220)`)
- **Secondary**: Soft green (`oklch(0.55 0.8 160)`)
- **Accent**: Warm beige (`oklch(0.8842 0.0302 127.91)`)
- **Muted**: Light gray (`oklch(0.96 0.01 95)`)

### Typography

- **Headings**: Lora (serif) - for warmth and readability
- **Body**: Work Sans (sans-serif) - for clarity and modern feel

### Spacing

Consistent spacing system:

- Section padding: `px-4 md:px-16 py-14`
- Large section padding: `px-4 md:px-16 py-20`

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- Semantic HTML5 elements
- Comprehensive ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization
- Proper heading hierarchy
- Alt text for all images
- Focus indicators

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy (h1-h6)
- Alt text for images
- Descriptive link text
- Local SEO optimization (Minnesota)

## 📝 Content Management

### Services Data

Services are managed in `lib/data/services.ts`. Each service includes:

- Title and description
- Icon
- Features list
- Snapshot content for homepage

### Contact Information

Contact information is centralized in `lib/data/kindheartservices-contact-info.ts` for easy updates.

## 🧪 Development

### Code Style

- TypeScript strict mode enabled
- ESLint for code quality
- Consistent component structure
- Component co-location with related files

### Adding New Sections

1. Create component in `components/sections/`
2. Import and add to appropriate page
3. Ensure accessibility attributes (aria-labels, semantic HTML)
4. Follow existing spacing and typography patterns

## 📦 Deployment

The site is configured for Vercel deployment:

1. Push to main branch
2. Vercel automatically builds and deploys
3. Analytics are included via `@vercel/analytics`

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure accessibility and SEO best practices
4. Test across devices
5. Submit a pull request

## 📄 License

Private project - All rights reserved

## 📞 Contact

For questions about the website or Kind Heart Services:

- **Phone**: (612) 405-3679
- **Email**: kindheartservicesllc@gmail.com
- **Website**: [Schedule a Tour](https://calendly.com/kindheartservicesllc/30min)

---

Built with ❤️ for Kind Heart Services

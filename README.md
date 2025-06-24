
# Serenity Yoga Studio

A beautiful, responsive yoga studio website built with React, TypeScript, and Tailwind CSS. Transform your mind, body, and spirit through mindful movement and ancient wisdom.

![Serenity Yoga Studio](https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=600)

## 🧘‍♀️ Features

- **Responsive Design** - Beautiful on all devices
- **Modern UI** - Clean, calming design with wellness-focused color palette
- **Interactive Components** - Smooth animations and hover effects
- **Class Scheduling** - View yoga classes and schedules
- **Instructor Profiles** - Meet your wellness guides
- **Pricing Plans** - Flexible membership options
- **Student Testimonials** - Real feedback from our community

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd serenity-yoga-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080` to view the website.

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Tanstack Query](https://tanstack.com/query)** - Data fetching

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Classes.tsx     # Classes section
│   ├── Schedule.tsx    # Schedule section
│   ├── Pricing.tsx     # Pricing section
│   ├── Testimonials.tsx # Testimonials section
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors

The project uses a custom wellness-inspired color palette:

- **Sage Green** - Primary color for calm and balance
- **Coral Pink** - Accent color for warmth
- **Cream** - Background color for softness

You can modify these colors in `tailwind.config.ts` and `src/index.css`.

### Components

All components are modular and can be easily customized:

1. **Header** - Update navigation links and branding
2. **Hero** - Change the main headline and call-to-action
3. **About** - Modify instructor information and story
4. **Classes** - Add or remove yoga class types
5. **Schedule** - Update class times and availability
6. **Pricing** - Adjust membership plans and pricing
7. **Testimonials** - Add customer reviews

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Popular Platforms

#### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help getting started:

1. Check the [Issues](../../issues) page for common problems
2. Create a new issue if you find a bug
3. Contact the maintainers for additional support

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with ❤️ using [Lovable](https://lovable.dev/)

---

*Find your inner balance with Serenity Yoga Studio* 🧘‍♀️

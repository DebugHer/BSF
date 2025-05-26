# Scholarship Program Website

A modern, responsive website for a scholarship program built with Next.js, React, and Tailwind CSS. The website includes features for scholarship applications, testimonials, and program information.

## Features

- 📱 Responsive design that works on all devices
- 🎨 Modern UI with Tailwind CSS
- 📝 Interactive application form with validation
- 👥 Testimonials from past scholarship recipients
- 📞 Contact form for inquiries
- 🔒 Form validation and error handling
- 🎯 Clear calls-to-action
- 🖼️ Hero sections with engaging visuals

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd scholarship-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
scholarship-website/
├── src/
│   ├── app/
│   │   ├── components/    # Reusable components
│   │   ├── about/        # About page
│   │   ├── apply/        # Application form
│   │   ├── contact/      # Contact page
│   │   ├── testimonials/ # Testimonials page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── styles/           # Global styles
├── public/              # Static assets
├── package.json
└── README.md
```

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## Development

To modify the website:

1. Make changes to the files in the `src/app` directory
2. The changes will be automatically reflected in the browser
3. Use Tailwind CSS classes for styling
4. Add new components in the `src/app/components` directory

## Deployment

The website can be deployed to various platforms. Here are some recommended options:

1. **Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

2. **Netlify**:
- Connect your repository to Netlify
- Set the build command to `npm run build`
- Set the publish directory to `.next`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please reach out through the contact form on the website.

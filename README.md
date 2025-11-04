# Sparkly Cleaning Website

A modern, responsive website for Sparkly Cleaning - a professional cleaning services company. Built with React, Vite, and EmailJS for seamless contact form integration.

![Sparkly Cleaning](https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80)

## 🌟 Features

- **Modern & Responsive Design** - Beautiful UI that works perfectly on all devices
- **Multiple Pages** - Home, Services, About Us, Testimonials, and Contact
- **Interactive Service Filtering** - Filter services by category (Residential, Commercial, Specialty)
- **Contact Form with EmailJS** - Fully functional contact form for lead generation
- **Smooth Navigation** - React Router for seamless page transitions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Focused** - Optimized images and fast loading times

## 📋 Pages

1. **Home** - Hero section, services overview, why choose us, and testimonials
2. **Services** - Comprehensive list of cleaning services with filtering
3. **About Us** - Company story, core values, and team members
4. **Testimonials** - Customer reviews and ratings
5. **Contact** - Contact form with EmailJS integration and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.9.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sparkly-cleaning
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Getting EmailJS Credentials:**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{service}}` - Service of interest
   - `{{message}}` - Message content
4. Get your Public Key from Account Settings
5. Copy the Service ID and Template ID

4. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build:
```bash
npm run preview
```

## 🚢 Deployment

### GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

**Setup Steps:**

1. Go to your repository on GitHub
2. Navigate to **Settings > Secrets and variables > Actions**
3. Add the following secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

4. Go to **Settings > Pages**
5. Under "Build and deployment", select **GitHub Actions** as the source

6. Push to the `main` branch to trigger automatic deployment

### Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Don't forget to set your environment variables in the deployment platform's dashboard!

## 📁 Project Structure

```
sparkly-cleaning/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceCard.css
│   │   ├── TestimonialCard.jsx
│   │   └── TestimonialCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── DESIGN_RULES.md             # Design system documentation
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

The project follows a comprehensive design system documented in `DESIGN_RULES.md`. Key highlights:

### Colors
- **Primary Blue**: `#00A8FF`
- **Primary Dark**: `#0088CC`
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F5F7`

### Typography
- Font Family: Inter, Segoe UI, system fonts
- Responsive font sizes
- Consistent spacing and line heights

### Components
- Reusable button styles
- Card components with hover effects
- Form elements with focus states
- Responsive grid system

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router 6** - Client-side routing
- **EmailJS** - Email service integration
- **React Icons** - Icon library
- **CSS3** - Styling with CSS custom properties

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## 🔧 Configuration

### Vite Config
The base URL is set to `/` for standard deployments. If deploying to a subdirectory, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-subdirectory/',
})
```

### EmailJS Template Example

```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service of Interest: {{service}}

Message:
{{message}}
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID | Yes |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID | Yes |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please contact:
- Email: contact@sparklycleaning.com
- Phone: (123) 456-7890

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

**Built with ❤️ for Sparkly Cleaning**

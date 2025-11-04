# Quick Start Guide - Sparkly Cleaning Website

Get your website up and running in 15 minutes! ⚡

## Prerequisites

- Node.js installed (v20.9.0 or higher)
- A code editor (VS Code recommended)
- Git (for version control)

## Step 1: Install Dependencies (2 minutes)

Open terminal in the project folder and run:

```bash
npm install
```

Wait for all packages to install.

## Step 2: Set Up EmailJS (5 minutes)

### Create Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Configure Email Service
1. In EmailJS Dashboard → **Email Services** → **Add New Service**
2. Choose Gmail (or your preferred email provider)
3. Connect your account
4. Copy your **Service ID**

### Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Name it: "Contact Form Submission"
3. Set the content (or use the template from EMAILJS_SETUP.md)
4. Copy your **Template ID**

### Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Configure Project
Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

Replace the `xxxxxxx` values with your actual credentials.

## Step 3: Start Development Server (1 minute)

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

## Step 4: Test the Website (5 minutes)

### Test Navigation
- Click through all menu items
- Verify all pages load correctly
- Test mobile menu (resize browser to < 1024px)

### Test Contact Form
1. Go to Contact page
2. Fill out the form
3. Submit
4. Check your email inbox for the message

### Test Responsiveness
- Resize browser window
- Test on mobile device (or use browser dev tools)
- Verify all content displays correctly

## Step 5: Customize Content (2 minutes)

Quick customizations you should make:

1. **Update Contact Info** in `src/components/Footer.jsx`
2. **Update Phone/Email** in `src/pages/Contact.jsx`
3. **Company Name** is already "Sparkly Cleaning" - change if needed

## 🎉 Done! Your Website is Ready!

You now have a fully functional website running locally.

## Next Steps

### For Local Testing
Keep the dev server running and make any customizations you want.

### For Deployment
Follow the **DEPLOYMENT_CHECKLIST.md** to deploy to:
- GitHub Pages (Free, recommended)
- Vercel (Free)
- Netlify (Free)

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Quick Customization Guide

### Change Colors
Edit `src/index.css` - CSS custom properties at the top:
```css
:root {
  --primary-blue: #00A8FF;  /* Change this */
}
```

### Update Services
Edit `src/pages/Home.jsx` or `src/pages/Services.jsx`

### Add/Remove Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Header.jsx`

### Change Images
Replace image URLs in the component files. Current images are from Unsplash.

## Troubleshooting

### Port Already in Use
Change the port:
```bash
npm run dev -- --port 3000
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

### Contact Form Not Working
1. Check `.env` file exists and has correct values
2. Restart dev server after changing `.env`
3. Check browser console for errors

### Build Errors
Update Node.js to version 20.9.0 or higher.

## File Structure at a Glance

```
sparkly-cleaning/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (routes)
│   ├── App.jsx          # Main app with routing
│   └── index.css        # Global styles
├── public/              # Static assets
├── .env                 # Your EmailJS credentials (create this)
└── package.json         # Dependencies and scripts
```

## Need Help?

- 📖 **Detailed Docs**: See README.md
- 📧 **EmailJS Setup**: See EMAILJS_SETUP.md
- 🚀 **Deployment**: See DEPLOYMENT_CHECKLIST.md
- 🎨 **Design System**: See DESIGN_RULES.md
- 📋 **Full Summary**: See PROJECT_SUMMARY.md

## Pro Tips

1. **Use Browser Dev Tools** - Press F12 to inspect and debug
2. **Keep Dev Server Running** - Changes auto-reload
3. **Test Contact Form Early** - Make sure EmailJS works before deploying
4. **Test on Real Devices** - Desktop and mobile
5. **Backup Your .env** - Don't commit it to Git, but keep a copy safe

---

## Success Checklist ✅

- [ ] Dependencies installed
- [ ] EmailJS configured
- [ ] .env file created
- [ ] Dev server running
- [ ] Website loads in browser
- [ ] All pages accessible
- [ ] Contact form tested and working
- [ ] Mobile responsive verified

---

**Ready to Launch?** 🚀

Once you've tested everything, follow **DEPLOYMENT_CHECKLIST.md** to go live!

**Questions?** Check the detailed documentation files included in the project.

---

*Your professional cleaning services website is ready to generate leads!* 💼


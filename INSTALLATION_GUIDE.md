# Installation Guide - First Time Setup

Complete guide for setting up the Sparkly Cleaning website from scratch.

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Node.js**: v20.9.0 or higher
- **npm**: v10.0.0 or higher (comes with Node.js)
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 500MB free space

### Check Your Current Versions

```bash
node --version
npm --version
```

If you need to install or update Node.js:
- Download from: https://nodejs.org/
- Choose LTS (Long Term Support) version

## Installation Steps

### 1. Get the Code

If you received the code as a ZIP file:
```bash
# Extract the ZIP file
# Navigate to the extracted folder
cd sparkly-cleaning
```

If using Git:
```bash
git clone <repository-url>
cd sparkly-cleaning
```

### 2. Install Dependencies

This will install all required packages (React, Vite, EmailJS, etc.):

```bash
npm install
```

**Expected output:**
```
added 160 packages, and audited 160 packages in 30s
found 0 vulnerabilities
```

⏱️ **Time**: 1-3 minutes depending on internet speed

### 3. Create Environment File

Create a new file called `.env` in the root directory:

**Windows (PowerShell):**
```powershell
New-Item .env -ItemType File
```

**Mac/Linux:**
```bash
touch .env
```

**Or** create it manually in your code editor.

### 4. Configure EmailJS

Open the `.env` file and add:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

**Don't have these credentials yet?**
→ Follow **EMAILJS_SETUP.md** for step-by-step instructions (5 minutes)

### 5. Verify Installation

Start the development server:

```bash
npm run dev
```

**Expected output:**
```
  VITE v7.1.12  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 6. Open in Browser

Open your browser to: **http://localhost:5173**

You should see the Sparkly Cleaning home page! 🎉

## Verify Everything Works

### ✅ Visual Check
- [ ] Website loads without errors
- [ ] All images display
- [ ] Navigation menu works
- [ ] All links work

### ✅ Functional Check
- [ ] Click through all 5 pages (Home, Services, About, Testimonials, Contact)
- [ ] Test service filtering on Services page
- [ ] Fill out and submit contact form
- [ ] Check email inbox for form submission

### ✅ Responsive Check
- [ ] Resize browser window
- [ ] Open mobile menu (< 1024px width)
- [ ] Verify layout adapts properly

## Common Installation Issues

### Issue: "npm: command not found"
**Solution**: Node.js is not installed or not in PATH
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt

### Issue: "Module not found" errors
**Solution**: Dependencies not installed correctly
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Issue: "Port 5173 already in use"
**Solution**: Use a different port
```bash
npm run dev -- --port 3000
```

### Issue: EmailJS credentials not working
**Solution**: 
1. Verify `.env` file is in the root directory (same level as package.json)
2. Check credentials have no extra spaces or quotes
3. Restart the dev server after changing `.env`
4. Press Ctrl+C to stop, then run `npm run dev` again

### Issue: Images not loading
**Solution**: 
- Images are loaded from Unsplash CDN
- Check internet connection
- May appear slow on first load (caching improves this)

### Issue: Build fails with Node.js version error
**Solution**: Update Node.js to v20.9.0 or higher
- Download latest LTS from https://nodejs.org/
- Restart terminal after installation

## Project Structure Overview

```
sparkly-cleaning/
├── 📂 .github/workflows/
│   └── deploy.yml              # Automatic deployment config
│
├── 📂 src/
│   ├── 📂 components/          # Reusable UI components
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer section
│   │   ├── Hero.jsx            # Hero section
│   │   ├── ServiceCard.jsx     # Service display card
│   │   └── TestimonialCard.jsx # Customer review card
│   │
│   ├── 📂 pages/               # Page components
│   │   ├── Home.jsx            # Landing page
│   │   ├── Services.jsx        # Services listing
│   │   ├── About.jsx           # About us page
│   │   ├── Testimonials.jsx    # Reviews page
│   │   └── Contact.jsx         # Contact form page
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
│
├── 📂 public/                  # Static files
│
├── 📄 .env                     # Environment variables (YOU CREATE THIS)
├── 📄 package.json             # Dependencies
├── 📄 vite.config.js           # Vite configuration
│
└── 📚 Documentation Files
    ├── README.md               # Main documentation
    ├── QUICK_START.md          # 15-minute setup guide
    ├── EMAILJS_SETUP.md        # EmailJS configuration
    ├── DEPLOYMENT_CHECKLIST.md # Deployment guide
    ├── DESIGN_RULES.md         # Design system
    └── PROJECT_SUMMARY.md      # Complete overview
```

## Development Workflow

### Daily Development
```bash
# Start dev server
npm run dev

# Edit files in your code editor
# Changes auto-reload in browser

# When done, stop server
# Press Ctrl+C in terminal
```

### Before Deploying
```bash
# Build for production
npm run build

# Test production build
npm run preview

# Check for issues
npm run lint
```

## What's Installed?

### Core Framework
- **React 19.1.1** - JavaScript library for building user interfaces
- **React DOM 19.1.1** - React rendering for web browsers

### Routing
- **React Router DOM** - Navigation and routing between pages

### Email Integration  
- **@emailjs/browser** - Send emails from contact form without backend

### Icons
- **react-icons** - Icon library with 1000+ icons

### Build Tool
- **Vite 7** - Fast development server and build tool

### Code Quality
- **ESLint** - Code linting and error checking

## Development Server Features

### Hot Module Replacement (HMR)
- Changes reflect instantly in browser
- No page refresh needed
- State preserved during updates

### Fast Startup
- Vite starts in milliseconds
- Instant updates when you save files

### Automatic Port Assignment
- Default: http://localhost:5173
- Auto-increments if port is busy

## Customize Before Launch

### Essential Customizations

1. **Contact Information**
   - Edit: `src/components/Footer.jsx`
   - Edit: `src/pages/Contact.jsx`
   - Update: Phone, Email, Address, Hours

2. **EmailJS Credentials**
   - File: `.env`
   - Get from: https://www.emailjs.com/

3. **Content Review**
   - Review all text content
   - Update service descriptions
   - Add real testimonials
   - Replace team member info

### Optional Customizations

1. **Colors**
   - File: `src/index.css`
   - Edit CSS custom properties

2. **Images**
   - Current: Unsplash URLs
   - Replace with your own images
   - Store in: `src/assets/images/`

3. **Services**
   - File: `src/pages/Services.jsx`
   - Add/remove/edit services

## Next Steps After Installation

1. ✅ **Installation Complete** - You are here!
2. 📧 **Set up EmailJS** - See EMAILJS_SETUP.md
3. 🎨 **Customize Content** - Update text, images, info
4. 🧪 **Test Thoroughly** - Click everything, test on mobile
5. 🚀 **Deploy** - See DEPLOYMENT_CHECKLIST.md

## Getting Help

### Documentation
- **Quick Start**: See QUICK_START.md (15 minutes)
- **Full Guide**: See README.md
- **EmailJS**: See EMAILJS_SETUP.md
- **Deployment**: See DEPLOYMENT_CHECKLIST.md

### Common Commands Reference
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

### Online Resources
- React: https://react.dev/learn
- Vite: https://vitejs.dev/guide/
- EmailJS: https://www.emailjs.com/docs/

## Troubleshooting Resources

1. Check browser console (F12) for errors
2. Check terminal for error messages
3. Verify `.env` file exists and is configured
4. Try restarting dev server
5. Try reinstalling dependencies

## Success Criteria ✅

You've successfully installed when:
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts server successfully
- [ ] Website opens in browser at localhost:5173
- [ ] All 5 pages load correctly
- [ ] No console errors (check with F12)
- [ ] Contact form can be filled out

---

## 🎉 Installation Complete!

Your development environment is ready. Continue with:
- **QUICK_START.md** for immediate usage
- **EMAILJS_SETUP.md** for email configuration
- **README.md** for comprehensive documentation

---

**Welcome to Sparkly Cleaning Website Development!** 🧹✨


# Deployment Checklist for Sparkly Cleaning Website

Use this checklist before deploying your website to production.

## Pre-Deployment Checklist

### ✅ 1. Environment Setup

- [ ] EmailJS account created
- [ ] EmailJS service configured
- [ ] EmailJS template created and tested
- [ ] `.env` file configured locally with all three credentials
- [ ] Contact form tested and working locally
- [ ] Emails received successfully in your inbox

### ✅ 2. Content Review

- [ ] All placeholder text reviewed and customized
- [ ] Business contact information updated (phone, email, address)
- [ ] Business hours verified and accurate
- [ ] Service descriptions reviewed
- [ ] Team member information and photos updated (if using real team)
- [ ] Testimonials reviewed (consider using real customer reviews)
- [ ] All links tested and working

### ✅ 3. Images & Assets

- [ ] Replace placeholder images with your own photos or stock images
- [ ] All images optimized for web (compressed)
- [ ] Favicon created and added to `/public` folder
- [ ] Logo created (if needed)
- [ ] Images have proper alt text for accessibility

**Image Locations to Update:**
- Hero sections: Currently using Unsplash URLs
- About Us team photos: Currently using Unsplash URLs
- Consider downloading and hosting images locally

### ✅ 4. SEO & Meta Tags

- [ ] Page titles updated in each component (if needed)
- [ ] Meta descriptions updated in `index.html`
- [ ] Keywords reviewed
- [ ] Social media preview tags added (Open Graph, Twitter Cards)
- [ ] Sitemap.xml created (optional)
- [ ] robots.txt configured (optional)

### ✅ 5. Performance

- [ ] Run Lighthouse audit
- [ ] All images optimized and properly sized
- [ ] Lazy loading implemented for below-the-fold images
- [ ] Bundle size checked (`npm run build`)
- [ ] Test on slow 3G connection

### ✅ 6. Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ 7. Responsive Testing

Test on these breakpoints:
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (390px - iPhone 12/13/14)
- [ ] Tablet (768px - iPad)
- [ ] Tablet (1024px - iPad Pro)
- [ ] Desktop (1280px)
- [ ] Wide (1920px)

### ✅ 8. Accessibility

- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader tested (optional)

### ✅ 9. Security

- [ ] `.env` file in `.gitignore` (already configured)
- [ ] No sensitive data in source code
- [ ] HTTPS enabled on production domain
- [ ] CORS configured correctly

## Deployment Steps

### Option 1: GitHub Pages (Recommended)

1. **Prepare Repository**
```bash
git add .
git commit -m "Initial commit - Sparkly Cleaning website"
git branch -M main
```

2. **Create GitHub Repository**
- Go to GitHub and create a new repository
- Name it `sparkly-cleaning` or your preferred name
- Don't initialize with README (you already have one)

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

4. **Configure GitHub Secrets**
- Go to Repository → Settings → Secrets and variables → Actions
- Click "New repository secret"
- Add three secrets:
  - Name: `VITE_EMAILJS_SERVICE_ID`, Value: your_service_id
  - Name: `VITE_EMAILJS_TEMPLATE_ID`, Value: your_template_id
  - Name: `VITE_EMAILJS_PUBLIC_KEY`, Value: your_public_key

5. **Enable GitHub Pages**
- Go to Repository → Settings → Pages
- Under "Build and deployment", select **GitHub Actions**
- The workflow will run automatically on the next push

6. **Verify Deployment**
- Go to Actions tab to see deployment progress
- Once complete, visit your site at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- If deploying to root domain, update `vite.config.js` base to `/YOUR_REPO/`

### Option 2: Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow prompts**
- Link to existing project or create new
- Set root directory to `./`
- Build command: `npm run build`
- Output directory: `dist`

4. **Add Environment Variables**
- Go to Vercel Dashboard → Project → Settings → Environment Variables
- Add your three EmailJS variables

5. **Redeploy**
```bash
vercel --prod
```

### Option 3: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

4. **Configure**
- Choose `dist` as your publish directory
- Add environment variables in Netlify Dashboard

### Option 4: Custom Domain

If you have your own domain:

1. Deploy using any method above
2. In your hosting platform:
   - Add your custom domain
   - Configure DNS records:
     - A record pointing to host IP
     - Or CNAME record pointing to host URL
3. Wait for DNS propagation (up to 48 hours)
4. Enable HTTPS (usually automatic)

## Post-Deployment Checklist

### ✅ Verification

- [ ] Website loads correctly on production URL
- [ ] All pages accessible and working
- [ ] Navigation works correctly
- [ ] Contact form submits successfully
- [ ] Emails arrive in your inbox
- [ ] All images load
- [ ] No console errors
- [ ] No 404 errors

### ✅ SEO & Analytics

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Set up Facebook Pixel (optional)
- [ ] Verify robots.txt is accessible
- [ ] Test meta tags with social media preview tools

### ✅ Monitoring

- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Monitor EmailJS usage (check dashboard)
- [ ] Set up error tracking (e.g., Sentry) - optional

### ✅ Business Setup

- [ ] Test contact form by submitting as a customer
- [ ] Set up email filters/labels for form submissions
- [ ] Create response templates for common inquiries
- [ ] Train team on responding to inquiries
- [ ] Add website URL to business cards, social media, etc.

## Maintenance

### Weekly
- [ ] Check EmailJS dashboard for submissions
- [ ] Respond to all contact form inquiries
- [ ] Monitor website uptime

### Monthly
- [ ] Review and update testimonials
- [ ] Check for broken links
- [ ] Review Google Analytics (if set up)
- [ ] Update content as needed

### Quarterly
- [ ] Update team photos and bios
- [ ] Refresh service descriptions
- [ ] Review and update pricing (if displayed)
- [ ] Security updates: `npm update`

## Troubleshooting

### Contact Form Not Working in Production

1. Check browser console for errors
2. Verify EmailJS credentials are set in production environment
3. Check EmailJS dashboard for error logs
4. Verify domain is whitelisted in EmailJS (if restricted)
5. Test with a different email address

### Images Not Loading

1. Check image URLs are correct
2. Verify images are in the `public` folder or properly imported
3. Check browser console for 404 errors
4. Clear browser cache

### Routing Issues (404 on page refresh)

For GitHub Pages, add a `404.html` that redirects to `index.html`:

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sparkly Cleaning</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

### Build Errors

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check Node.js version (should be 20.9+):
```bash
node --version
```

3. Try building locally first:
```bash
npm run build
npm run preview
```

## Success! 🎉

Your Sparkly Cleaning website is now live and ready to generate leads!

## Support Resources

- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **EmailJS Docs**: https://www.emailjs.com/docs
- **GitHub Pages Docs**: https://docs.github.com/pages

---

**Need Help?** Review the README.md and EMAILJS_SETUP.md for detailed instructions.


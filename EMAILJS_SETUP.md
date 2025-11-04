# EmailJS Setup Guide

This guide will walk you through setting up EmailJS for the Sparkly Cleaning contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the connection instructions for your provider
6. Give your service a name (e.g., "Sparkly Cleaning Contact")
7. Click **Create Service**
8. **Copy the Service ID** - you'll need this for your `.env` file

### Recommended: Gmail Setup

If using Gmail:
- Click "Connect Account"
- Sign in with your Gmail account
- Allow EmailJS to access your account
- Your service is now connected!

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use the following template:

### Template Settings

**Template Name**: Contact Form Submission

**Subject**: New Contact Form Submission - {{from_name}}

**Content (HTML)**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #00A8FF;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Service of Interest:</strong> {{service}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3>Message:</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
  
  <p style="color: #6b7280; font-size: 14px;">
    This email was sent from the Sparkly Cleaning contact form.
  </p>
</div>
```

**Reply-To Email**: `{{from_email}}`

**To Email**: Your business email (e.g., contact@sparklycleaning.com)

4. Click **Save**
5. **Copy the Template ID** - you'll need this for your `.env` file

## Step 4: Get Your Public Key

1. Go to **Account** (click your profile icon in the top right)
2. Go to **General** tab
3. Find your **Public Key** (formerly called User ID)
4. **Copy the Public Key** - you'll need this for your `.env` file

## Step 5: Configure Your Project

1. In your project root, create or edit the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

2. Replace the placeholder values with your actual credentials:
   - `service_xxxxxxx` → Your Service ID from Step 2
   - `template_xxxxxxx` → Your Template ID from Step 3
   - `xxxxxxxxxxxxxx` → Your Public Key from Step 4

## Step 6: Test the Contact Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your configured email inbox for the submission

## Troubleshooting

### Common Issues

**Issue**: "Failed to send email" error
- **Solution**: Double-check all three credentials in your `.env` file
- Make sure there are no extra spaces or quotes
- Restart your development server after changing `.env`

**Issue**: Not receiving emails
- **Solution**: Check your spam folder
- Verify the "To Email" in your template settings
- Make sure your email service is properly connected
- Check the EmailJS dashboard for error logs

**Issue**: CORS errors
- **Solution**: EmailJS should work out of the box, but if you see CORS errors:
  - Go to EmailJS Dashboard → Account → General
  - Add your domain to the whitelist
  - For local development, add `http://localhost:5173`

## EmailJS Pricing

- **Free Plan**: 200 emails/month
- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $15/month - 5,000 emails

For most small businesses, the free plan is sufficient to get started.

## Security Best Practices

1. ✅ Never commit your `.env` file to Git (already in `.gitignore`)
2. ✅ Use environment variables for all credentials
3. ✅ For production, set environment variables in your hosting platform
4. ✅ Consider enabling reCAPTCHA in EmailJS settings to prevent spam
5. ✅ Monitor your EmailJS dashboard for unusual activity

## GitHub Actions / Deployment

When deploying via GitHub Actions or other platforms:

1. Add your EmailJS credentials as **secrets** in your deployment platform
2. For GitHub Actions:
   - Go to Repository → Settings → Secrets and variables → Actions
   - Add three secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured to use these secrets.

## Advanced Configuration

### Auto-Reply Template

You can create a second template to send an automatic reply to customers:

1. Create a new template in EmailJS
2. Set the "To Email" to `{{from_email}}`
3. Customize the message to thank them for contacting you
4. In your Contact form code, add a second `emailjs.send()` call

### Form Validation

The contact form already includes:
- Required fields validation
- Email format validation
- Loading state during submission
- Success/error messages

### Custom Styling

To customize the success/error messages, edit `src/pages/Contact.css`:

```css
.submit-message.success {
  /* Your custom success styles */
}

.submit-message.error {
  /* Your custom error styles */
}
```

## Support

If you need help:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com

---

**Setup Complete!** 🎉

Your contact form is now ready to collect leads for Sparkly Cleaning!


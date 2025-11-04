# Sparkly Cleaning - Design Rules & Guidelines

## Overview
This document outlines the design system and rules for the Sparkly Cleaning website to ensure consistency across all components and pages.

## Color Palette

### Primary Colors
- **Primary Blue**: `#00A8FF` - Used for CTAs, links, active states
- **Primary Dark**: `#0088CC` - Hover states for primary buttons
- **Primary Light**: `#E6F7FF` - Background highlights, light sections

### Neutral Colors
- **White**: `#FFFFFF` - Main background, card backgrounds
- **Light Gray**: `#F5F5F7` - Section backgrounds, borders
- **Medium Gray**: `#6B7280` - Secondary text, descriptions
- **Dark Gray**: `#1F2937` - Headings, primary text
- **Border Gray**: `#E5E7EB` - Borders, dividers

### Accent Colors
- **Yellow**: `#FFC107` - Star ratings
- **Success Green**: `#10B981` - Success messages
- **Error Red**: `#EF4444` - Error messages

## Typography

### Font Family
- **Primary Font**: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif
- **Fallback**: System fonts for optimal performance

### Font Sizes
- **Hero Heading**: 48px - 56px (3rem - 3.5rem)
- **H1**: 40px - 48px (2.5rem - 3rem)
- **H2**: 32px - 36px (2rem - 2.25rem)
- **H3**: 24px - 28px (1.5rem - 1.75rem)
- **H4**: 20px - 22px (1.25rem - 1.375rem)
- **Body Large**: 18px (1.125rem)
- **Body Regular**: 16px (1rem)
- **Body Small**: 14px (0.875rem)
- **Caption**: 12px (0.75rem)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Headings**: 1.2 - 1.3
- **Body Text**: 1.6 - 1.7
- **Tight**: 1.4 (for buttons, labels)

## Spacing System

Use consistent spacing scale based on 4px base unit:
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 40px (2.5rem)
- **3xl**: 48px (3rem)
- **4xl**: 64px (4rem)
- **5xl**: 80px (5rem)
- **6xl**: 96px (6rem)

## Layout

### Container
- **Max Width**: 1200px - 1280px
- **Padding**: 16px (mobile), 24px (tablet), 32px (desktop)
- **Margin**: Auto-centered

### Grid System
- **Columns**: 12-column grid
- **Gap**: 24px (desktop), 16px (mobile)

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## Components

### Buttons

#### Primary Button
- **Background**: Primary Blue (#00A8FF)
- **Text**: White
- **Padding**: 12px 24px (md), 14px 32px (lg)
- **Border Radius**: 6px - 8px
- **Font Weight**: 600
- **Font Size**: 14px - 16px
- **Hover**: Darker blue (#0088CC)
- **Transition**: all 0.2s ease

#### Secondary Button
- **Background**: Transparent
- **Text**: Primary Blue
- **Border**: 2px solid Primary Blue
- **Padding**: 12px 24px
- **Border Radius**: 6px - 8px
- **Hover**: Light blue background

### Cards

#### Service Card
- **Background**: White
- **Padding**: 32px (2rem)
- **Border Radius**: 12px - 16px
- **Shadow**: 0 2px 8px rgba(0, 0, 0, 0.08)
- **Hover**: Shadow elevation - 0 4px 16px rgba(0, 0, 0, 0.12)
- **Transition**: all 0.3s ease

#### Testimonial Card
- **Background**: White
- **Padding**: 24px - 32px
- **Border Radius**: 12px
- **Border**: 1px solid #E5E7EB (optional)
- **Shadow**: 0 1px 4px rgba(0, 0, 0, 0.06)

### Icons
- **Size**: 48px - 64px (service icons)
- **Background**: Light blue circle (#E6F7FF)
- **Padding**: 16px
- **Border Radius**: 50% (circular)
- **Color**: Primary Blue (#00A8FF)

### Forms

#### Input Fields
- **Background**: White
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 6px
- **Padding**: 12px 16px
- **Font Size**: 16px
- **Focus Border**: Primary Blue (#00A8FF)
- **Focus Shadow**: 0 0 0 3px rgba(0, 168, 255, 0.1)

#### Labels
- **Font Size**: 14px
- **Font Weight**: 500
- **Color**: Dark Gray (#1F2937)
- **Margin Bottom**: 8px

#### Textarea
- **Min Height**: 120px
- **Resize**: vertical

### Navigation

#### Header
- **Background**: White
- **Height**: 72px - 80px
- **Shadow**: 0 2px 4px rgba(0, 0, 0, 0.04)
- **Position**: Sticky top

#### Nav Links
- **Font Size**: 15px - 16px
- **Font Weight**: 500
- **Color**: Dark Gray (#1F2937)
- **Hover**: Primary Blue (#00A8FF)
- **Active**: Primary Blue (#00A8FF)
- **Transition**: color 0.2s ease

#### Logo
- **Font Size**: 18px - 20px
- **Font Weight**: 700
- **Color**: Dark Gray (#1F2937)
- **Icon**: Blue diamond/sparkle icon

### Hero Section
- **Min Height**: 500px - 600px
- **Background**: Image with dark overlay (rgba(0, 0, 0, 0.3-0.4))
- **Text Color**: White
- **Alignment**: Center or Left
- **Padding**: 80px - 120px vertical

### Footer
- **Background**: #F5F5F7 (Light Gray)
- **Padding**: 48px - 64px vertical
- **Text Color**: Medium Gray (#6B7280)
- **Link Color**: Dark Gray (#1F2937)
- **Link Hover**: Primary Blue (#00A8FF)

## Images

### Aspect Ratios
- **Hero**: 16:9 or 21:9
- **Service Icons**: 1:1 (square)
- **Team Photos**: 1:1 (circular)
- **Testimonial Background**: 4:3 or 16:9

### Image Treatment
- **Border Radius**: 12px - 16px (general), 50% (team photos)
- **Object Fit**: cover
- **Loading**: lazy loading for performance

## Animations & Transitions

### Standard Timing
- **Fast**: 0.15s - Micro-interactions
- **Medium**: 0.2s - 0.3s - Hover states, color changes
- **Slow**: 0.4s - 0.5s - Large movements, page transitions

### Easing Functions
- **Default**: ease
- **Smooth**: cubic-bezier(0.4, 0, 0.2, 1)
- **Bounce**: cubic-bezier(0.68, -0.55, 0.265, 1.55)

### Hover Effects
- **Buttons**: Scale slightly (1.02), shadow elevation
- **Cards**: Shadow elevation, slight translate up (2-4px)
- **Images**: Scale (1.05) within container

## Accessibility

### Contrast Ratios
- **Body Text**: Minimum 4.5:1
- **Large Text**: Minimum 3:1
- **Interactive Elements**: Clear focus states

### Focus States
- **Outline**: 2px solid Primary Blue
- **Offset**: 2px
- **Border Radius**: Match element

### Interactive Elements
- **Minimum Size**: 44x44px (touch targets)
- **Spacing**: Minimum 8px between elements

## Iconography

### Icon Library
- Use React Icons or similar
- Consistent stroke width: 2px
- Style: Rounded, modern

### Common Icons
- Home: Building/house icon
- Services: Tool/cleaning related icons
- Contact: Phone, email, location icons
- Social: Brand icons

## Content Guidelines

### Headings
- Clear, action-oriented
- Sentence case for most headings
- Title case for navigation

### Body Copy
- Clear, concise language
- Professional but friendly tone
- Short paragraphs (2-3 sentences)

### CTAs
- Action-oriented verbs
- Create urgency when appropriate
- Examples: "Get a Free Quote", "Book Your Cleaning Now", "Learn More"

## Page-Specific Rules

### Home Page
1. **Hero Section**: Large image, compelling headline, clear CTA
2. **Services Overview**: 4 main services in grid (2x2 on desktop)
3. **Why Choose Us**: 3 value propositions with icons
4. **Testimonials**: 3 reviews with star ratings

### Services Page
1. **Hero Section**: Smaller than home, service-focused messaging
2. **Filter Tabs**: All Services, Residential, Commercial, Specialty
3. **Service Grid**: 3 columns on desktop, detailed cards
4. **FAQ Section**: Expandable accordion

### About Us Page
1. **Hero Section**: Team-focused imagery
2. **Story Section**: Text + image layout
3. **Core Values**: 3 values with icons
4. **Team Section**: Grid of team members with photos

### Contact Page
1. **Hero Section**: Minimal or no hero
2. **Contact Form**: Left side (2/3 width)
3. **Contact Info**: Right side (1/3 width) - phone, email, hours
4. **Form Fields**: Name, Email, Phone, Service dropdown, Message

## Performance Guidelines

### Image Optimization
- Use WebP with fallbacks
- Lazy load below-the-fold images
- Responsive images with srcset

### Code Splitting
- Route-based code splitting
- Lazy load components when appropriate

### Bundle Size
- Keep bundle < 200KB (initial load)
- Monitor with Lighthouse

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Version**: 1.0  
**Last Updated**: November 2024  
**Maintained By**: Development Team


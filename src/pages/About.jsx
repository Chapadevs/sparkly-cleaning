import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';
import { FaShieldAlt, FaUsers, FaLeaf } from 'react-icons/fa';
import './About.css';

const About = () => {
  const coreValues = [
    {
      icon: <FaShieldAlt />,
      title: 'Unmatched Quality',
      description: 'We use the best products and strategies to deliver a spotless workspace every time. Your satisfaction is our top priority.'
    },
    {
      icon: <FaUsers />,
      title: 'Trained Professionals',
      description: 'Our team is vetted, trained, and insured. You can have peace of mind knowing your home is safe and in trusted hands.'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly Practices',
      description: 'We are committed to protecting the environment by using sustainable, non-toxic products. We care for your home and our planet.'
    }
  ];

  const teamMembers = [
    {
      name: 'Jane Doe',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      description: 'With over a decade of experience, Jane founded Sparkly Cleaning to bring a higher standard of care to the industry.'
    },
    {
      name: 'John Smith',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      description: 'John makes everything run smoothly, from scheduling to quality control, guaranteeing a flawless client experience.'
    },
    {
      name: 'Maria Garcia',
      position: 'Lead Cleaning Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      description: 'Maria leads our cleaning teams with an expert eye for detail and a passion for making homes everywhere spotless.'
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Absolutely Reliable with the service! My house has never been cleaner. the team was professional, punctual, and incredibly thorough. highly recommend Sparkly Cleaning!",
      author: "Sarah J.",
      service: "Springbrook"
    },
    {
      rating: 5,
      text: "The attention to detail was amazing. They cleaned places I didn't even think to look. It was like walking into a brand new home every time they left.",
      author: "Michael B.",
      service: "Berkleyview"
    }
  ];

  return (
    <div className="about-page">
      <Hero
        title="Dedicated to a Cleaner, Happier Home"
        subtitle="Sparkly Cleaning is committed to providing top-quality, reliable, and eco-friendly cleaning services for your space."
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
        height="medium"
        alignment="center"
      />

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="story-title">Our Story</h2>
              <h3 className="story-subtitle">Founded on a Passion for Perfection</h3>
              <p className="story-description">
                Sparkly Cleaning was born from a simple idea: that a clean home is a happy home. 
                We started with a mission to deliver exceptional cleaning services with a personal 
                touch, ensuring every client feels the sparkle of a truly clean space. Our journey 
                is built on trust, quality, and a commitment to our community.
              </p>
              <p className="story-description">
                Over the years, we've grown from a small local team into a trusted name in 
                professional cleaning. Every member of our team shares the same passion for 
                excellence and dedication to making your space shine.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80" 
                alt="Our cleaning team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our commitment to you.
            </p>
          </div>
          <div className="grid grid-3">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p className="section-subtitle">
              The dedicated professionals who make your home sparkle.
            </p>
          </div>
          <div className="grid grid-3 team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section-about">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our happy customers have to say.
            </p>
          </div>
          <div className="grid grid-2 testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                text={testimonial.text}
                author={testimonial.author}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section-about">
        <div className="container">
          <div className="cta-content-about">
            <h2 className="cta-title-about">Ready for a Sparkling Home?</h2>
            <p className="cta-text-about">
              Let us handle the cleaning, so you can focus on what truly matters. 
              Get your free, no-obligation quote today.
            </p>
            <a href="/contact" className="btn-primary cta-btn-about">
              Book Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


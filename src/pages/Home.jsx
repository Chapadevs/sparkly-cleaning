import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { 
  FaHome, 
  FaBuilding, 
  FaBroom, 
  FaTruck,
  FaCheckCircle,
  FaLeaf,
  FaAward
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Cleaning',
      description: 'Keep your home consistently clean with our scheduled services.',
      link: '/services'
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for offices and commercial spaces.',
      link: '/services'
    },
    {
      icon: <FaBroom />,
      title: 'Deep Cleaning',
      description: 'A thorough, top-to-bottom clean for a fresh start.',
      link: '/services'
    },
    {
      icon: <FaTruck />,
      title: 'Move-In/Out Cleaning',
      description: 'Ensure a spotless transition for your next move.',
      link: '/services'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaCheckCircle />,
      title: 'Trusted Professionals',
      description: 'Our team is vetted, trained, and insured for your peace of mind.'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly Products',
      description: 'We use safe, non-toxic products that are effective and environmentally friendly.'
    },
    {
      icon: <FaAward />,
      title: 'Satisfaction Guaranteed',
      description: "If you're not satisfied, we'll come back and make it right."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Sparkly Cleaning did an incredible job! My house has never been cleaner. The team was professional, punctual, and very thorough. Highly recommend!",
      author: "Sarah J."
    },
    {
      rating: 5,
      text: "The attention to detail was amazing. I was so impressed with the deep clean service. It felt like moving into a brand new home. Thank you!",
      author: "Michael B."
    },
    {
      rating: 5,
      text: "Reliable, trustworthy, and they use eco-friendly products which is a huge plus for me. I've been using their weekly service for months and couldn't be happier.",
      author: "Emily R."
    }
  ];

  return (
    <div className="home">
      <Hero
        title="Your Home, Spotlessly Clean."
        subtitle="Professional, reliable, and eco-friendly cleaning services for a brighter, healthier home."
        buttonText="Book Your Cleaning Now"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
        height="large"
        alignment="left"
      />

      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Cleaning Services</h2>
            <p className="section-subtitle">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section why-choose-us-section">
        <div className="container">
          <div className="why-choose-us-content">
            <div className="why-choose-us-image">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80" 
                alt="Professional cleaners"
              />
            </div>
            <div className="why-choose-us-text">
              <h2 className="section-title">Why Choose Us?</h2>
              <div className="benefits-list">
                {whyChooseUs.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Customers Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our happy customers have to say.
            </p>
          </div>
          <div className="grid grid-3">
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
    </div>
  );
};

export default Home;


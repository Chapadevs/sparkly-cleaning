import { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { 
  FaHome, 
  FaBroom, 
  FaTruck, 
  FaBuilding, 
  FaStore, 
  FaHammer,
  FaCouch,
  FaWindowMaximize,
  FaSprayCan
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allServices = [
    {
      icon: <FaHome />,
      title: 'Standard Home Cleaning',
      description: 'Our regular cleaning service to keep your home consistently fresh and tidy.',
      category: 'residential',
      details: 'Includes dusting, vacuuming, mopping, and bathroom/kitchen cleaning.'
    },
    {
      icon: <FaBroom />,
      title: 'Deep Cleaning',
      description: 'A thorough, top-to-bottom clean for a home that feels brand new.',
      category: 'residential',
      details: 'Comprehensive cleaning including appliances, baseboards, and hard-to-reach areas.'
    },
    {
      icon: <FaTruck />,
      title: 'Move-In/Move-Out Cleaning',
      description: 'Ensure a spotless transition for your next move with our detailed cleaning.',
      category: 'specialty',
      details: 'Complete cleaning of empty spaces, perfect for new tenants or buyers.'
    },
    {
      icon: <FaBuilding />,
      title: 'Office Cleaning',
      description: 'Maintain a professional and healthy work environment for your employees and clients.',
      category: 'commercial',
      details: 'Desk cleaning, floor care, restroom sanitization, and trash removal.'
    },
    {
      icon: <FaStore />,
      title: 'Retail Space Cleaning',
      description: 'Create an inviting shopping experience with a sparkling clean retail location.',
      category: 'commercial',
      details: 'Floor maintenance, display dusting, entrance cleaning, and more.'
    },
    {
      icon: <FaHammer />,
      title: 'Post-Construction Cleaning',
      description: 'We handle the dust and debris, so your new space is ready for occupancy.',
      category: 'specialty',
      details: 'Thorough cleanup after construction or renovation projects.'
    },
    {
      icon: <FaCouch />,
      title: 'Carpet Cleaning',
      description: 'Revitalize your carpets, removing deep-seated dirt, stains, and allergens.',
      category: 'specialty',
      details: 'Professional steam cleaning and stain removal for all carpet types.'
    },
    {
      icon: <FaWindowMaximize />,
      title: 'Window Washing',
      description: 'Enjoy streak-free, crystal-clear windows that let the natural light shine in.',
      category: 'specialty',
      details: 'Interior and exterior window cleaning for homes and businesses.'
    },
    {
      icon: <FaSprayCan />,
      title: 'Upholstery Cleaning',
      description: 'Refresh your furniture and remove stains and odors with gentle cleaning methods.',
      category: 'specialty',
      details: 'Safe and effective cleaning for sofas, chairs, and other upholstered items.'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeFilter);

  const faqItems = [
    {
      question: "What's included in a deep clean?",
      answer: "A deep clean is a more intensive service than a standard clean. It includes all the regular tasks plus cleaning inside cabinets and drawers, inside the oven and fridge, detailed baseboard cleaning, and more. It's designed to get your home to a new level of cleanliness."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No, our team brings all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products that are safe for your family and pets."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, Sparkly Cleaning is fully insured and bonded for your protection and peace of mind. All our team members are thoroughly vetted and trained."
    }
  ];

  return (
    <div className="services-page">
      <Hero
        title="Comprehensive Cleaning Solutions for Every Need"
        subtitle="From sparkling homes to pristine offices, discover the perfect cleaning service for your space."
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=80"
        height="medium"
        alignment="center"
      />

      <section className="section services-filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Services
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'specialty' ? 'active' : ''}`}
              onClick={() => setActiveFilter('specialty')}
            >
              Specialty Services
            </button>
          </div>

          <div className="grid grid-3 services-grid">
            {filteredServices.map((service, index) => (
              <div key={index} className="service-card-wrapper">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
                <p className="service-details">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready for a Spotless Space?</h2>
            <p className="cta-text">
              Contact us today to get a personalized estimate for your cleaning needs. 
              Our friendly team is ready to help you achieve the clean home or office you deserve.
            </p>
            <a href="/contact" className="btn-primary cta-btn">
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


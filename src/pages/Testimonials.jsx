import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const allTestimonials = [
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
    },
    {
      rating: 5,
      text: "Best cleaning service I've ever used! They transformed my office space and now my employees love coming to work. Professional and efficient.",
      author: "David K.",
      service: "Commercial Cleaning"
    },
    {
      rating: 5,
      text: "I hired them for a move-out cleaning and the landlord was so impressed! Got my full deposit back. Thank you Sparkly Cleaning!",
      author: "Amanda L.",
      service: "Move-Out Cleaning"
    },
    {
      rating: 5,
      text: "The team is always on time, respectful, and does an amazing job. I love coming home to a spotless house every week!",
      author: "Robert M.",
      service: "Weekly Cleaning"
    },
    {
      rating: 5,
      text: "After our renovation, the house was a mess. Sparkly Cleaning handled the post-construction cleanup perfectly. Couldn't have done it without them!",
      author: "Jennifer S.",
      service: "Post-Construction"
    },
    {
      rating: 5,
      text: "My carpets look brand new! The stain removal was incredible. Professional service from start to finish.",
      author: "Thomas W.",
      service: "Carpet Cleaning"
    },
    {
      rating: 5,
      text: "Great communication, fair pricing, and exceptional results. This is my go-to cleaning company now!",
      author: "Lisa P."
    }
  ];

  return (
    <div className="testimonials-page">
      <Hero
        title="What Our Customers Say"
        subtitle="Don't just take our word for it. See what our satisfied clients have to say about Sparkly Cleaning."
        backgroundImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80"
        height="medium"
        alignment="center"
      />

      <section className="section testimonials-content-section">
        <div className="container">
          <div className="testimonials-intro text-center">
            <h2>Trusted by Hundreds of Happy Customers</h2>
            <p className="intro-text">
              Our commitment to excellence shows in every review. Here's what real customers 
              are saying about their experience with Sparkly Cleaning.
            </p>
          </div>

          <div className="grid grid-3 testimonials-main-grid">
            {allTestimonials.map((testimonial, index) => (
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

      <section className="section cta-section-testimonials">
        <div className="container">
          <div className="cta-content-testimonials">
            <h2 className="cta-title-testimonials">Ready to Experience the Difference?</h2>
            <p className="cta-text-testimonials">
              Join hundreds of satisfied customers who trust Sparkly Cleaning for their home and office needs.
            </p>
            <a href="/contact" className="btn-primary cta-btn-testimonials">
              Book Your Cleaning Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;


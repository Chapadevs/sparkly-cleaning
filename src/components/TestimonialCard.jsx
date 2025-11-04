import { FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ rating, text, author, service }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'star filled' : 'star'}
          />
        ))}
      </div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <p className="author-name">- {author}</p>
        {service && <p className="author-service">{service}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;


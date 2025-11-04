import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        <div className="service-icon">{icon}</div>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {link && (
        <a href={link} className="service-link">
          Learn More →
        </a>
      )}
    </div>
  );
};

export default ServiceCard;


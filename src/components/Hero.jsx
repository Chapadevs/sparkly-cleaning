import './Hero.css';

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage, 
  height = 'large',
  alignment = 'left' 
}) => {
  return (
    <section 
      className={`hero hero-${height} hero-${alignment}`}
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {buttonText && buttonLink && (
            <a href={buttonLink} className="btn-primary hero-btn">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;


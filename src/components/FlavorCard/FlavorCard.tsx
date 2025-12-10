import "@/components/FlavorCard/FlavorCard.css";

interface FlavorCardProps {
  tag: string;
  image: string;
  name: string;
  description: string;
  className?: string;
}

function FlavorCard({ tag, image, name, description, className = "" }: FlavorCardProps) {
  return (
    <div className={`flavor-card ${className}`}>
      <div className={`flavor-card__tag ${className}`}>{tag}</div>
      <img src={image} alt={name} className="flavor-card__image" />
      <h3 className="flavor-card__title">{name}</h3>
      <p className="flavor-card__description">{description}</p>
      <button className={`flavor-card__btn ${className}`}>Add to Cart</button>
    </div>
  );
}

export default FlavorCard;

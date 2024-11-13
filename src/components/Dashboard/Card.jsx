// Card Component (Used to display each card's data)
import "./dashboard.css";

const cardClass = 'card';
const textClass = 'card-text';

const Card = ({ title, description, color }) => {
    return (
      <div className={cardClass}>
        <h2 className="card-title">{title}</h2>
        <p className={textClass}>{description}</p>
        <div className={`card-content card-${color}`}></div>
      </div>
    );
  };

  export default Card;
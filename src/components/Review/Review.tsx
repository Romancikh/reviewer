import "./Review.css";

type ReviewProps = {
  photo: string;
  name: string;
  text: string;
  rating: number;
};

function Review({ photo, name, text, rating }: ReviewProps) {
  return (
    <div className="review">
      <img src={photo} alt="user" className="review__photo" />
      <div className="review__content">
        <span className="review__name">{name}</span>
        <p className="review__text">{text}</p>
      </div>
      <div className="review__rating">{rating}/5</div>
    </div>
  );
}

export default Review;

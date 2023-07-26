import "./ReviewContent.css";

type ReviewContentProps = {
  name: string;
  text: string;
};

function ReviewContent({ name, text }: ReviewContentProps) {
  return (
    <div className="review__content">
      <span className="review__name">{name}</span>
      <p className="review__text">{text}</p>
    </div>
  );
}

export default ReviewContent;

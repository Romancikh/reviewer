import "./Reply.css";

export type ReplyProps = {
  key: string;
  photo: string;
  name: string;
  text: string;
  rating: number;
};

function Reply({ photo, name, text, rating }: ReplyProps) {
  return (
    <div className="reply">
      <img src={photo} alt="user" className="reply__photo" />
      <div className="reply__content">
        <span className="reply__name">{name}</span>
        <p className="reply__text">{text}</p>
      </div>
      <div className="reply__rating">{rating}/5</div>
    </div>
  );
}

export default Reply;

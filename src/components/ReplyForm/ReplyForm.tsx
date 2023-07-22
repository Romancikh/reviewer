import Button from "../Button/Button";
import Parameter from "../Parameter/Parameter";
import Textarea from "../Textarea/Textarea";
import "./ReplyForm.css";

function ReplyForm() {
  return (
    <div className="reply-form">
      <h1 className="reply-form__title">How nice was my reply?</h1>
      <div className="reply-form__content">
        <form className="reply-form__fields">
          <div className="reply-form__parameters">
            <Parameter label="Cleanliness" value={1} />
            <Parameter label="Customer Service" value={2} />
            <Parameter label="Speed" value={3} />
            <Parameter label="Location" value={4} />
            <Parameter label="Facilities" value={5} />
          </div>
          <Textarea label="reply-text" placeholder="What could we improve?" />
          <Button type="submit" className="reply-form__button">
            Send
          </Button>
        </form>
        <span className="reply-form__rating">3/5</span>
      </div>
    </div>
  );
}

export default ReplyForm;

import "./ReplyContainer.css";
import Reply, { ReplyProps } from "../Reply/Reply";

type ReplyContainerProps = {
  replies: ReplyProps[];
};

function ReplyContainer({ replies }: ReplyContainerProps) {
  return (
    <div className="reply-container">
      {replies.map((reply) => (
        <Reply
          key={reply.key}
          photo={reply.photo}
          name={reply.name}
          text={reply.text}
          rating={reply.rating}
        />
      ))}
    </div>
  );
}

export default ReplyContainer;

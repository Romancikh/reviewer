import "./ReplyContainer.css";
import Reply, { ReplyProps } from "../Reply/Reply";

type ReplyContainerProps = {
  replies: ReplyProps[];
};

function ReplyContainer({ replies }: ReplyContainerProps) {
  return replies.length ? (
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
  ) : (
    <h1 className="reply-container reply-container_empty">No replies yet</h1>
  );
}

export default ReplyContainer;

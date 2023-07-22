import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./App.css";
import ReplyContainer from "./components/ReplyContainer/ReplyContainer";
import { ReplyProps } from "./components/Reply/Reply";
import ReplyForm from "./components/ReplyForm/ReplyForm";

function App() {
  const [replies, setReplies] = useState<ReplyProps[]>([]);

  const handleReply = (rating: number, text: string) => {
    setReplies([
      ...replies,
      {
        key: uuid(),
        name: "John Doe",
        photo: `https://lipsum.app/random/50x50?=${uuid()}`,
        text,
        rating,
      },
    ]);
  };

  return (
    <>
      <ReplyForm onReply={handleReply} />
      <div className="divisor" />
      <ReplyContainer replies={replies} />
    </>
  );
}

export default App;

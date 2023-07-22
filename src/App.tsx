import { v4 as uuid } from "uuid";
import "./App.css";
import ReplyContainer from "./components/ReplyContainer/ReplyContainer";
import { ReplyProps } from "./components/Reply/Reply";
import ReplyForm from "./components/ReplyForm/ReplyForm";

function App() {
  const replies: ReplyProps[] = [
    {
      key: uuid(),
      photo: "https://lipsum.app/id/1/50x50/",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris. Vivamus massa justo, sagittis non viverra sed, sodales non nisi. Nunc semper, massa a aliquet dictum, enim nisi malesuada orci, et elementum lectus turpis et velit. Nam vel felis vitae tortor dignissim malesuada. Nam suscipit, justo eu elementum pulvinar, magna sem tempor ex, vitae iaculis tellus odio non nisl. Duis dolor orci, viverra ut finibus sed, aliquet vitae tortor. Proin sodales ipsum ac ipsum hendrerit tempus. Nunc nec nibh nibh. Aenean consequat auctor posuere. Integer sed magna volutpat, efficitur nisl ut, dignissim neque. Vestibulum convallis nec dui a euismod. Duis dignissim magna in mattis pulvinar. Sed blandit nibh quis arcu ornare, sit amet fermentum nisi rhoncus.",
      rating: 5,
    },
    {
      key: uuid(),
      photo: "https://lipsum.app/id/2/50x50/",
      name: "Jane Doe",
      text: "Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit varius laoreet in scelerisque erat. Suspendisse sed accumsan erat. Proin sagittis ultricies orci id pellentesque. Fusce iaculis mauris quis pulvinar lobortis. Donec sit amet porttitor lorem, vel scelerisque justo.",
      rating: 4,
    },
    {
      key: uuid(),
      photo: "https://lipsum.app/id/5/50x50/",
      name: "John Doe",
      text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a iaculis magna, vitae lacinia metus. Etiam at lobortis ligula. Ut libero arcu, tincidunt in sodales nec, sodales vitae neque. Donec condimentum, est ut viverra efficitur, diam sem tempor lacus, a auctor mi nibh vehicula neque. Morbi porttitor velit elit, hendrerit aliquam eros efficitur nec. Pellentesque pretium, erat eget vehicula molestie, lorem elit mattis neque, vel volutpat mi lacus sit amet quam. Quisque in malesuada tortor. Aliquam erat volutpat. Quisque nisl risus, elementum non lorem in, ultrices aliquet est. Nullam luctus finibus quam ut tempus. Nulla facilisi.",
      rating: 3,
    },
  ];
  return (
    <>
      <ReplyForm />
      <div className="divisor" />
      <ReplyContainer replies={replies} />
    </>
  );
}

export default App;

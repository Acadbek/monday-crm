import { Link } from "react-router-dom";
import AvatarDisplay from "./Avatar";
import Status from "./Status";
import Priority from "./Priority";
import Progress from "./Progress";
import DeleteBlog from "./DeleteBlog";

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-color"></div>
      <Link to={`ticket/${""}`} id="link">
        <h3>title</h3>
        <AvatarDisplay />
        <Status status="done" />
        <Priority priority={2} />
        <Progress progress={10} />
      </Link>
      <DeleteBlog />
    </div>
  );
};

export default TicketCard;

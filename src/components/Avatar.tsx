import blankAvatar from "../images/blank-profile-picture.webp";

type TicketType = {
  ticket?: {
    avatar: string;
    owner: string;
  };
};

const AvatarDisplay = ({ ticket }: TicketType) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket?.avatar ? ticket.avatar : blankAvatar}
          alt={"Photo of" + ticket?.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;

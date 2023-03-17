type StatusType = {
  status: string;
};

const Status = ({ status }: StatusType) => {
  const getColor = (status: string) => {
    let color;
    switch (status) {
      case "done":
        color = "rgb(187, 255, 201)";
        break;
      case "working on it":
        color = "rgb(255, 223, 187)";
        break;
      case "stuck":
        color = "rgb(255, 179, 187)";
        break;
      default:
        color = "rgb(187, 255, 255)";
    }
    return color;
  };

  return (
    <div
      style={{ backgroundColor: getColor(status) }}
      className="status-display"
    >
      {status}
    </div>
  );
};

export default Status;

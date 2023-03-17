import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const data = [
    {
      category: "Q1 2023",
      color: "red",
      title: "NFT safety 101 Video",
      owner: "swe-asad",
      avatar:
        "https://m.economictimes.com/thumb/msid-96587748,width-1200,height-900,resizemode-4,imgsize-76684/avatar-2-canva.jpg",
      status: "done",
      priority: 5,
      progress: 40,
      description: "ssssssssssss",
      timestamp: "2023-03-17",
    },
    {
      category: "Q1 2023",
      color: "red",
      title: "AI safety 101 Video",
      owner: "swe-asad",
      avatar:
        "https://m.economictimes.com/thumb/msid-96587748,width-1200,height-900,resizemode-4,imgsize-76684/avatar-2-canva.jpg",
      status: "done",
      priority: 5,
      progress: 40,
      description: "ssssssssssss",
      timestamp: "2023-03-17",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Project</h1>
      <div className="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;

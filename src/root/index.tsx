import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TicketPage from "../pages/TicketPage";
import Navbar from "../components/Nav";

const Root = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;

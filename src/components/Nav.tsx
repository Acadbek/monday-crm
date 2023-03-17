import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img onClick={() => navigate("/")} width={55} src={logo} alt="Logo" />
      </div>
      <div className="controls-container">
        <div onClick={() => navigate("/")} className="icon">
          ❮❮
        </div>
        <div onClick={() => navigate("/ticket")} className="icon create">
          +
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

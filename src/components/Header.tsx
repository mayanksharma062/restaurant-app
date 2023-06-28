import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header: React.FC = () => {
  const OnlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/37f248faab6fa8df62c797c590385fbf.png"
          alt="Restaurant-app-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {OnlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

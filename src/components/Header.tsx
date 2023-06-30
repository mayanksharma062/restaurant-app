import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../../public/logo.png";

const Header: React.FC = () => {
  const OnlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-pink-100 shadow-lg">
      <div>
        <img
          className="w-20 p-4"
          // src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/37f248faab6fa8df62c797c590385fbf.png"
          src="logo.png"
          alt="Restaurant-app-logo"
        />
      </div>
      <h1 className="p-4 text-lg font-bold">Food Ordering App</h1>
      <div className="flex items-center">
        <ul className="flex p-4">
          <li className="p-2">Online Status : {OnlineStatus ? "✔" : "🔴"}</li>
          <li className="p-2 hover:bg-slate-500 hover:py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:bg-slate-500 hover:py-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 hover:bg-slate-500 hover:py-2">
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li className="p-2 hover:bg-slate-500 hover:py-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 hover:bg-slate-500 hover:py-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

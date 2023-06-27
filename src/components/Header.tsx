import { Link } from "react-router-dom";

const Header : React.FC = ()=>{

    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/37f248faab6fa8df62c797c590385fbf.png" alt="Restaurant-app-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )

}

export default Header;
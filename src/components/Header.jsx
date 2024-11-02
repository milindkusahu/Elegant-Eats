import { useState } from "react";
import { WHITE_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={WHITE_LOGO} />
      </div>

      {/* Hamburger Menu Button */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Order Now</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

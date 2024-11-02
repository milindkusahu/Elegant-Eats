import { WHITE_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={WHITE_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
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

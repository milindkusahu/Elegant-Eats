import { BLACK_LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img className="logo" src={BLACK_LOGO} />
      </div>
      <div className="footer-nav-items">
        <ul>
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

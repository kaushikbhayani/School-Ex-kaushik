import React from "react";
import "./FooterStyle.css";
import {
  FaSearchLocation,
  FaPhoneAlt,
  FaMailBulk,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="main-footer">
      <br />
      <br />
      <div className="container">
        <div className="row">
          {/* colum 1 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="middle">GET IN TOUCH</h4>
            <p className="get">___</p>
            <ul className="list-unstyled">
              <li>
                <FaSearchLocation />
                <span className="spanstyle">
                  Nachiketa Schooling System, <br />
                  Jivraj Park, Ambika Township,
                  <br />
                  Nr. SpeedWell party Plot
                  <br />
                  Rajkor
                </span>
              </li>{" "}
              <br />
              <li>
                <FaPhoneAlt />
                <span className="spanstyle">
                  +91-45 89 73 45 64 <br />
                  +91-21 45 22 14 90
                </span>
              </li>
              <br />
              <li>
                <FaMailBulk />
                <span className="spanstyle">info@nachiketaschool.org</span>
              </li>
              <br />
            </ul>
          </div>
          {/* colum 2 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="middle">LATEST NEWS</h4>
            <p className="get">___</p>
            <ul className="list-unstyled">
              <li>
                <img
                  className="img"
                  src="https://www.nachiketaschoolingsystem.org/wp-content/uploads/2022/05/MHDV5374-scaled.jpg"
                />
                <span className="spanstyle">EM SMILEY SUNDAY</span>
              </li>
              <li>
                <span className="spanstyles">JULY 21,2023</span>
              </li>
            </ul>
          </div>
          {/* colum 3 */}
          <div className="col-md-3 col-sm-6">
            <h4 className="middle">LET'S BE SOCIAL</h4>
            <p className="get">___</p>
            <ul className="list-unstyled">
              <li className="list-inline-item">
                <FaFacebook />
              </li>
              <li className="list-inline-item">
                <FaGooglePlus />
              </li>
              <li className="list-inline-item">
                <FaInstagram />
              </li>
              <li className="list-inline-item">
                <FaTwitterSquare />
              </li>
              <li className="list-inline-item">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

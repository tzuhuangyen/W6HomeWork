//class component
import React from "react";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Contact Us</h3>
                <p>Email: yen@example.com</p>
                <p>Phone: +1 123-456-7890</p>
              </div>
              <div className="col-md-6">
                <div className="social-icons">
                  <a href="#" target="_blank"></a>
                  {/* <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="footer-text">
          &copy; 2023 Yen Website. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;

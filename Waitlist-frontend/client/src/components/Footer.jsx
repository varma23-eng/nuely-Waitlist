import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-column">

          <p className="footer-small">STAY CONNECTED</p>

          <div className="instagram">

            <FaInstagram className="icon" />

            <div>

              <a
  href="https://www.instagram.com/thenuely"
  target="_blank"
  rel="noopener noreferrer"
  className="instagram-link"
>
  @thenuely
</a>

              <p>
                Follow us for skincare tips,
                <br />
                product launches &
                <br />
                exclusive offers.
              </p>

              <a
  href="https://www.instagram.com/thenuely"
  target="_blank"
  rel="noopener noreferrer"
  className="follow-btn"
>
  FOLLOW US →
</a>

            </div>

          </div>

        </div>

        {/* CENTER */}

        <div className="footer-column center">

          <h2>LAUNCHING SOON</h2>

          <p>
            Pure. Honest. Conscious.
            <br />
            Skincare that gives back to you
            <br />
            and the planet.
          </p>

        </div>

        {/* RIGHT */}

        <div className="footer-column">

          <p className="footer-small">CONTACT US</p>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@thenuely.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 77805 22203</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 79816 22203</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Hyderabad, Telangana, India</span>
          </div>

        </div>

      </div>

    </footer>
  );
}
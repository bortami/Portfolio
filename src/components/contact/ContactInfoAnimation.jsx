import React from "react";
import Fade from "react-reveal/Fade";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <Fade bottom>
          <h4>What’s your story? Get in touch</h4>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
        </Fade>
        <ul>
          <Fade bottom>
            <li className="media">
              <i className="icon icon-map"></i>
              <span className="media-body">
                123 Stree New York City , United States Of America 750065.
              </span>
            </li>

            <li className="media">
              <i className="icon icon-envelope"></i>
              <span className="media-body">support@domain.com</span>
            </li>

            <li className="media">
              <i className="icon icon-phone"></i>
              <span className="media-body">+044 9696 9696 3636</span>
            </li>
          </Fade>
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;

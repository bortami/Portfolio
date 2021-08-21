import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Oklahoma City, Oklahoma, United States Of America
            </span>
          </li>

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">mi@chelletabor.com</span>
          </li>

          {/* <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+044 9696 9696 3636</span>
          </li> */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;

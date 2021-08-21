import React from "react";
import Fade from "react-reveal/Fade";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <Fade>
          <div className="embed-responsive embed-responsive-21by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
            ></iframe>
          </div>
        </Fade>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;

import React from "react";
import Fade from "react-reveal/Fade";

const AwardContnet = [
  {
    img: "a1",
    awardName: "Creative Designer",
    awardFor: "Site of the day",
  },
  {
    img: "a2",
    awardName: "Yearly Best Performer",
    awardFor: "Site of the day",
  },
  {
    img: "a3",
    awardName: "Best Learner Award",
    awardFor: "Site of the day",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <Fade bottom>
                <div className="icon">
                  <img src={`img/award/${val.img}.png`} alt="award image" />
                </div>
                <div className="media-body">
                  <h6>{val.awardName}</h6>
                  <p>{val.awardFor}</p>
                </div>
              </Fade>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;

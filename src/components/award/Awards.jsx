import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "Growth Driven Design",
    awardFor: "Expires 2023",
  },
  {
    img: "a2",
    awardName: "CMS Developer",
    awardFor: "Expires 2022",
  },
  {
    img: "a3",
    awardName: "Inbound Marketing",
    awardFor: "Expires 2022",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award image" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
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

import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  // phone: "+04 6545-9535-6515",
  email: "mi@chelletabor.com",
};

const sliderContent = {
  name: "Michelle Tabor",
  description: `I design and develop solutions for businesses. I
  specialize in creating optimized and streamlined websites, applications, integrations, and automations.`,
  btnText: " Download Resume",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            {/* <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a> */}
            <a href="mailto:mi@chelletabor.com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              {/* <li className="active">
                <a href="/">Light</a>
              </li>
              <li>
                <a href="/dark">Dark</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Certified HubSpot CMS Developer</p>
                  <p className="loop-text lead"> Front End Developer</p>
                  <p className="loop-text lead"> Operations Developer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="/Michelle-Tabor-Resume.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/header.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

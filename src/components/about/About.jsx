import React from "react";
import Social from "../Social";
import Testimonials from "../../components/testimonial/Testimonial";
import Services from "../../components/service/Service";
import Awards from "../../components/award/Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about image" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web Developer</p>
                  <h3>Michelle Tabor</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Certified HubSpot CMS Developer with over a decade of 
                    experience building functional, beautiful, and effective websites.  
                    I am from West Virginia, and I have found a home in Oklahoma.
                    I'm mostly self-taught with some refining from NewForce Software School.
                    
                  </p>
                  <p>
                  I love working with businesses to create the tools and apps that
                    help their businesses grow.
                    I focus on developing functional applications, integrations, and automations
                    to assist businesses streamline their processes and operations.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Michelle Tabor</span>
                        </li>
                        {/* <li>
                          <label>Most Recent Certifcation: </label>
                          <span>Hubspot</span>
                        </li> */}
                        {/* <li>
                          <label>Number of Dogs: </label>
                          <span>Two</span>
                        </li> */}
                        <li>
                          <label>Homebase: </label>
                          <span>Oklahoma City</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        {/* <li>
                          <label>Phone: </label>
                          <span>(405) 673 2181</span>
                        </li> */}
                        <li>
                          <label>Email: </label>
                          <span>mi@chelletabor.com</span>
                        </li>
                        {/* <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li> */}
                        <li>
                          <label>Open to New Projects: </label>
                          <span>Not Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Certifications.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
         /* End Testimonaials */}
        </div> 
      </section>
    </>
  );
};

export default About;

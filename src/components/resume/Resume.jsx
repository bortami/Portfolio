import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Director of Web Developmeny and Interactive`,
    jobType: `Bridges | In-Office`,
    jobDuration: `Jan 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Bridges Strategies and Digital Marketing",
    jobDescription: `I develop custom HubSpot based web soltuions.`,
  },
  {
    jobPosition: `Event Marketing Manager`,
    jobType: `EnMotive | In-Office`,
    jobDuration: `Nov 2019 - Dec 2020`,
    timeDuraton: `Full Time`,
    compnayName: "EnMotive / Gannett",
    jobDescription: `I created registration websites for endurance events. I timed live events using Chronotrack software, networking hardware, and RFID readers. I created and maintained databases for registrations, donations, and race timing results. I also managed all digital and social marketing for event clients.`,
  },
  {
    jobPosition: `Web and Graphic Designer`,
    jobType: `Self-Employeed | Freelance`,
    jobDuration: `Jan 2012 - Jan 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Self-Employed",
    jobDescription: `I designed and developed websites for various clients using multiple platforms such as Wix, Shopify, Wordpress, and custom coded options. I also performed graphic design services for physical products such as invitations, business cards, t-shirts, and signage.`,
  },
];

const educatonContent = [
  {
    passingYear: "2021",
    degreeTitle: "Associates in Science in Business Management",
    instituteName: "University Of Oklahoma",
  },
  {
    passingYear: "2018 - 2019",
    degreeTitle: "Certificate in Front-End Development",
    instituteName: "NewForece Software School",
  },
  {
    passingYear: "2014-2015",
    degreeTitle: "Accounting and Management",
    instituteName: "Marshall University",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "HubSpot and Web Development",
    descriptions: `I create themes, templates, email templates, and customized websites and web apps for clients using HubSpot CRM and CMS. I mainly use HubL, a python based templating language. I create custom web based applications using various frameworks, from python/django based web scraping apps to custom applications using a MERN stack.`,
  },
  {
    icon: "icon-desktop",
    title: "Auditing Technicals and Optimizations",
    descriptions: `I audit  marketing websites for technical SEO, usability, mobile responsiveness, and technical errors using manual and automated methods. I then optimize those sites to the most recent best practices for SEO and Core Web Vitals. This includes optimizing package loadouts, site structure, image sizes, metas and canonicals, redirects, and broken links and assets.`,
  },
  {
    icon: "icon-target",
    title: "Operations Development",
    descriptions: `Operationss Development is a fairly new term, but it means I build integrations, workflows, and script-based automations for marketing actions, contact management, database management to align business operations and processes with automated solutions in the business's software stack.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

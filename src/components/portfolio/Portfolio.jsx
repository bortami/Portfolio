import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiPlus } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            <Tab>All</Tab>
            <Tab>Web Design</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Writing</Tab>
            <Tab>Projects</Tab>
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                 <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Blog Redesign</h5>
                        <span>Sean's Wild World</span>
                        </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-9.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-9.jpg"
                          alt="Sean's Wild World"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-2.jpg"
                          alt="E-Learning App"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                      <h5>Event Landing Page</h5>
                        <span>Frozen Nose 5k</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-3.jpg"
                          alt="Visual Design"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-4.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-4.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-5.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-7.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-7.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-8.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-8.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Blog Redesign</h5>
                        <span>Sean's Wild World</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-8.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-8.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Blog Redesign</h5>
                        <span>Sean's Wild World</span>
                        </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-9.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-9.jpg"
                          alt="Sean's Wild World"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Event Landing Page</h5>
                        <span>Frozen Nose 5k</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-3.jpg"
                          alt="Visual Design"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-8.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-8.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-4.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-4.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-2.jpg"
                          alt=""
                          alt="E-Learning App"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-5.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-1.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-1.jpg"
                          alt=""
                          alt="E-Learning App"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-7.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-7.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-9.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-9.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-2.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-3.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-5.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;

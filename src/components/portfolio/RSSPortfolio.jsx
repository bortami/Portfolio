import React, {useEffect, useState} from "react";
import Masonry from "react-masonry-css";
import { FiPlus } from "react-icons/fi";
import { FaLockOpen } from "react-icons/fa";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};


export default function RSSPortfolio() {

  const [items, setItems] = useState([]);
  
  const RSS_URL = "http://blog.chelletabor.com/feeds/posts/default/-/portfolio?alt=rss";


const getRss = async (RSS_URL) => {
  const res = await fetch(`https://api.allorigins.win/get?url=${RSS_URL}`);
  const { contents } = await res.json();
  const feed = new window.DOMParser().parseFromString(contents, "text/xml");
  var items = feed.querySelectorAll("item");
  const feedItems = [...items].map((el)=> ({
    link: el.querySelector("link").innerHTML,
    title: el.querySelector("title").innerHTML,
    category: el.querySelector("category").innerHTML,
    image: el.querySelector("description").innerHTML.split(`src="`)
   }));
  setItems(feedItems);
};

useEffect(() => {
  getRss(RSS_URL);
})
    return (
        <div className="portfolio-content">
          
          <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {items.map((item) => {
          return (
            <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>{item.title}</h5>
                        <span>{item.category}</span>
                        </div>
                      {/* End .portfolio-info */}
                      <a
                        href={item.link}
                        >
                        <img
                          src={item.image[1]}
                          alt={item.title}
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
          );
        })}
                 
        
      
      </Masonry>
      </div>
    );
  }
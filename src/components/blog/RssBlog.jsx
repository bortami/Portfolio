import React, {useEffect, useState} from "react";


export default function RSSBlog() {

  const [items, setItems] = useState([]);
  
  const RSS_URL = "http://blog.chelletabor.com/rss.xml?category=blog";


const getRss = async (RSS_URL) => {
  const res = await fetch(`https://api.allorigins.win/get?url=${RSS_URL}`);
  const { contents } = await res.json();
  const feed = new window.DOMParser().parseFromString(contents, "text/xml");
  var items = feed.querySelectorAll("item");
  const feedItems = [...items].slice(0, 4).map((el)=> ({
    link: el.querySelector("link").innerHTML,
    title: el.querySelector("title").innerHTML,
    date: el.querySelector("pubDate").innerHTML.split("+"),
    image: el.querySelector("description").innerHTML.split(`src="`),
    author: el.querySelector("author").innerHTML.split(" ")
   }));
  setItems(feedItems);
};

useEffect(() => {
  getRss(RSS_URL);
})
    return (
        <div className="row">         
            {items.map((item) => {
             return (
                <div className="col-md-6 m-15px-tb">
                    <div className="blog-grid">
                        <div className="blog-img">
                            <a href={item.link}>
                                <img src={item.image[1]} alt="blog post"></img>
                            </a>
                        </div>
                        <div className="blog-info">
                            <div className="meta">{item.date[0]} - {item.author[1]+" "+item.author[2]}</div>
                                <h6>
                                    <a href={item.link}>
                                        {item.title}
                                    </a>
                                </h6>
                            </div>
                        </div>
                     </div>
                
            );
        })}
      </div>
    );
  }
import React from "react";

import "./NewsPostItem.css";

function NewsPostItem({ news }) {
  return (
    <div className="post-item clearfix">
      <img src={news.img} alt={news.title} />
      <h4>
        <a href="#">{news.title}</a>
        <p>{news.subtitle}...</p>
      </h4>
    </div>
  );
}

export default NewsPostItem;

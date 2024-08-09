import { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import CardFilter from "../CardFilter/CardFilter";
import NewsPostItem from "../NewsPostItem/NewsPostItem";

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/news").then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <div className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </div>
      </div>

      <div className="news">
        {news &&
          news.length > 0 &&
          news.map((eachItem) => (
            <NewsPostItem key={eachItem._id} news={eachItem} />
          ))}
      </div>
    </div>
  );
}

export default News;

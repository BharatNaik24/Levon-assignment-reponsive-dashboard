import { useEffect, useState } from "react";
import "./topSelling.css";
import axios from "axios";
import CardFilter from "../CardFilter/CardFilter";
import TopSellingItem from "../TopSellingItem/TopSellingItem";
const url = "http://localhost:4000/topselling";

function TopSelling() {
  const [topSell, topSellingFun] = useState();
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        topSellingFun(response.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <div className="card top-selling overflow-auto">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body pb-0">
          <h5 className="card-title">
            Top Selling<span>| {filter}</span>
          </h5>
        </div>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sold</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topSell &&
              topSell.length > 0 &&
              topSell.map((eachItem) => (
                <TopSellingItem key={eachItem._id} topSell={eachItem} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSelling;

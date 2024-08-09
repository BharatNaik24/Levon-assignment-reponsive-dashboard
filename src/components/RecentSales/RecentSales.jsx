import CardFilter from "../CardFilter/CardFilter";
import RecentSalesTable from "../RecentSalesTable/RecentSalesTable";
import { useEffect, useState } from "react";
import axios from "axios";
import "./recentSales.css";
function RecentSales() {
  const [recentSale, setRecentSaleFun] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/recentsales")
      .then((response) => {
        setRecentSaleFun(response.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body recent-sales-card-body">
        <div className="card-title recent-sales-card-title">
          Recent Sales <span className="recent-sales-filter">| {filter}</span>
        </div>
        <RecentSalesTable recentSale={recentSale} />
      </div>
    </div>
  );
}

export default RecentSales;

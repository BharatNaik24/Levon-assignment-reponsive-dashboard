import { useEffect, useState } from "react";
import CardFilter from "../CardFilter/CardFilter";
import axios from "axios";
import RecentActivityItem from "../RecentActivityItem/RecentActivityItem";
import "./RecentActivity.css";

function RecentActivity() {
  const [reacentAct, setRecentActivity] = useState("");
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/recentactiviy")
      .then((response) => {
        setRecentActivity(response.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity<span>| {filter}</span>
        </h5>
        <div className="activity">
          {reacentAct &&
            reacentAct.length > 0 &&
            reacentAct.map((eachitem) => (
              <RecentActivityItem key={eachitem._id} reacentAct={eachitem} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;

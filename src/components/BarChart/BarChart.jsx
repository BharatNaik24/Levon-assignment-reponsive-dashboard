import CardFilter from "../CardFilter/CardFilter";
import { useState } from "react";
import ReportChartsReport from "../BarChartReport/BarChartReport";

function Report() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">Reports/{filter}</h5>
      </div>
      <ReportChartsReport />
    </div>
  );
}

export default Report;

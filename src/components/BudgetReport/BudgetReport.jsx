import { useState } from "react";
import "./BudgetReport.css";
import CardFilter from "../CardFilter/CardFilter";
import BudgetChart from "../BudgetChart/BudgetChart";

function BudgetReport() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-">
        <h5 className="card-title">Budget Report | {filter}</h5>
        <BudgetChart />
      </div>
    </div>
  );
}

export default BudgetReport;

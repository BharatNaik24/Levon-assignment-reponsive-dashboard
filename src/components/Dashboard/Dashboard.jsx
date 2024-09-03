import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Report from "../Report/Report";
import RecentSales from "../RecentSales/RecentSales";
import TopSelling from "../TopSelling/TopSelling";
import RecentActivity from "../RecentActivity/RecentActivity";
import BudgetReport from "../BudgetReport/BudgetReport";
import WebTraffic from "../WebTraffic/WebTraffic";
import News from "../News/News";
import BarChart from "../BarChart/BarChart";
import "./DashBoard.css";

function Dashboard() {
  const [cards, setCard] = useState([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/cards")
      .then((response) => {
        setCard(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards.length > 0 &&
              cards.map((eachCard) => (
                <Card
                  key={eachCard._id}
                  card={eachCard}
                  filter={filter}
                  handleFilterChange={handleFilterChange}
                />
              ))}
            <div className="col-12">
              <Report />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
          </div>
          <div className="col-12">
            <TopSelling />
          </div>
          <div className="col-12">
            <BarChart />
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

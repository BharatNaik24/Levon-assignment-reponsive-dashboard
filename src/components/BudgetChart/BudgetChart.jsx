import { useEffect } from "react";
import * as echarts from "echarts";
import "./BudgetChart.css";

function BudgetChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#budgetCharts")).setOption({
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
        top: 0,
      },
      radar: {
        shape: "circle",
        center: ["50%", "50%"],
        radius: "60%",
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Admin\nistrations", max: 16000 },
          { name: "Information\nTechnology", max: 30000 },
          { name: "Customer\nSupport", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 25000 },
        ],
        name: {
          textStyle: {
            fontSize: 12,
            color: "#333",
          },
        },
      },
      series: [
        {
          name: "Budget vs Spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending",
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div
      id="budgetCharts"
      style={{
        minHeight: "400px",
        width: "100%",
      }}
      className="echarts"
    ></div>
  );
}

export default BudgetChart;

import { useEffect } from "react";
import * as echarts from "echarts";

import "./WebTrafficChart.css";

function WebTrafficChart() {
  useEffect(() => {
    const chartDom = document.querySelector("#trafficChart");
    const myChart = echarts.init(chartDom);
    myChart.setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div id="trafficChart" style={{ width: "100%", height: "400px" }}></div>
  );
}

export default WebTrafficChart;

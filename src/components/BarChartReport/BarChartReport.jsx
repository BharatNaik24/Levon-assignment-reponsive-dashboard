import { useState } from "react";
import Chart from "react-apexcharts";

function ReportChartsReport() {
  const [data] = useState({
    series: [
      {
        name: "Sales",
        data: [40, 70, 20, 10, 50, 90, 88],
      },
      {
        name: "Revenue",
        data: [10, 20, 30, 40, 50, 60, 78],
      },
      {
        name: "Customers",
        data: [10, 32, 18, 9, 24, 11, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: { format: "dd/MM/yy HH:mm" },
      },
    },
  });

  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default ReportChartsReport;

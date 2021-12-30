import React from "react";
import { Line } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

let LineChart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "april"],
    datasets: [
      {
        label: "Sales in 2022",
        data: [1, 2, 3, 4],
        borderColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  };
  return(
    <Line data={data} />
  ) 
};

export default LineChart;

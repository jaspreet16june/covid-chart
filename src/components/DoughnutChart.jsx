import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../css/pieChart.css";
import "../css/dough.css";
import {Link} from "react-router-dom";

const DoughnutChart = ({ value }) => {
  // console.log(value.total_deaths.replace(/\,/g, ""));
  let totalCases = parseInt(value.total_cases);
  let totalDeaths = parseInt(value.total_death);
  let totalActiveCases = parseInt(value.active_cases);
  let newCases = parseInt(value.new_cases);
  let totalRecovered = parseInt(value.totalRecovered);
  let newDeaths = parseInt(value.new_deaths);
  let seriousCritical = parseInt(value.serious_critical);

  const data = {
    datasets: [
      {
        label: [
          totalCases,
          totalDeaths,
          totalActiveCases,
          totalRecovered,
          newCases,
          newDeaths,
          seriousCritical,
        ],
        data: [
          totalCases,
          totalDeaths,
          totalActiveCases,
          totalRecovered,
          newCases,
          newDeaths,
          seriousCritical,
        ],
        borderColor: ["white"],
        backgroundColor: [
          "lightpink",
          "yellow",
          "lightgreen",
          "red",
          "blue",
          "purple",
          "gray",
        ],
      },
    ],
    labels: [
      "Total Cases",
      "Total Deaths",
      "Total Active Cases",
      "Total Recovered",
      "New Cases",
      "New Deaths",
      "Serious Critical",
    ],
  };
  return (
    <div className="pie">
      <Link to="/" className="btn btn-dark back">
        Back
      </Link>
      <div className="point">
        <h1>
          Here is the Doughnut Chart representation related to Covid all around
          the world
        </h1>
      </div>
      <div className="pieChart">
        <Doughnut data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
};
export default DoughnutChart;

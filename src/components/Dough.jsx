import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../css/pieChart.css";
import "../css/dough.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const DoughnutChart = ({ allData}) => {
    let countryName = [];
    allData.slice(1, 20).map((country) => {
      countryName.push(country.country_name);
    });
//   let totalCases = parseInt(value.total_cases?.replace(/\,/g, ""));
//   let totalDeaths = parseInt(value.total_deaths?.replace(/\,/g, ""));
//   let totalActiveCases = parseInt(value.active_cases?.replace(/\,/g, ""));
//   let newCases = parseInt(value.new_cases?.replace(/\,/g, ""));
//   let totalRecovered = parseInt(value.total_recovered?.replace(/\,/g, ""));
//   let newDeaths = parseInt(value.new_deaths?.replace(/\,/g, ""));
//   let seriousCritical = parseInt(value.serious_critical?.replace(/\,/g, ""));
//   const data = {
//     datasets: [
//       {
//         label: [
//           totalCases,
//           totalDeaths,
//           totalActiveCases,
//           totalRecovered,
//           newCases,
//           newDeaths,
//           seriousCritical,
//         ],
//         data: [
//           totalCases,
//           totalDeaths,
//           totalActiveCases,
//           totalRecovered,
//           newCases,
//           newDeaths,
//           seriousCritical,
//         ],
//         borderColor: ["white"],
//         backgroundColor: [
//           "lightpink",
//           "yellow",
//           "lightgreen",
//           "red",
//           "blue",
//           "purple",
//           "gray",
//         ],
//       },
//     ],
//     labels: [
//       "Total Cases",
//       "Total Deaths",
//       "Total Active Cases",
//       "Total Recovered",
//       "New Cases",
//       "New Deaths",
//       "Serious Critical",
//     ],
//   };
  return (
    <div className="pie">
      <Link to="/" className="btn btn-dark back">
        <ArrowBackIcon />
        Back
      </Link>
      <div className="point">
        <h1>
          Here is the Doughnut Chart representation related to Covid all around
          the world
        </h1>
      </div>
      {/* DROPDOWN */}

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          COUNTRY
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         {countryName.map((jagha)=>{
             console.log(jagha);
             <li class="dropdown-item">{jagha}</li>;
         })}
        </ul>
      </div>
    </div>
  );
};
export default DoughnutChart;

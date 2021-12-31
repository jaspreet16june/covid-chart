import React from 'react'
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../css/pieChart.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Piechart = ({value}) => {
  
       let totalCases = parseInt(value.total_cases?.replace(/\,/g, ""));
       let totalDeaths = parseInt(value.total_deaths?.replace(/\,/g, ""));
       let totalActiveCases = parseInt(value.active_cases?.replace(/\,/g, ""));
       let newCases = parseInt(value.new_cases?.replace(/\,/g, ""));
       let totalRecovered = parseInt(value.total_recovered?.replace(/\,/g, ""));
       let newDeaths = parseInt(value.new_deaths?.replace(/\,/g, ""));
       let seriousCritical =parseInt(value.serious_critical?.replace(/\,/g, ""));

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
             "saddlebrown",
             "yellow",
             "lightgreen",
             "burlywood",
             "pink",
             "lightsalmon",
             "cornflowerblue"
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
            <ArrowBackIcon />
            Back
        </Link>
        <div className="head">
          <h1>
            Here is the Pie Chart representation related to Covid all around the
            world 
          </h1>
        </div>
        <div className="pieChart">
          <Pie data={data} options={{ responsive: true }} />
        </div>
      </div>
    );
}
export default Piechart;

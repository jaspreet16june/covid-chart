import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../css/barChart.css";

let BarChart=({ allData })=> {
     let countryName = [];
     let totalCases =  [];
     let totalDeaths = [];
     let totalActiveCases = [];

     allData.slice(1,20).map((country)=>{
        countryName.push(country.country_name)
        totalActiveCases.push(parseInt(country.active_cases.replace(/\,/g,'')))
        totalDeaths.push(parseInt(country.deaths.replace(/\,/g, "")));
        totalCases.push(parseInt(country.deaths.replace(/\,/g, "")));
    })
    console.log(countryName);
    console.log(totalCases);
    console.log(totalDeaths);
    
    const data = {
      labels: countryName,
      datasets: [
        {
          label: "Total Cases in the world",
          data: totalCases,
          borderColor: [
          "white"
          ],
          backgroundColor: [
            "rgba(255, 206, 86)",
            "rgba(255, 206, 86)",
            "rgba(255, 206, 86)",
            "rgba(255, 206, 86)",
            "rgba(255, 206, 86)",
          ],
        },
        {
          label: "Total deaths in the world",
          data: totalDeaths,
          borderColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          backgroundColor: ["lightseagreen"],
        },
        {
          label: "Total active cases in the world",
          data: totalActiveCases,
          borderColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          backgroundColor: ["skyblue"],
        },
      ],
    };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div className="barChart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;

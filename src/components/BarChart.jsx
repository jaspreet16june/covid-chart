import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../css/barChart.css";

let BarChart=({ allData })=> {
     let countryName = [];
     let totalCases =  [];
     let totalDeaths = [];
     allData.slice(0,15).map((country)=>{
        countryName.push(country.country_name)
        totalCases.push(parseInt(country.cases));
        totalDeaths.push(parseInt(country.deaths));

    })
    console.log(countryName);
    console.log(totalCases);
    console.log(totalDeaths);
    
    const data = {
    labels:countryName,
        datasets: [
      {
        label: "Total Deaths in the world",
        data: totalCases,
        borderColor: [
          "rgba(255, 206, 86)",
          "rgba(255, 206, 86)",
          "rgba(255, 206, 86)",
          "rgba(255, 206, 86)",
          "rgba(255, 206, 86)",
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
        label: "Total cases in the world",
        data: totalDeaths,
        borderColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
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

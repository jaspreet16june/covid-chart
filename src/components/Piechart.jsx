import React from 'react'
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Piechart = ({value}) => {

     let totalCases = [];
     let totalDeaths = [];
     let totalActiveCases = [];
    // .replace(/,/g, "")
       totalCases.push(parseInt(value.total_cases));
       totalDeaths.push(parseInt(value.total_deaths));
       totalActiveCases.push(parseInt(value.active_cases));
    
     console.log(totalCases);
     console.log(totalDeaths);
     console.log(totalActiveCases);


     const data = {
       labels:value,
       datasets: [
         {
           label: [[totalCases],[totalDeaths]],
           data: [totalCases,totalDeaths],
           borderColor: ["white"],
           backgroundColor: ["red","yellow"],
         },
       ],
       //    backgroundColor:["red","pink","yellow"]
     };
    return (
        <div className='pie'>
            <Pie data={data} options={{responsive:true}}/>
        </div>
    )
}

export default Piechart;

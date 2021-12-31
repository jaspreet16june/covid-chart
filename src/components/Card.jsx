import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";
import BarChartSharpIcon from "@material-ui/icons/BarChartSharp";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PieChartIcon from "@material-ui/icons/PieChart";
const Card = ({ value }) => {
  let totalCases = value.total_cases?.replace(/\,/g, "");
  let totalDeaths = value.total_deaths?.replace(/\,/g,"");
  return (
    <>
      <div className="mainly">
        <div className="main">
          <div className="card1">
            <h1 className="head-1">
              Total Covid Cases in the world <br />
              {parseInt(totalCases)?.toLocaleString("en-IN")}
            </h1>
          </div>
          <div className="card2">
            <h1 className="head-2">
              Total Covid deaths in the world <br />
              {parseInt(totalDeaths)?.toLocaleString("en-IN")}
            </h1>
          </div>
        </div>
        <br />
        <h1>
          To see some pictorial representation go through the below buttons:-
        </h1>
        <br />
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/bar" className="btn btn-dark">
            Bar Chart <BarChartSharpIcon />
          </Link>
          <Link to="/donut" className="btn btn-dark">
            Doughnut Chart <DonutLargeIcon />
          </Link>
          <Link to="/pie" className="btn btn-dark">
            Pie Chart <PieChartIcon />
          </Link>
          {/* <Link to="/dou" className="btn btn-dark">
            Doughh <PieChartIcon />
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Card;

// .toLocaleString('en-IN')

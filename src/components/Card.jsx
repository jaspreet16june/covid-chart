import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";
import BarChartSharpIcon from "@material-ui/icons/BarChartSharp";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PieChartIcon from "@material-ui/icons/PieChart";
const Card = ({ value }) => {
  return (
    <>
      {/* .replace(/\,/g, "") */}
      {/* <img
            src="https://www.saanichnews.com/wp-content/uploads/2020/03/20979572_web1_covidupdate-isj-200318-covid_1.jpg"
            alt=""
            /> */}
      <div className="mainly">
        <div className="main">
          <div className="card1">
            <h1 className="head-1">
              Total Covid Cases in the world <br />
              {parseInt(value.total_cases)
                .replace(/\,/g, "")
                .toLocaleString("en-IN")}
            </h1>
          </div>
          <div className="card2">
            <h1 className="head-2">
              Total Covid deaths in the world <br />
              {parseInt(value.total_deaths).toLocaleString("en-IN")}
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
        </div>
      </div>
    </>
  );
};

export default Card;

// .toLocaleString('en-IN')

import React from 'react'
import "../css/card.css"
const Card = ({value}) => {
   
    return (
      <>
        <div className="card1">
          <h1 className="head">
              Total Covid Cases in the world = 
              
            {parseInt(value.total_cases.replace(/,/g, "")).toLocaleString(
              "en-IN"
            )}
          </h1>
        </div>
        <div className="card2">
          <h1 className="head">
              Total deaths due to covid in the world=
            {parseInt(value.total_deaths.replace(/,/g, "")).toLocaleString(
              "en-IN"
            )}
          </h1>
          
        </div>
      </>
    );
}

export default Card;


// .toLocaleString('en-IN')
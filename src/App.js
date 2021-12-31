import './App.css';
import axios from "axios";
import { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Piechart from "./components/Piechart"
import BarChart from "./components/BarChart"
import DoughnutChart from "./components/DoughnutChart"
import Card from "./components/Card"
import Dough from "./components/Dough";


let App=()=> {
  // const navigate = useNavigate();
  const [allData, setAllData] = useState([]);
  const [value, setValue] = useState([]);
  let getData =(options)=>{
    axios.request(options).then(function (response) {
      setAllData(response.data.countries_stat);
      setValue(response.data.world_total);
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
  let options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
  headers: {
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': '02a4bcf9e8msh3fe6f0cdc8fe9e6p136cc6jsn1b50a9b595bc'
  }
};
    getData(options);

  }, [])
  console.log(allData);
  console.log("value" , value);

  return (
        
          <div className="App">
        <Router>
          <Routes>
            <Route exact path="/donut" element ={ <DoughnutChart value ={value} /> }>
            </Route>
             <Route exact path="/pie" element={<Piechart value ={value}/>}>
              </Route> 
            <Route exact path="/Bar" element={ <BarChart allData = {allData}/>}>
            </Route> 
             <Route exact path="/" element ={<Card value ={value} />}>
            </Route>
            {/* <Route exact path="/dou" element={ <Dough allData = {allData}/>}>
            </Route> */}
          </Routes>
        </Router>
       {/* <button onClick={()=>{
         navigate("/donut")
       }}>DoughnutChart</button> */}

    </div>
  );
}

export default App;

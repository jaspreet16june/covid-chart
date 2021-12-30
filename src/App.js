import './App.css';
import axios from "axios";
import { useState , useEffect } from "react";
import Piechart from "./components/Piechart"
import BarChart from "./components/BarChart"
import LineChart from './components/LineChart';

let App=()=> {
  const [allData, setAllData] = useState([]);

  let getData =(options)=>{
    axios.request(options).then(function (response) {
      setAllData(response.data.countries_stat);
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

  return (
    <div className="App">
     {/* <Piechart /> */}
    <BarChart allData = {allData}/>
    {/* <LineChart/> */}
    </div>
  );
}

export default App;

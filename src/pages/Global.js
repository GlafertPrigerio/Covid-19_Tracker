import React, { useEffect, useState } from 'react';
import axios from "axios"
import "../App.css"
import NumberFormat from "react-number-format";

const Global = () => {
    const [confirmed, setConfirmed] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    useEffect(() => {
      axios 
       .get("https://covid19.mathdro.id/api")
       .then((response) =>
       { 
      setConfirmed(response.data.confirmed.value);
       setDeaths(response.data.deaths.value);
       setRecovered(response.data.recovered.value);
      })  
   }, []);
  
   return (
     <center>
       <div className="background" >
          
       
       <div className= "cont">
        <h1 className = "positif"> 
        <p>Infected</p>
        <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> 
        </h1>
       
        <h1 className="meninggal">
          <p>Death</p>
          <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
        </h1>
        <h1 className="sembuh">
          <p>Recovered</p>
          <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
        </h1>  
         
      </div>
      </div>
      <div className="background" >
      <h1>Covid-19 Case Global</h1>   
      </div> 
      </center>
  
    )
   
  };
  export default Global;
import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from "react-number-format";


const Indonesia = () => {
    const [jumlahKasus, setJumlahKasus] = useState("");
    const [meninggal, setMeninggal] = useState("");
    const [sembuh, setSembuh] = useState("");
    useEffect(() => {
      axios 
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then((response) =>
  
       
       { 
      setJumlahKasus(response.data.jumlahKasus);
       setMeninggal(response.data.meninggal);
       setSembuh(response.data.sembuh);
      })  
   }, []);
  
   return (
  <center>
    <div className ="background">
      <div className= "cont">
        <h1 className="positif">
          <p>Infected</p>
          <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
        </h1>
        <h1 className="meninggal">
          <p>Death</p>
          <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
        </h1>
        <h1 className="sembuh">
          <p>Recovered</p>
          <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
        </h1>  
        </div>
      </div>
      <div className="background">
      <h1>COVID-19 Case in INDONESIA</h1>
      </div> 
      </center>
    
  
  )
  
    
  };
  export default Indonesia;
  
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import Numberformat from 'react-number-format'



const Provinsi = () => {
  const [provinsiData, getProvinsi] = useState([]);
  useEffect(()=>{
    axios
    .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then(response => {getProvinsi(response.data.data)})

}, []);

    return(
<center>
      <div className="background">
      <h1>Kasus COVID-19 di Provinsi Indonesia</h1>
    <center>
        <table border ="1">
          <tr>
            <th>No</th>
            <th>Province</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Death</th>
          </tr>
          {provinsiData.map((item, index)=>   {
            return(
              <tr>
                <th  scope = "row" key = {item.fid}>{index + 1} </th>
                <th>{item.provinsi}</th>
                <th><Numberformat value = {item.kasusPosi} thousandSeparator={true} displayType ={'text'}/> </th>
                <th><Numberformat value = {item.kasusSemb} thousandSeparator={true} displayType ={'text'}/> </th>
                <th><Numberformat value = {item.kasusMeni} thousandSeparator={true} displayType ={'text'}/> </th>
              </tr>
            )
        })}
          </table>
      </center>
      </div> 
      </center>
    )
}
export default Provinsi;

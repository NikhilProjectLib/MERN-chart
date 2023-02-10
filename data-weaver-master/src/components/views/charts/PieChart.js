import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS ,
Tooltip,Title,ArcElement,Legend} from "chart.js/auto";
import { UserData } from "../../../data";




/*
function Seat(chartData2){
  let sector={}
  const [count,setCount]=useState({})

   chartData2.map((value)=>{
     if(value.region=="Northern America" && value.sector){
      if(value.sector in sector){
        sector[value.sector]++;
      }
      else{
        sector[value.sector]=1;
      }
    }
  })
  console.log(sector)

 }
*/
function PieChart({chartData2 }) {
 let sector={}
   chartData2.map((value)=>{
     if(value.region=="Northern America" && value.sector){
      if(value.sector in sector){
        sector[value.sector]++;
      }
      else{
        sector[value.sector]=1;
      }
    }
  })
  
 
const [userData, setUserData] = useState({
        labels: ['Energy', 'Manufacturing', 'Retail', 'Support services', 
        'Financial services', 'Aerospace & defence', 'Information Technology', 
        'Environment', 'Construction'],
        datasets: [
          {
            label: [],
            data:[76, 7, 7, 2, 9, 1, 1, 2, 1],
            backgroundColor: [
              "rgba(75,192,192,18)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF91",
              "#f3ba2f",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });


  return <Pie data={userData} />;
}

export default PieChart;
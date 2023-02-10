

import React,{useState,useEffect} from "react";
// import { chartData } from "../../api/api";
import { Typography } from "@mui/material";
import Sidebar from "../../components/sidebar";
import { UserData } from "../../data";
import BarChart from "../../components/views/charts/BarChart";
import LineChart from "../../components/views/charts/LineChart"
import PieChart from "../../components/views/charts/PieChart"
import { Stack } from "@mui/system";
import { areaChartData, chartData } from "../../api/api";


const Dashboard = () => {
  const[area,setArea]=useState([])

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

     const [back,setBck]=useState([])    
    useEffect(()=>{
        chartData().then((res)=>{
          setBck((res.data))})


       areaChartData().then((res)=>{
         setArea((res.data))
        //  console.log(are)

       })

        
    })
    //  console.log(area);
    return(
        <>
        <Sidebar/>
        <Stack sx={{ display:'grid',justifyContent:'center', marginTop:'70px'}}>
          <Typography variant="h6"  >Dashboard</Typography>
          <Stack sx={{display:'flex' ,marginTop:'10px'}}>
            <Stack sx={{width:'700px'}} mt={5}>
              <BarChart chartData={userData} />
            </Stack>
            <Stack sx={{width:'700px'}} mt={5}>
               <LineChart chartData={userData}  chartData2={area}/>
              

            </Stack>
            <Stack sx={{width:'700px'}} mt={5}>
               <PieChart  chartData2={back}  />
            </Stack>


            
            {/* <Stack sx={{width:'700px'}} mt={5}>
               <PieChart chartData2={back}   />
            </Stack> */}
           </Stack>
        </Stack>
    
        </>
    )
}


export default Dashboard;
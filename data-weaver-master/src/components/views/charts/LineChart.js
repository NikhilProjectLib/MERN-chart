import React, { useState } from "react";
import {Line } from "react-chartjs-2";
// useState


function LineChart({ chartData ,chartData2}) {
  // console.log(chartData2);

  // chartData2.map((data)=>console.log(data.sector))
  const [userData, setUserData] = useState({
    labels: chartData2.map((data) => data.sector),    //x -axis
    datasets: [
      {
        label: "Intensity",
        data: chartData2.map((data) => data.intensity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  //  console.log(userData)
// console.log(userData);





  return <Line data={userData} />;
}

export default LineChart;


import axios from "axios";


export function filterdata(Searchvalue){
  console.log(Searchvalue)
    return axios.post('http://localhost:8000/filter',Searchvalue)
      .then((response)=>{
        return response.data  
      })
      .catch((err)=>console.log("err",err))

}

export function chartData(){
  
    return axios.get('http://localhost:8000/get')
      .then((response)=>{
        // console.log("response" ,response)
        return response
      })
      .catch((err)=>console.log("err",err))

}


export function areaChartData(){
  
  return axios.get('http://localhost:8000/area')
    .then((response)=>{
      // console.log("response" ,response)
      return response
    })
    .catch((err)=>console.log("err",err))

}


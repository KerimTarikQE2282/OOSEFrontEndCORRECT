import React from 'react'
import Nav from '../Nav'
import Axios from 'axios'
import Chart from 'chart.js/auto'; 
import { Line } from "react-chartjs-2";

const ShowVitals = () => {

 
  
  const [email,setEmail]=React.useState({
    Email:''
  })

function handleChange(event){
setEmail(prev=>{
  return{
    ...prev,
    [event.target.name]:event.target.value
  }
})


}

const [resVitals,setresVitals]=React.useState(
[]
)

const url='https://localhost:44371/api/Vitals/GetVitals'
function clicked(e){
  e.preventDefault();
Axios.post(url,{
Email:email.Email
}).then(res=>{
  
  setresVitals(res.data)
})
}
var bodyTempreatureArr;

bodyTempreatureArr=resVitals.map(res=>{
  return res.bodyTempreature
    })
    console.log("body tempreature is "+bodyTempreatureArr)
var diaStolicRateArr;
diaStolicRateArr=resVitals.map(res=>{
  return res.diaStolicRate
    
})
console.log("DiastolicRate is "+diaStolicRateArr)
var systolicRateArr;
systolicRateArr=resVitals.map(res=>{
  return res. systolicRate
    
})
console.log("Systolic Rate  is "+systolicRateArr)
var respatationRateArr;
respatationRateArr=resVitals.map(res=>{
  return res.respatationRate

    
})
console.log('the resparation Rate is '+respatationRateArr)
var pulseRateArr;
pulseRateArr=resVitals.map(res=>{
  return res.pulseRate

    
})
console.log('pulse Rate is '+pulseRateArr)
var Date;
Date=resVitals.map(res=>{
  return res.date.substring(0,10)
})


//console.log(bloodRate)
//console.log(resVitals.BlooddRate.values())
const TempreatureState={
  type:Line,
  labels:Date,
  datasets:[
    {
      label:"Body tempreature",
      backgroundcolor:"rgba(75,192,192,1)",
      borderColor:"rgba(0,0,0,1)",
      borderWidth:"2",
     
      data:bodyTempreatureArr
    }
    

  ]
}
const diaStolicRateState={
  type:Line,
  labels:Date,
  datasets:[
    {
      label:"Diastolic Rate",
      backgroundcolor:"rgba(75,192,192,1)",
      borderColor:"rgba(0,0,0,1)",
      borderWidth:"2",
     
      data:diaStolicRateArr
    }
    

  ]
}
const systolicRateState={
  type:Line,
  labels:Date,
  datasets:[
    {
      label:"Systolic Rate",
      backgroundcolor:"rgba(75,192,192,1)",
      borderColor:"rgba(0,0,0,1)",
      borderWidth:"2",
     
      data:systolicRateArr
    }
    

  ]
}
const respatationRateState={
  type:Line,
  labels:Date,
  datasets:[
    {
      label:"Resparation Rate",
      backgroundcolor:"rgba(75,192,192,1)",
      borderColor:"rgba(0,0,0,1)",
      borderWidth:"2",
     
      data:respatationRateArr
    }
    

  ]
}
const pulseRateState={
  type:Line,
  labels:Date,
  datasets:[
    {
      label:"Body tempreature",
      backgroundcolor:"rgba(75,192,192,1)",
      borderColor:"rgba(0,0,0,1)",
      borderWidth:"2",
     
      data:pulseRateArr
    }
    

  ]
}
const options={
  Plugins:{
    legend:{
      display:true,
      position:"bottom"
    },
    title:{
display:true,

fontSize:20
    }

  }
}
//console.log(resVitals)
  return (
    <div>
  
     <Nav/>
      <form >
      <input type="text" 
      className="searchTerm" 
      placeholder="Search Patient" 
      id="PatientEmail"
      value={email.Email}
      onChange={handleChange}
      name='Email'/>
      <br></br>
      <button type="submit" text='submit' className='button' onClick={clicked}>
      search
     </button>
     </form>
     <div className='charts'> 
     <div className='TempreatureGraph'>
     <Line data={TempreatureState}
       options={options} />
     </div>
     <div className='disRateChart'>
    <Line data={diaStolicRateState}
       options={options} />
       </div>
       <div className='SysRateChart'>
    <Line data={systolicRateState}
       options={options} />
       </div>
       <div className='RespRateChart'>
    <Line data={pulseRateState}
       options={options} />
       </div>
           <div className='pulseRateState'>
    <Line data={pulseRateState}
       options={options} />
       </div>
       </div>
       
    </div>
  )
}

export default ShowVitals

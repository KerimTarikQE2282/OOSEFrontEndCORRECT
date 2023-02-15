import React from 'react'
import Axios from 'axios';
function AddVitals(){


const [Vitals,setVitals]=React.useState({
  PatientEmail : "",
  PatientName: "",
  bodyTempreature : "",
  SystolicRate : "",
  diaStolicRate:  "",
  PulseRate:"",
  RespatationRate : "",
  BlooddRate :""
 
})
const url='https://localhost:44371/api/Vitals/AddVitals';
    function submit(e){
       e.preventDefault();
      Axios.post(url,{
        PatientEmail : Vitals.PatientEmail,
        PatientName: Vitals.PatientName,
        bodyTempreature : Vitals.bodyTempreature,
        SystolicRate : Vitals.SystolicRate,
        diaStolicRate: Vitals.diaStolicRate,
        PulseRate: Vitals.PulseRate,
        RespatationRate : Vitals.RespatationRate,
        BloodRate : Vitals.BloodRate
      
     
      }).then(res=>
        {
       console.log(res.data)
        })
    }
    console.log(Vitals)
    function handle(e){
        const newdata={...Vitals}
        newdata[e.target.id]=e.target.value
        setVitals(newdata)
  
          
            
          }

  return (
    <div>
      <form  onSubmit={(e)=>submit(e)}>
      <p>Patien Email </p>  
    <br/>
        <input
     type="text"
     placeholder="PatientEmail"
     onChange={(e)=>handle(e)}
     id="PatientEmail"
     value={Vitals.PatientEmail}
    />
     <br/>
     <p>Patient Name</p>
     <br/>
     <input
     type="text"
     placeholder="PatientName"
     onChange={(e)=>handle(e)}
     id="PatientName"
     value={Vitals.PatientName}
   

     />
     <br/>
     <p>body Tempreature</p>
     <br/>
     <input
     type="number"
     placeholder="body Tempreature"
     onChange={(e)=>handle(e)}
     id="bodyTempreature"
     value={Vitals.bodyTempreature}
     
   

     />
     <br/>
      <p>SystolicRate</p>
     <br/>
     <input
     type="number"
     placeholder="SystolicRate"
     onChange={(e)=>handle(e)}
     id="SystolicRate"
     value={Vitals.SystolicRate}
     

     />
     <br/>
    
      <p>diaStolicRate</p>
     <br/>
     <input
     type="number"
     placeholder="diaStolicRate"
     onChange={(e)=>handle(e)}
     id="diaStolicRate"
     value={Vitals.diaStolicRate}
     

     />
     <br/>
    
    <p>PulseRate</p>
   <br/>
   <input
   type="number"
   placeholder="PulseRate"
   onChange={(e)=>handle(e)}
   id="PulseRate"
   value={Vitals.PulseRate}
   

   />
   <br/>
    
    <p>RespatationRate</p>
   <br/>
   <input
   type="number"
   placeholder="RespatationRate"
   onChange={(e)=>handle(e)}
   id="RespatationRate"
   value={Vitals.RespatationRate}
   

   />
   <br/>
    
    <p>BlooddRate</p>
   <br/>
   <input
   type="number"
   placeholder="BlooddRate"
   onChange={(e)=>handle(e)}
   id="BlooddRatea"
   value={Vitals.BloodRate}
   

   />

    
 
   

   
<br/>

    

   <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddVitals;

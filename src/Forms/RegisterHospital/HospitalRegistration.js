import React from "react";
import Axios from "axios"
import { useForm } from "react-hook-form";

export default function Form(){
  const url="https://localhost:44371/api/Hospitals";
const [HospitalInfo,setHospitalInfo]=React.useState({
    
   
    HospitalName:"",
    HospitalRep:"",
    HospitalKebele:"",
    HospitalKifleKetema:"",
    HospitalWoreda:""
   
})
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    HospitalName:HospitalInfo.HospitalName,
    HospitalRep:HospitalInfo.HospitalRep,
    HospitalKebele:HospitalInfo.HospitalKebele,
    HospitalKifleKetema:HospitalInfo.HospitalKifleKetema,
    HospitalWoreda:HospitalInfo.HospitalWoreda
  }).then(res=>
    {
   console.log(res.data);
    }
  )
}
function handle(e){
const newdata={...HospitalInfo}
newdata[e.target.id]=e.target.value
setHospitalInfo(newdata)
console.log(HospitalInfo)
}



   return(
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
  <p>Hospital name </p>  
    <br/>
        <input
     type="text"
     placeholder="Hospital name"
     onChange={(e)=>handle(e)}
     id="HospitalName"
     value={HospitalInfo.HospitalName}
    
  
   />
     <br/>
     <p>Hospital Representative</p>
     <br/>
     <input
     type="text"
     placeholder="Hospital Representative"
     onChange={(e)=>handle(e)}
     id="HospitalRep"
     value={HospitalInfo.HospitalRep}
   

     />
     <br/>
     <p>Hospital Kebele</p>
     <br/>
     <input
     type="text"
     placeholder="Hospital kebele"
     onChange={(e)=>handle(e)}
     id="HospitalKebele"
     value={HospitalInfo.HospitalKebele}
     
   

     />
     <br/>
      <p>Hospital KifleKetema</p>
     <br/>
     <input
     type="text"
     placeholder="Hospital KifleKetema"
     onChange={(e)=>handle(e)}
     id="HospitalKifleKetema"
     value={HospitalInfo.HospitalKifleKetema}
     

     />
     <br/>
    
      <p>Hospital Woreda</p>
     <br/>
     <input
     type="text"
     placeholder="Hospital Woreda"
     onChange={(e)=>handle(e)}
     id="HospitalWoreda"
     value={HospitalInfo.HospitalWoreda}
     

     />
     
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
   )
}
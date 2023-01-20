import React from "react";
import Axios from "axios"
import { useForm } from "react-hook-form";

export default function Form(){
  const url="https://localhost:44371/api/Representative";
const [RepresentativeInfo,setRepresentativeInfo]=React.useState({
    
   
                FirstName : "",
                middleName : "",
                LastName : "",
                 Email:"",
                PhoneNumber : "",
                region : "",
                kebele : "",
                kifleketema : "",
                woreda : "",
                HospitalId : "",
                Password : ""
   
})
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    FirstName : RepresentativeInfo.FirstName,
    middleName : RepresentativeInfo.middleName,
    LastName : RepresentativeInfo.LastName,
     Email:RepresentativeInfo.Email,
    PhoneNumber : RepresentativeInfo.PhoneNumber,
    region : RepresentativeInfo.region,
    kebele : RepresentativeInfo.kebele,
    kifleketema : RepresentativeInfo.kifleketema,
    woreda : RepresentativeInfo.woreda,
    HospitalId : RepresentativeInfo.HospitalId,
    Password : RepresentativeInfo.Password

  }).then(res=>
    {
   console.log(res.data);
    }
  )
}
function handle(e){
const newdata={...RepresentativeInfo}
newdata[e.target.id]=e.target.value
setRepresentativeInfo(newdata)
console.log(RepresentativeInfo)
}



   return(
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
     <p>First Name </p>  
    <br/>
        <input
     type="text"
     placeholder="First Name"
     onChange={(e)=>handle(e)}
     id="FirstName"
     value={RepresentativeInfo.FirstName}
    />
     <br/>
     <p>Middle Name</p>
     <br/>
     <input
     type="text"
     placeholder="Middle Name"
     onChange={(e)=>handle(e)}
     id="middleName"
     value={RepresentativeInfo.middleName}
   

     />
     <br/>
     <p>Last Name</p>
     <br/>
     <input
     type="text"
     placeholder="Last name"
     onChange={(e)=>handle(e)}
     id="LastName"
     value={RepresentativeInfo.LastName}
     
   

     />
     <br/>
      <p>Email</p>
     <br/>
     <input
     type="text"
     placeholder="Email"
     onChange={(e)=>handle(e)}
     id="Email"
     value={RepresentativeInfo.Email}
     

     />
     <br/>
    
      <p>Phone Number</p>
     <br/>
     <input
     type="text"
     placeholder="Phone Number"
     onChange={(e)=>handle(e)}
     id="PhoneNumber"
     value={RepresentativeInfo.PhoneNumber}
     

     />
     <br/>
    
    <p>region</p>
   <br/>
   <input
   type="text"
   placeholder="region"
   onChange={(e)=>handle(e)}
   id="region"
   value={RepresentativeInfo.region}
   

   />
   <br/>
    
    <p>kebele</p>
   <br/>
   <input
   type="text"
   placeholder="kebele"
   onChange={(e)=>handle(e)}
   id="kebele"
   value={RepresentativeInfo.kebele}
   

   />
   <br/>
    
    <p>kifleketema</p>
   <br/>
   <input
   type="text"
   placeholder="kifleketema"
   onChange={(e)=>handle(e)}
   id="kifleketema"
   value={RepresentativeInfo.kifleketema}
   

   />
   <br/>
    
    <p> Woreda</p>
   <br/>
   <input
   type="text"
   placeholder="Hospital Woreda"
   onChange={(e)=>handle(e)}
   id="woreda"
   value={RepresentativeInfo.woreda}
   

   />
   <br/>
    
    <p>Hospital Id</p>
   <br/>
   <input
   type="number"
   placeholder="Hospital Id"
   onChange={(e)=>handle(e)}
   id="HospitalId"
   value={RepresentativeInfo.HospitalId}
   

   />
   <br/>
    
    <p>Password</p>
   <br/>
   <input
   type="text"
   placeholder="Password"
   onChange={(e)=>handle(e)}
   id="Password"
   value={RepresentativeInfo.Password}
   

   />
   <br/>
    
  
   

   
     
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
   )
}
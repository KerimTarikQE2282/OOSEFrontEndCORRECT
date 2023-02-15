import React from "react";
import Axios from "axios"
import Success from '../Components/SuccesfullRegistration'
import AlreadyRegistered from '../Components/AlreadyRegistered'
import { useForm } from "react-hook-form";

export default function Form(){
  const url="https://localhost:44371/api/PatientInfo";
const [RepresentativeInfo,setRepresentativeInfo]=React.useState({
    
   
   
    firstName:'',
    middleName :'',
    lastName :'',
    Kebele :'',
    kifleketema:'',
    wereda:'',
    DOB :'',
    phoneNumber :'',
    emergencyPhone:''
})
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    firstName : RepresentativeInfo.firstName,
    middleName : RepresentativeInfo.middleName,
    lastName : RepresentativeInfo.lastName,
    phoneNumber: RepresentativeInfo. phoneNumber,
    kebele : RepresentativeInfo.kebele,
    kifleketema : RepresentativeInfo.kifleketema,
    wereda : RepresentativeInfo.wereda,
    emergencyPhone : RepresentativeInfo. emergencyPhone,
    DOB : RepresentativeInfo. DOB

  }).then(res=>
    {
   setStatus(res.data)
    }
  )
}
const [status,setStatus]=React.useState(1)
function handle(e){
const newdata={...RepresentativeInfo}
newdata[e.target.id]=e.target.value
setRepresentativeInfo(newdata)
console.log(RepresentativeInfo)
}



   return(
    <>
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
     <p>First Name </p>  
    <br/>
        <input
     type="text"
     placeholder="First Name"
     onChange={(e)=>handle(e)}
     id="firstName"
     value={RepresentativeInfo.firstName}
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
     id="lastName"
     value={RepresentativeInfo.lastName}
     
   

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
   id="wereda"
   value={RepresentativeInfo.wereda}
   

   />
   <br/>
    
    <p>Emergency Phone</p>
   <br/>
   <input
   type="string"
   placeholder="Emergency Phone"
   onChange={(e)=>handle(e)}
   id="emergencyPhone"
   value={RepresentativeInfo.emergencyPhone}
   

   />
   <br/>
    
    <p>Date of birth</p>
   <br/>
   <input
   type="date"
   placeholder="Date of birth"
   onChange={(e)=>handle(e)}
   id="DOB"
   value={RepresentativeInfo.DOB}
   

   />
   <br/>
    
  
   

   
     
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
    {status==0 && <AlreadyRegistered/>}
    {status!=0 && <Success/>}
    </>
   )
}
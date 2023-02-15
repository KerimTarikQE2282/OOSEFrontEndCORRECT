import React from "react";
import Axios from "axios"
import { useForm } from "react-hook-form";
import AlreadyRegistered from "../Components/AlreadyRegistered";
import  Success  from "../Components/SuccesfullRegistration";

export default function UserForm(){
  const url="https://localhost:44371/api/SystemUsers";
const [UserInfo,setUserInfo]=React.useState({
    
   

      firstName :"",
      middleName:"",
      lastName :"",
      email :"",
      password :"",
      phone:"",
      role :"",
      HospitalId :""
   
})
const [status,setStatus]=React.useState('');
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    
    firstName:UserInfo.firstName,
    middleName:UserInfo.middleName,
    lastName:UserInfo.lastName,
    email:UserInfo.email,
    password:UserInfo.password,
    phone:UserInfo.phone,
    role:UserInfo.role,
    HospitalId:UserInfo.HospitalId
    
  }).then(res=>
    {
  setStatus(res.data);
    }
  )
}
function handle(e){
const newdata={...UserInfo}
newdata[e.target.id]=e.target.value
setUserInfo(newdata)
console.log(UserInfo)
}



   return(
    <>
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
  <p>first name</p>  
    <br/>
        <input
     type="text"
     placeholder="first name"
     onChange={(e)=>handle(e)}
     id="firstName"
     value={UserInfo.firstName}
    
  
   />
     <br/>
     <p>middle name</p>
     <br/>
     <input
     type="text"
     placeholder="middle name"
     onChange={(e)=>handle(e)}
     id="middleName"
     value={UserInfo.middleName}
   

     />
     <br/>
     <p>last name</p>
     <br/>
     <input
     type="text"
     placeholder="last name"
     onChange={(e)=>handle(e)}
     id="lastName"
     value={UserInfo.lastName}
     
   

     />
     <br/>
      <p>email</p>
     <br/>
     <input
     type="text"
     placeholder="email"
     onChange={(e)=>handle(e)}
     id="email"
     value={UserInfo.email}
     

     />
     <br/>
    
      <p>password</p>
     <br/>
     <input
     type="text"
     placeholder="password"
     onChange={(e)=>handle(e)}
     id="password"
     value={UserInfo.password}
     

     />
      <br/>
      <p>phone</p>
<br/>
<input
     type="text"
     placeholder="phone"
     onChange={(e)=>handle(e)}
     id="phone"
     value={UserInfo.phone}
     

     />
      <br/>
      <p htmlFor="">Select Role</p>
<br/>

            <br />
            <select 
                id="role"
                value={UserInfo.role}
                onChange={(e)=>handle(e)}
                
            >
                <option value="">-- Choose --</option>
                <option value="physician">physician</option>
                <option value="Lab Technician">Lab Technician</option>
                <option value="Front Desk">Front Desk</option>
                <option value="EMT">EMT</option>
               
              
            </select>
     

   
      <br/>
      <p>HospitalId</p>
<br/>
<input
     type="text"
     placeholder="HospitalId"
     onChange={(e)=>handle(e)}
     id="HospitalId"
     value={UserInfo.HospitalId}
     

     />
     
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
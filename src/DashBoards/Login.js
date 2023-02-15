import React from "react";
import Axios from "axios"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";



export default function Form(props){
  const navigate=useNavigate()
  const url="https://localhost:44371/api/Login";
const [LoginInfo,setLoginInfo]=React.useState({
    
   
    Email:"",
    Password:""
 
   
})
const [cookies,setCookie]=useCookies('')
const [user,setUser]=React.useState(
 {
  adminFisrtName:"kerim",
  adminId:'10',
  role: "Admin"}
)

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    Email:LoginInfo.Email,
    Password:LoginInfo.Password
 
  }).then(res=>
    {
      console.log(res.data)

console.log(user.adminFisrtName)
setCookie('adminFisrtName',user.adminFisrtName,{ path: '/' })
setCookie('adminId',user.adminId,{ path: '/' })
setCookie('role',user.role,{ path: '/' })
  
   
   if(res.data.role=='Admin'){
    navigate('AdminDashboard')
   }
   else if(res.data.role=='Representative'){
    navigate('RepresentativeDashBoard')
   }
   else if(res.data.role=='Front Desk'){
    navigate('FrontDeskDashBoard')
   }
   else if(res.data.role=='EMT'){
    navigate('NurseDashBoard')
   }
   else if (res.data.role=="physician"){
    navigate('PhysicianDashBoard')
   }
   props.retrieve(res.data.role)
    }
  )


}
function handle(e){
const newdata={...LoginInfo}
newdata[e.target.id]=e.target.value
setLoginInfo(newdata)
console.log(LoginInfo)

}



   return(
    <> 
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
  <p>Email </p>  
    <br/>
        <input
     type="text"
     placeholder="Email"
     onChange={(e)=>handle(e)}
     id="Email"
     value={LoginInfo.Email}
    
  
   />
     <br/>
     <input
     type="text"
     placeholder="Password"
     onChange={(e)=>handle(e)}
     id="Password"
     value={LoginInfo.Password}
    
  
   />
     
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
  
    </>
   )
}
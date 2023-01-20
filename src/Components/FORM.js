import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
const url = 'https://course-api.com/axios-tutorial-post';
export default function Form(){
const [PatienInfo,setPatientInfo]=React.useState({
    firstname:"",
    middlename:"",
    lastname:"",
    kebele:"",
    kifleketema:"",
    wereda:"",
    Dateofbirth:"",
    telephone:"",
    emergencytelephone:"",
   

})
const url="https://localhost:44371/api/PatientInfo";
//const onSubmit =data=>console.log(data.firstName)
const {register,handleSubmit}=useForm();
//axios.post(url,PatienInfo)


const onSubmit = async (data) => {
 
console.log(data);
  try {
    const reps=await axios.post(url,{
    data
    });
   console.log(reps)
  } catch (error) {
    console.log(error.reps);
  }
}


   return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Form1">
      <div className="firstHalf">
  <p>first name </p>  
    <br/>
        <input
     type="text"
    
   {...register("firstName")}
   />
     <br/>
     <p>middle name</p>
     <br/>
     <input
     type="text"
    
     {...register("middleName")}
   

     />
     <br/>
     <p>last name</p>
     <br/>
     <input
     type="text"
    
     {...register("lastName")}
   

     />
     <br/>
      <p>kebele</p>
     <br/>
     <input
     type="text"
     {...register("kebele")}

     />
     <br/>
    
      <p>kifleketema</p>
     <br/>
     <input
     type="text"
    
     {...register("kifleKetema")}

     />
     </div> <div className="second half">
     <br/>
      <p>wereda</p>
     <br/>
     <input
     type="text"
    
     {...register("wereda")}
   

     />
     <br/>
   <p>date of birth</p>
  <br/>
    <input
     type="text"
    
     {...register("DOB")}
   

     />
     <br/>
     <p>telephone</p>
    <br/>
    <input
     type="text"
    
     {...register("phone")}
   

     />

<br/> 
     <p>emergency telephone </p>
     
     <br/>
     <input
     type="text"
    
     {...register("emergencyPhone")}
   

     />
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
   )
}
import React from "react";

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
function handleChange(event){
    const {name,value}=event.target
setPatientInfo(prev=> ({
    ...prev,
    [name]:value

}) )



console.log(PatienInfo)
}
   return(
    <form>
  <p>first name </p>  
    <br/>
        <input
     type="text"
    
     onChange={handleChange}
     name="firstname"
     value={PatienInfo.firstname}
   />
     <br/>
     <p>middle name</p>
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="middlename"
     value={PatienInfo.middlename}
   

     />
     <br/>
     <p>last name</p>
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="lastname"
     value={PatienInfo.lastname}
   

     />
     <br/>
      <p>kebele</p>
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="kebele"
     value={PatienInfo.kebele}
   

     />
     <br/>
      <p>kifleketema</p>
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="kifleketema"
     value={PatienInfo.kifleketema}
   

     />
     <br/>
      <p>wereda</p>
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="wereda"
     value={PatienInfo.wereda}
   

     />
     <br/>
   <p>date of birth</p>
  <br/>
    <input
     type="text"
    
     onChange={handleChange}
     name="Dateofbirth"
     value={PatienInfo.Dateofbirth}
   

     />
     <br/>
     <p>telephone</p>
    <br/>
    <input
     type="text"
    
     onChange={handleChange}
     name="telephone"
     value={PatienInfo.telephone}
   

     />

<br/> 
     <p>emergency telephone </p>
     
     <br/>
     <input
     type="text"
    
     onChange={handleChange}
     name="emergencytelephone"
     value={PatienInfo.emergencytelephone}
   

     />
<br/>
       
        
        



   
   <button>submit</button>
    </form>
   )
}
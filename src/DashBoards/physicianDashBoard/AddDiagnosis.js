import React from 'react'
import Axios from 'axios'

const AddDiagnosis = () => {
 const url="https://localhost:44371/api/DisgnosisAndPrescription/AddDiagnosis";

  const [DiagnosisInfo,setDiagnosisInfo]=React.useState({
    
   
  
    PatientId:"",
    PatientName:"",
    PatientEmail:"",
   symptoms:"",
      Part:"", 
 diagnosis :"",
 Prescription :""

})
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    PatientId:DiagnosisInfo.PatientId,
    PatientName:DiagnosisInfo.PatientName,
    PatientEmail:DiagnosisInfo.PatientEmail,
   symptoms:DiagnosisInfo.symptoms,
      Part:DiagnosisInfo.Part,  
 diagnosis :DiagnosisInfo.diagnosis,
 Prescription :DiagnosisInfo.Prescription

  }).then(res=>
    {
   setStatus(res.data)
    }
  )
}
const [status,setStatus]=React.useState(1)
function handle(e){
const newdata={...DiagnosisInfo}
newdata[e.target.id]=e.target.value
setDiagnosisInfo(newdata)
console.log(DiagnosisInfo)
}
  return (
    <>
    <form onSubmit={(e)=>submit(e)}>
      <div className="Form1">
      <div className="firstHalf">
     <p>Patient Id </p>  
    <br/>
        <input
     type="number"
     placeholder="Patient ID"
     onChange={(e)=>handle(e)}
     id="PatientId"
     value={DiagnosisInfo.PatientId}
    />
     <br/>
     <p>Patient Name </p>  
    <br/>
        <input
     type="text"
     placeholder="Patient Name"
     onChange={(e)=>handle(e)}
     id="PatientName"
     value={DiagnosisInfo.PatientName}
    />
     <br/>
     
    <br/>
    <p>Patient Email </p>  
    <br/>
        <input
     type="text"
     placeholder="Patient Email"
     onChange={(e)=>handle(e)}
     id="PatientEmail"
     value={DiagnosisInfo.PatientEmail}
    />
     <br/>
     <p>Patient Symptoms </p>  
    <br/>
        <input
     type="Text Box"
     placeholder="Patient Symptoms"
     onChange={(e)=>handle(e)}
     id="symptoms"
     value={DiagnosisInfo.symptoms}
    />
     <br/>
     <p>Ailed part </p> 
     <input
     type="text"
     placeholder="ailed part Description"
     onChange={(e)=>handle(e)}
     id="Part"
     value={DiagnosisInfo.Part}
    />
     <br/>
     <p>Diagnosis </p> 
     <input
     type="text"
     placeholder="Diagnosis"
     onChange={(e)=>handle(e)}
     id="diagnosis"
     value={DiagnosisInfo.diagnosis}
    />
     <br/>
     <p>Patient Prescription </p> 
     <input
     type="text box"
     placeholder="Prescription"
     onChange={(e)=>handle(e)}
     id="Prescription"
     value={DiagnosisInfo.Prescription}
    />
     <br/>

  
   

   
     
<br/>


      </div> 
      </div>
        <button>submit</button>
    </form>
    {/*status==0 && <AlreadyRegistered/>*/}
    {/*status!=0 && <Success/>*/}
    </>
  )
}

export default AddDiagnosis

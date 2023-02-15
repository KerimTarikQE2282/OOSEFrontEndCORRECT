import axios from 'axios'
import React from 'react'

const Search = () => {
    const [searchItem,setSearchItem]=React.useState({
      Email:''
    })
    const [PatientInfo,setPatientInfo]=React.useState({
     
      firstName: '',
      middleName: '',
      lastName: '',
      kebele: '',
      kifleketema: '',
      wereda: '',
      dob: '',
      email: '',
      phoneNumber: '',
      emergencyPhone: ''
    })
function handleChange(e){
    setSearchItem(prev=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
}
function clicked(e){
e.preventDefault()
axios.post('https://localhost:44371/api/PatientInfo/Search',{ Email:searchItem.Email,}).then(res=>{

setPatientInfo(prev=>{
    return{
      firstName: res.data.firstName,
      middleName: res.data.middleName,
      lastName:res.data.lastName,
      kebele: res.data.kebele,
      kifleketema: res.data.kifleketema,
      wereda: res.data.wereda,
      dob: res.data.dob,
      email: res.data.email,
      phoneNumber: res.data.phoneNumber,
      emergencyPhone: res.data.emergencyPhone

    
    }
  })
})
}



console.log(PatientInfo)

  return (
   
       <>
        <form >
      <input type="text" 
      className="searchTerm" 
      placeholder="Search Patient" 
      onChange={handleChange}
      name='Email'/>
      <br></br>
      <button type="submit" text='submit' className='button' onClick={clicked}>
       submit
     </button>
     </form>
     { PatientInfo.firstName != '' &&  
     <div className='searchResponse'>
      <p> firstName:-{PatientInfo.firstName}</p>

     <p> middleName :-{PatientInfo.middleName}</p>
    
     <p> last Name:-{PatientInfo.lastName}</p>
   
     <p> kebele:-{PatientInfo. kebele}</p>
    
     <p> kifleketema:-{PatientInfo. kifleketema}</p>
   
     <p> wereda:-{PatientInfo. wereda}</p>
     <p> Date of Birth:-{PatientInfo.dob}</p>
     <p> email:-{PatientInfo.email}</p>
     <p> phoneNumber:-{PatientInfo.phoneNumber}</p>
     <p> emergencyPhone:-{PatientInfo.emergencyPhone}</p> 
     </div>}
    
     
      
     
   
     </>
  )
}

export default Search

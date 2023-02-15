import React from 'react'
import Axios from 'axios'

const FetchHospitals = () => {
    const [Hospitals,setHospitals]=React.useState([])
 const  URL="https://localhost:44371/api/Hospitals"
 
React.useEffect(()=>{
    Axios.get(URL).
    then(
        res=>{
console.log(res.data)
setHospitals(res.data)
        }
)
},[])


  return (
    <div className='FetchHospitals'>
      <p className='noofHospitals'>no of Hospitals {Hospitals.length}</p>
      <table>
        <tr>
      <ul  className='DisplayHospitals'>
        <td>
       
        </td>
      <td>  {
            Hospitals.map(data=>(<li key={data.hospitalId} ><div> <p>Hospital Name:-{data.hospitalName}</p> <p>Hospital Representative:-{data.hospitalRep}</p>   <p> Hospital KifleKetema:-{data.hospitalKifleKetema} </p> <p>Hospital Kebele:-{data.hospitalKebele} </p> <p>Hospital Kebele:-{data.hospitalKebele}</p></div></li>))
        }
        </td>
      </ul>
      </tr>
      </table>
    </div>
  )
}

export default FetchHospitals

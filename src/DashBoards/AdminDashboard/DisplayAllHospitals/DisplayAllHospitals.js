import Axios  from 'axios'
import React from 'react'
import Nav from '../../Nav'
import SideBar from '../AdminDashBoard/Sidebar'
import FetchHospitals from './FetchHospitals'

const DisplayAllHospitals = () => {
    

  return (
    <>
    <Nav/>
   {<SideBar/>} 
  <FetchHospitals/>
    </>
  )
}

export default DisplayAllHospitals

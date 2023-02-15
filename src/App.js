import React from 'react'
import AdminDashboard from './DashBoards/AdminDashboard/AdminDashBoard/FullDashBoard'
import RepresentativeDashBoard from './DashBoards/RepresentativeDashBoard/RepDashBoard/RepDashBoard'
//////////////////////////////////////////////////***dashboards*** *////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////****cooke *********////////////////////////////////////////////////////////////////////////////////////////////

import Login from './DashBoards/Login'
/////////////////////////////////////////////////******login *******//////////////////////////////////////////////////////////////////////////////////////////////
import HospialRegistrationForm from './DashBoards/AdminDashboard/RegisterHospital/HospitalRegistration'
import RepresentativeRegistrationForm from './DashBoards/AdminDashboard/Register_Representative/FullRepresentativeRegistration'
import DisplayAllHospitals from './DashBoards/AdminDashboard/DisplayAllHospitals/DisplayAllHospitals'
/////////////////////////////////////////////////******admin**********///////////////////////////////////////////////////////////////////////////////////////////
import UserRegistrationForm from './DashBoards/RepresentativeDashBoard/RegisterUser/UserFormFull'
//////////////////////////////////////////////******representative***///////////////////////////////////////////////////////////////////////////////////////////
import FrontDeskDashBoard from './DashBoards/FrontDeskDashBoard/FrontDeskDashBoard'
import RegisterNewPatient from './DashBoards/FrontDeskDashBoard/RegisterNewPatient/RegisterNewPatient'
/////////////////////////////////////////////** Nurse******************////////////////////////////////////////////////////////////////////////////////////////
import NurseDashBoard from './DashBoards/NurseDashBoard/NurseDashBoard'
import RegisterVitals from './DashBoards/NurseDashBoard/AddVitals'
import ShowVitals from './DashBoards/NurseDashBoard/ShowVitals'
import PhysicianDashBoard from './DashBoards/physicianDashBoard/PhysicianDashBoard'
import AddPrescription from './DashBoards/physicianDashBoard/AddPrescription'
import InputDiagnosis from './DashBoards/physicianDashBoard/InputDiagnosis'




import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App(props) {
  const [User,setUser]=React.useState()
  var position;
  const GetRole=(role)=>{
   //console.log(role)
   setUser(role)
   position=role;
  }
  console.log(position)
  return (
    <>
  
   <Routes>
  
<Route path='/' element={<Login retrieve={GetRole} />}>  </Route>
   <Route
          exact
          
          element={position=='Admin' ?  <Navigate  to={"/AdminDashboard"} /> : <Navigate  to={"/ResDash"} />}
        />

    <Route path='AdminDashboard' element={<AdminDashboard/>}>  </Route>
    <Route path='RepresentativeDashBoard' element={<RepresentativeDashBoard/>}>  </Route>
    <Route path='HospialRegistrationForm' element={<HospialRegistrationForm/>}>  </Route>
    <Route path='UserRegistrationForm' element={<UserRegistrationForm/>}>  </Route>
    <Route path='DisplayAllHospitals' element={<DisplayAllHospitals/>}></Route>
    <Route path='FrontDeskDashBoard' element={<FrontDeskDashBoard/>}></Route>
    <Route path='RegisterNewPatient' element={<RegisterNewPatient/>}></Route>
    <Route path='NurseDashBoard' element={<NurseDashBoard/>}></Route>
    <Route path='RegisterVitals' element={<RegisterVitals/>}></Route>
    <Route path='ShowVitals' element={<ShowVitals/>}></Route>
    <Route path='PhysicianDashBoard' element={<PhysicianDashBoard/>}></Route>
    <Route path='AddPrescription' element={<AddPrescription/>}></Route>
    <Route path='InputDiagnosis' element={<InputDiagnosis/>}></Route>

    
    <Route path='UserRegistrationForm' element={<UserRegistrationForm/>}>  </Route>
    <Route path='RepresentativeRegistrationForm' element={<RepresentativeRegistrationForm/>}>  </Route>
  </Routes>

</>
  );
}

export default App;

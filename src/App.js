import HospialRegistrationForm from './Forms/RegisterHospital/Form'
import UserRegistrationForm from './Forms/RegisterUser/UserFormFull'
import DashBoard from './Forms/AdminDashboard/FullDashBoard'
import RepresentativeRegistrationForm from './Forms/Register_Representative/FullRepresentativeRegistration'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<DashBoard/>}>  </Route>
    <Route path='HospialRegistrationForm' element={<HospialRegistrationForm/>}>  </Route>
    <Route path='UserRegistrationForm' element={<UserRegistrationForm/>}>  </Route>
    <Route path='RepresentativeRegistrationForm' element={<RepresentativeRegistrationForm/>}>  </Route>
  </Routes>

</>
  );
}

export default App;

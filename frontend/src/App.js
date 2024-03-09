import React from 'react'
import Login from './Component/Login/Login'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Register from './Component/Regitster/Register';
import Profile from './Component/Profile/Profile'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      
      

    </Routes>
    </BrowserRouter>
  
  )

}

export default App
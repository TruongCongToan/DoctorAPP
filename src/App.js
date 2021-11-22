import React from 'react';
import SignUp from './component/signup';
import LogIn from './component/login';
import DashBoard from './component/dashboard';
import Home from './component/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

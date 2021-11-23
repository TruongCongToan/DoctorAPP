import React from 'react';
import SignUp from './component/signup';
import LogIn from './component/login';
import Dashboard from './component/dashboard';
import Home from './component/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from "./component/ForgotPassword";
import NavBar from './component/navbar/NavBar';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import SuggestProduct from './component/suggestion'


function App() {
  return (
    <div className="App">
      <div>
       <Navbar bg ="myRed" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
            {/* <img src = {logo192}/> */}
            ランダム
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
        <Nav.Link href ="home">  ホーム</Nav.Link>
        <Nav.Link href ="products">  Product</Nav.Link>
           
        <Nav.Link href ="about"> 顧客報告</Nav.Link>
        <Nav.Link href ="contact">  商品報告</Nav.Link>
        <Nav.Link href ="contact">  おすすめ商品</Nav.Link>
        </Nav>
          </Navbar.Collapse>
       </Navbar>
      
       { <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/navbar' element={<NavBar/>}/>
        <Route path="/suggest" element={<SuggestProduct />} />
        <Route path='/' element={<LogIn/>}/>
      </Routes>
      </BrowserRouter> }
       {/* <div className="content">

        thi is content
       </div> */}
    </div>
   </div>
  )
}

export default App

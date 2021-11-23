import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
    <div>
       <Navbar bg ="dark" variant="dark" sticky="top">
        <Navbar.Brand>
            {/* <img src = {logo192}/> */}
            Random
        </Navbar.Brand>
        <Nav>
        <Nav.Link href ="navbar">  Home</Nav.Link>
        <Nav.Link href ="home">  Product</Nav.Link>
           
        <Nav.Link href ="about">  About Us</Nav.Link>
        <Nav.Link href ="contact">  Contact Us</Nav.Link>
        </Nav>
       </Navbar>
       <div className="content">
        thi is content
       </div>
    </div>
    );
};

export default NavBar

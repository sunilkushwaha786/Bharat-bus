import React from 'react';
import './NavbarOne.css'; 

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg p-1 navbar-dark bg-dark">
        <div className='container-fluid'>
      <div style={{width:'5%', }}><a className="navbar-brand text-left"  href="/"><img src="./logoBB.png" style={{width:"70%", marginLeft:"20px"}} alt="" /> </a></div>
        {/* <div className="logo"> */}
          <div className="logo-text navbar-brand"><span style={{color:'orangered', fontSize:'2rem'}}>Bhaarat </span><span style={{ fontSize:'2rem'}}>Bus</span></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">           
            <span class="navbar-toggler-icon"></span>
          </button>
        {/* </div> */}
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-3 mb-lg-0" style={{fontSize:'20px', marginLeft:'780px', color:''}} >
          <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Register</a>
          </li> 
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;

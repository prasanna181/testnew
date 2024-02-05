import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector(state=>state.amount)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a classNameName="navbar-brand" href="/">
          State Bank of India
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
           
          </ul>
         <div>
            <button className="btn-primary" disabled='true'>Your Balance:{amount}</button>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

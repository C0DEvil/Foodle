import React from 'react';
import companyLogo from "./resources/Foodel.png";
import SearchDropdown from './searchDropdown';

const Header=()=>{
  return (
    <div style={{position:'sticky'}}>
        <div className="header">
            <img src={companyLogo} alt="Foodel Logo" id="logo" style={{}} />
            <ul className="headOptions">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        <SearchDropdown style={{zIndex:'10'}}/>
    </div>
  );
}

export default Header

import React from 'react';
import companyLogo from "./resources/Foodel.png";
import SearchDropdown from './searchDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const Header=()=>{
  return (
    <div style={{position:'sticky',top:'0'}}>
        <div className="header">
            <img src={companyLogo} alt="Foodel Logo" id="logo" style={{}} />
            <ul className="headOptions">
                <li><FaHome className='icons' style={{scale:'1.2'}}/>Home</li>
                <li><BsInfoLg className='icons' style={{scale:'1.2',marginRight:'3px'}}/>About</li>
                <li><MdPermPhoneMsg className='icons'/>Contact</li>
                <li><FaShoppingCart className='icons'/>Cart</li>
            </ul>
        </div>
        <SearchDropdown style={{zIndex:'10'}}/>
    </div>
  );
}

export default Header

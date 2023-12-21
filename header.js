import React from 'react';
import companyLogo from "./resources/Foodel.png";
import SearchDropdown from './searchDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header=({setSearchResults})=>{
    return (
    <div style={{position:'fixed',top:'0',width:'100%',display:'flex',flexDirection:'column',zIndex:'100'}}>
        <div className="header">
            <img src={companyLogo} alt="Foodel Logo" id="logo" style={{}} />
            <ul className="headOptions">
                <li><Link to="/home" ><FaHome className='icons' style={{scale:'1.2'}}/>Home</Link></li>
                <li><Link to="/about"><BsInfoLg className='icons' style={{scale:'1.2',marginRight:'3px'}}/>About</Link></li>
                <li><Link to="/contact"><MdPermPhoneMsg className='icons'/>Contact</Link></li>
                <li><Link to="/cart"><FaShoppingCart className='icons'/>Cart</Link></li>
            </ul>
        </div>
        <SearchDropdown style={{zIndex:'10'}} setFilteredResults={setSearchResults}/>
    </div>
  );
}

export default Header

import {RES_LOGO} from '../utils/constant';
import {useState} from 'react';
import { Link } from 'react-router';


const HeaderComponent=()=>{

    const [btnName,setBtnName]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={RES_LOGO} alt="logo"/>
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    if(btnName=="Login"?setBtnName("LogOut"):setBtnName("Login"));
                }}>{btnName}</button>
            </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
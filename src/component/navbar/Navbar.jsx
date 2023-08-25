import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../image/logo.png'


const Navbar = () => {

const [bar,setBar] = useState("burger-bar unclicked");
const [menu_Class, setMenuClass] = useState("menu1 hidden");
const [ismobile, setIsMobile] = useState(false);
 
const handlemobile = () =>{
    if(!ismobile){
        setBar("burger-bar clicked")
        setMenuClass("menu1 hidden")
    }else{
        setBar("burger-bar unclicked")
        setMenuClass("menu1 visible")
    }
    setIsMobile(!ismobile)
}
    return (
        <>
            <nav>
                <div className="menu-top">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                   
                </div>
                <div className="menu-bottom">
                    <ul className={ismobile?"visible":"hidden"}>
                        <li>
                            आचार्य-जी
                            <ul>
                                <li>
                                    <Link to="/">जीवन-परिचय</Link>
                                </li>
                                <li>
                                    <Link to="/">त्याग</Link>
                                </li>
                                <li>
                                    <Link to="/">आरती</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">संघ</Link>
                        </li>
                        <li>
                            <Link to="/">महोत्सव</Link>
                        </li>
                        <li>
                            <Link to="/">चातुर्मास</Link>
                        </li>
                    </ul>
                    {/* <div className="search-bar">
                        <input type="text" placeholder='Search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div> */}
                    <Link style={{color:"white"}} to="/admin">Login</Link>
                    <Link style={{marginLeft:"20px",color:"white"}}to="/adminPanal">AdminPanal</Link>
                    <div className="burger-menu" onClick={handlemobile} >
                        <div className={bar}></div>
                        <div className={bar}></div>
                        <div className={bar}></div>
                    </div>
                <div className={menu_Class}></div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
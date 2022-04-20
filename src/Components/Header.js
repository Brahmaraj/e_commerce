import React, { useContext, useState } from "react";//useEffect
import { Link, NavLink } from "react-router-dom";
import Hover from "./Hover";
import logo from "./Web/iSHOP Logo.svg";
import profile from "./Web/profile_icon.svg";
import cart from "./Web/bag_icon.svg";
import { total } from "./Cart";
// import { FavSetProvider } from "./FavItems";
import { DataContext } from "./DataContext";



const Header = () => {

    // const[items] = useContext(DataContext);
    
    const [fav] = useContext(DataContext);
    console.log("header");
    console.log(fav);

    
    const [value, setValue] = useState(0);
        
    const updateCart = () => {
        setValue(value+1);
    }

    const openMenu = () => {
        document.getElementsByClassName("blur_bg")[0].style.width = "100vw";        
        document.getElementsByClassName("blur_bg")[0].style.display = "block";
    }

    const cancelMenu = () => {
        document.getElementsByClassName("blur_bg")[0].style.display = "none";
    }

    // const [count, setCount] = useState(fav.size);

    // useEffect(()=>{
    //     setCount(fav.size);
    // },[fav])
//create useEffect (use fav.size dependency array in it)
    //const [count,setCount] // count and update it using useEffect
    // const [fav] = useContext(FavSetProvider);

    return (
        <div className="header_outer_container">
        <div className="header_icons">
            <div className="language">
                EN &nbsp;&nbsp;&#9660;
            </div>
            <div className="currency">
                $&nbsp;&nbsp;&#9660;
            </div>
            <div className="profile_div">
                <img src={profile} alt="profile" />
                &nbsp;&nbsp;
                My Profile
            </div>
            <div className="cart_div">
                <Link to="/cart"><img onClick={updateCart} src={cart} alt="cart" /></Link>
                &nbsp;&nbsp;
                <span id="fav_size">{fav.length}&nbsp;items</span>
                &nbsp;&nbsp;
                <span className="header_price">
                    ${total}
                </span>
            </div>
        </div>
        <div className="blur_bg">
            <div className="cancel_menu" onClick={cancelMenu}>
                &#10005;
            </div>
            <div className="mobile_header">
                <NavLink to="/home" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    HOME
                </NavLink>
                <NavLink to="/store" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    STORE
                </NavLink>
                <Hover />
                <NavLink to="/iphones" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    IPHONE
                </NavLink>
                <NavLink to="/ipads" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    IPAD
                </NavLink>
                <NavLink to="/macbooks" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    MACBOOK
                </NavLink>
                <NavLink to="/accessories" style={{textDecoration:"none"}} className="mobile_nav_bar">
                    ACCESSORIES
                </NavLink>
            </div>
        </div>
        <div onClick={openMenu} className="sliding_menu">&#8801; </div>
        <div>
            <img src={logo} alt="logo" className="top_logo" />
            <div className="header_container">
                <NavLink to="/home" style={{textDecoration:"none"}} className={({isActive}) => "header_button home_link" + (isActive? " selected" : "")}>
                    HOME
                </NavLink>
                <NavLink to="/store" style={{textDecoration:"none"}} className={({isActive}) => "header_store header_button home_link" + (isActive? " selected" : "")}>
                    STORE 
                </NavLink>
                <Hover />
                <NavLink to="/iphones" style={{textDecoration:"none"}} className={({isActive}) => "header_button home_link" + (isActive? " selected" : "")}>
                    IPHONE
                </NavLink>
                <NavLink to="/ipads" style={{textDecoration:"none"}} className={({isActive}) => "header_button home_link" + (isActive? " selected" : "")}>
                    IPAD
                </NavLink>
                <NavLink to="/macbooks" style={{textDecoration:"none"}} className={({isActive}) => "header_button home_link" + (isActive? " selected" : "")}>
                    MACBOOK
                </NavLink>
                <NavLink to="/accessories" style={{textDecoration:"none"}} className={({isActive}) => "header_button home_link" + (isActive? " selected" : "")}>
                    ACCESSORIES
                </NavLink>
            </div>
        </div>
        </div>
    )
}

export default Header;
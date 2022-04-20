import React from "react";
import { Link } from "react-router-dom";

const Hover = () => {
    return (
        <div className="header_button_onHover">
            <p className="accessories_heading">Accessories</p>
            <div className="accessories">
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Airpod & Wireless</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">AppleCare</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Car & Travel</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Bags, Shells and sleeves</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Bussiness & Security</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Cables & Docks</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Cameras & Videos</Link>
                <Link style={{textDecoration:"none"}} to="/" className="store_items">Cases & Films</Link>
            </div>
        </div>
    )
}

export default Hover;
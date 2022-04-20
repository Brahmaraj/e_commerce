import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
// import { CartItem } from "./CartItem";
// import { FavSetProvider } from "./FavItems";
import cart from "./Web/add_cart_icon.svg";
import favourite from "./Web/favorite_icon.svg";
// import { Update } from "./Header";
// import { updateCart } from "./Header";

const Item = (props) => {

    // let [cartitem, setCart] = useContext(CartItem);

    let [items, setItems, fav, setFav] = useContext(DataContext);

    const likeHandler = (id) => {
        var tempArr = [...fav];
        console.log("before")
        console.log(fav)
        console.log(id);
        tempArr.push(id);
        // tempArr.push(e.target.id)
        // console.log(e.target.value);
        setFav(tempArr);
        console.log("after")
        console.log(fav);
        
    }

    return (
        <div key={props.index} className="shop_item_box">
            <div className="image_container"><img className="item_image" src={props.image} alt={props.alt} /></div>
            <div className="item_onHover">
                <Link to="/cart"><img className="cart" src={cart} alt="cart" /></Link>
                <button value={props.id} onClick={(e)=>likeHandler(props.id)}><img id={props.id} className="favourite" src={favourite} alt="favourites" /></button>
            </div>
            <p className="item_heading">{props.heading}</p>
            <p className="item_price">Price : ${props.price}</p>
        </div>
    )
}

export default Item;
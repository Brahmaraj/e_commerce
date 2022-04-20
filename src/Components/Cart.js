import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";

export let favItemNo = 0;

export let total = parseInt(0);


const Cart = () => {

    const [items, fav] = useContext(DataContext);

    console.log(items);
    console.log(fav);

    let priceArr = items.map((ele)=>{
        return ele.price;
    })

    let [num, setNum] = useState([...priceArr])

    const onAdd = (event) => {
        // console.log(fav);
        num[event.target.value-1] = num[event.target.value-1]+items[event.target.value-1].price;        
        setNum([...num]);
    }

    const onSub = (event) => {
        if(num[event.target.value-1])
            num[event.target.value-1] = num[event.target.value-1]-items[event.target.value-1].price;        
        setNum([...num]);
    }

    let tempArr = [];

    const cancelItem = (e) => {
        
        console.log(num[e.target.value]/items[e.target.value].price)
        tempArr = [...fav].filter(ele => ele.id !== e.target.value-1);
        console.log(tempArr+"this is temp Arr");
        
        // setFavArr([...fav]);
        
    }

    
    favItemNo = fav.size

    return (
        <div className="cart_container">
            <div className="store_bar">
                Cart
            </div>
            <div className="cart_bar">
                <p className="cart_item_product cart_bar_item">
                    Product
                </p>
                <p className="cart_item_price cart_bar_item">
                    Price
                </p>
                <p className="cart_item_quantity cart_bar_item">
                    Quantity
                </p>
                <p className="cart_item_unit cart_bar_item">
                    Unit Price
                </p>
            </div>
            <div className="selected_products_container">
                    {
                        fav.map((id,index)=>{
                                return (
                                <div key={index} className="selected_products">
                                <button className="cancel_button" value={items[id-1].id} onClick={(e)=>cancelItem(e)}>&#10060;</button>
                                <img className="selected_product_image selected_item" src={items[id-1].image} alt={items[[id-1]].name} />
                                <p className="selected_item selected_item_name">{items[id-1].name}</p>
                                <p className={"selected_item individual_item_price"}>${num[id-1]}</p>
                                <div className="quantity_container">
                                    <button className="cart_button" value={items[id-1].id} onClick={(event)=>onAdd(event)}>+</button>
                                    <p className="selected_product_quantity">{num[id-1]/items[id-1].price}</p>
                                    <button className="cart_button " value={items[id-1].id}  onClick={(event)=>onSub(event)}>-</button>
                                </div>
                                <p className="selected_product_unitprice">{items[id-1].price}</p>
                             </div>
                            )
                            }
                            )
                            }
            </div>
            <div className="products_total">
                    {
                        [...fav].map((ele)=>{
                            console.log(total)
                                total += Number(num[ele-1]);
                                return null;
                        })
                    }
                    <p className="subtotal">Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${total}</p>
                    <p className="deliver_charge">Deliver Charge:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $40</p>
                    <p className="final_total">Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${total+40}</p>
                    <button className="checkout_button">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;

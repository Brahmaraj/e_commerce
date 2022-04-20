import React, { useContext } from "react"
import { DataContext } from "./DataContext";
import Item from "./Item";

const Accessories = () => {
    const [items] = useContext(DataContext);

    return (
        <div className="all_item_container"> 
            {
                items.filter((ele)=> ele.category==="Accessories" ).map(ele => {
                    return (
                        <Item heading = {ele.name} image={ele.image} alt={ele.name} price={ele.price} id={ele.id}/>
                    )
                })
            }
        </div>
    )
}

export default Accessories;
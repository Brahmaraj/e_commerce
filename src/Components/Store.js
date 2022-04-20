import React, { useContext, useState } from "react"
import Item from "./Item";
import iphone8 from "./Web/iphone_6_plus.svg"
import { DataContext } from "./DataContext";

let subcat = undefined;
let company = "boat";
export const useForceUpdate = () => {
        const [value, setValue] = useState(0);
        console.log(value);
        return () => setValue(value => value+1);
    }

const Store = () => {

    const [startIndex, setStartIndex] = useState(0);

    const [endIndex, setEndIndex] = useState(8);

    const pageFunc = (e) => {
        console.log(e.target.value);
        setEndIndex(e.target.value*4);
        setStartIndex(e.target.value*4 - 4);
    }

    const [items] = useContext(DataContext);

    const [price,setPrice] = useState(2500);

    let [selectedRange, setSelectedRange] = useState(0);

    const priceSort = (e) => {
        console.log(e.target.value);
        setSelectedRange(e.target.value);
        setPrice(e.target.value);
        forceUpdate();
    }

    const forceUpdate = useForceUpdate();

    let setSubCat = (e,id1,id2,id3) => {
        document.getElementById(e.target.id).style.color = "#33A0FF";
        document.getElementById(id1).style.color = "#262626";
        document.getElementById(id2).style.color = "#262626";
        document.getElementById(id3).style.color = "#262626";
        subcat = e.target.value;
        forceUpdate();
    }

    const [fil, setFil] = useState(true);
//usemakestyles ()
    const filterContent = () => {
        if(fil){
            document.getElementById("filter").style.position = "absolute";
            document.getElementById("filter").style.top = "20vh";
            document.getElementById("filter").style.left = "50%";
            document.getElementById("filter").innerHTML = "filter  &#9651;";
            document.getElementById("store_cont").style.display = "block";
            setFil(false);
        }
        else {
            document.getElementById("filter").style.position = "absolute";
            document.getElementById("filter").style.top = "45vh";
            document.getElementById("filter").style.left = "45%";
            document.getElementById("filter").innerHTML = "filter &#9660;";
            document.getElementById("store_cont").style.display = "none";
            setFil(true)
        }

    }

    const setcompany = (e,id1,id2,id3) => {
        company = e.target.value;
        document.getElementById(e.target.id).style.color = "#33A0FF";
        document.getElementById(id1).style.color = "#262626";
        document.getElementById(id2).style.color = "#262626";
        document.getElementById(id3).style.color = "#262626";
        console.log(company)
        forceUpdate();
    }

    let phone_more_tot = items.filter(ele => ele.sub_category==="phone_more");
    
    let headphone_tot = items.filter(ele => ele.sub_category==="headphone");

    let smartwatch_tot = items.filter(ele => ele.sub_category==="smartwatch");

    let cable_tot = items.filter(ele => ele.sub_category==="cable");

    return (
        <>
        <div className="store_bar">
            Store / Accessories
        </div>
        <div className="outer_container">
            <div id="store_cont" className="store_container">
                <div className="store_accessories_container">
                    <h2 className="store_accessories_container_heading">ACCESSORIES</h2>
                    <button id="phone_btn" value="phone_more" className="store_accessories_container_items" onClick={(e)=>setSubCat(e,"smartwatch_btn","headphone_btn","cable_btn")}>Phone & More &nbsp;&nbsp;&nbsp; {phone_more_tot.length}</button>
                    <button id="headphone_btn" value="headphone" className="store_accessories_container_items" onClick={(e)=>setSubCat(e,"smartwatch_btn","cable_btn","phone_btn")}>Headphone &nbsp;&nbsp;&nbsp; {headphone_tot.length}</button>
                    <button id="smartwatch_btn" value="smartwatch" className="store_accessories_container_items" onClick={(e)=>setSubCat(e,"headphone_btn","cable_btn","phone_btn")}>Smart Watch &nbsp;&nbsp;&nbsp; {smartwatch_tot.length} </button>
                    <button id="cable_btn" value="cable" className="store_accessories_container_items" onClick={(e)=>setSubCat(e,"smartwatch_btn","headphone_btn","phone_btn")}>Cables & Docks &nbsp;&nbsp;&nbsp; {cable_tot.length} </button>
                </div>
                <div className="store_prices">
                    <h2>PRICES</h2>
                    Ranger: ${selectedRange}
                    <br />
                    <input onChange={(e)=>priceSort(e)} className="store_prices_range" type="range" min="300" max="2500" />
                </div>
                <div className="store_brand_container">
                    <h2 className="store_brand_heading">BRAND</h2>
                    <button id="boat_btn" value="boat" onClick={(e)=>setcompany(e,"apple_btn","mi_btn","sony_btn")} className="store_brand_item">Boat</button>
                    <button id="apple_btn" value="apple" onClick={(e)=>setcompany(e,"boat_btn","mi_btn","sony_btn")} className="store_brand_item">Apple</button>
                    <button id="mi_btn" value="mi" onClick={(e)=>setcompany(e,"apple_btn","boat_btn","sony_btn")} className="store_brand_item">MI</button>
                    <button id="sony_btn" value="sony" onClick={(e)=>setcompany(e,"apple_btn","mi_btn","boat_btn")} className="store_brand_item">Sony</button>
                </div>
                <button className="store_more_button">
                    MORE
                </button>
            </div>
            <div className="store_right_container">
                <div className="store_iphone8_image">
                    <img className="iphone8_image" src={iphone8} alt="iphone 8" />
                    <div className="image_desc">
                        <p className="desc_heading desc_info">iPhone 8</p>
                        <p className="desc_info">Performance and design. Taken right to edge</p>
                        <p className="desc_info">SHOP NOW</p>
                        <p className="link_underline"></p>
                    </div>
                </div>
                <div id="filter" onClick={filterContent} className="filter_items">filter &#9660;</div>
                <div className="store_item_container">
                    {
                        items.filter((ele) => ele.sub_category===subcat && ele.company===company && ele.price<price).slice(startIndex, endIndex).map((ele,index)=>{
                            // console.log(subcat);
                                return <Item key={index} heading = {ele.name} image={ele.image} alt={ele.name} price={ele.price} id={ele.id}/>
                            // return null;
                        })
                    }
                </div>
                <div className="store_page">
                        <button className="page_number" value="1" onClick={(e)=>pageFunc(e)}>1</button>
                        <button className="page_number" value="2" onClick={(e)=>pageFunc(e)}>2</button>
                        <button className="page_number" value="3" onClick={(e)=>pageFunc(e)}>3</button>
                        <button className="page_number" value="4" onClick={(e)=>pageFunc(e)}>4</button>
                        <button className="page_number" value="5" onClick={(e)=>pageFunc(e)}>5</button>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Store;
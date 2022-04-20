import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image2_1 from "./miscellaneous//2_corousel.svg"
import image2_2 from "./miscellaneous/2_corousel.png";
import image1 from "./miscellaneous/corousel_1.png";
import image2 from "./miscellaneous/corousel_2.png";
import image3 from "./miscellaneous/corousel_3.png";
import shipping from "./Web/shipping.svg";
import support from "./Web/support.svg";
import refund from "./Web/refund.svg";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { DataContext } from "./DataContext";


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 200, itemsToShow: 2},
    {width: 550, itemsToShow: 3}
];

const Home = () => {
    
    const [index, setIndex] = useState(3);
    const [items] = useContext(DataContext);
    console.log(items);

    const loadMore = () => {
        setIndex(index+3);
    };

    return(
        <div className="home_outer_container">
        <div className="header_background">
            <div className="individual_images">
                <img className="carousel_image" src={image1} alt="corousel 1" />
                <img className="carousel_image" src={image2} alt="corousel 2" />
                <img className="carousel_image" src={image3} alt="corousel 3" />
            </div> 
        </div>
        <div className="best_seller_container">
            <p className="best_seller_heading">BEST SELLER</p>
            <Link to="/store" style={{textDecoration:"none"}} className="header_button best_selling_buttons">All</Link>
            <Link to="/mac" style={{textDecoration:"none"}} className="header_button best_selling_buttons">Mac</Link>
            <Link to="/iphones" style={{textDecoration:"none"}} className="header_button best_selling_buttons">iPhone</Link>
            <Link to="/ipads" style={{textDecoration:"none"}} className="header_button best_selling_buttons">iPad</Link>
            <Link to="/ipods" style={{textDecoration:"none"}} className="header_button best_selling_buttons">iPod</Link>
            <Link to="/accessories" style={{textDecoration:"none"}} className="header_button best_selling_buttons">Accessories</Link>
        </div>
        <div className="best_selling_items_container">
            {
                items.slice(0, index).map((ele,index)=>{
                    return (
                        <Item key = {index} heading = {ele.name} image={ele.image} alt={ele.name} price={ele.price} id={ele.id}/>
                    )
                })
            }
        </div>

            <button className="load_button_home" onClick={loadMore}>LOAD MORE</button>
            <div className="carousel2">
                <img className="carousel_bg_image" src={image2_1} alt="carousle 2" />
                <img className="carousel_ontop_image" src={image2_2} alt="carousle 2"/>
            </div>

            <div className="information_container">
            <div className="information">
                <img src={shipping} alt="shipping" className="infor_image"/>
                <h2 className="information_item">FREE SHIPPING</h2>
                <p className="information_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat facere aliquid aspernatur id eaque mollitia, maiores dolores facilis explicabo.
                </p>
            </div>
            <div className="information">
                <img src={refund} alt="shipping" className="infor_image"/>
                <h2 className="information_item">FREE SHIPPING</h2>
                <p className="information_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat facere aliquid aspernatur id eaque mollitia, maiores dolores facilis explicabo.
                </p>
            </div>
            <div className="information">
                <img src={support} alt="shipping" className="infor_image"/>
                <h2 className="information_item">FREE SHIPPING</h2>
                <p className="information_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat facere aliquid aspernatur id eaque mollitia, maiores dolores facilis explicabo.
                </p>
            </div>
            </div>
            <br />
            <h2 style={{textAlign:"center"}}>FEATURED ITEMS</h2>
            <div className="featured_container">
               <Carousel breakPoints={breakPoints}>
                {
                items.filter((ele)=> ele.category==="Accessories").map((ele,index)=>{
                    return (
                        <div key={index} className="featured_item_div">
                            <img className="featured_item" src={ele.image} alt={ele.name} />
                            <p className="featured_item_detail">
                                {ele.name} 
                                <br />
                                $ {ele.price}
                            </p>
                            <div className="featured_item_onHover">
                                
                            </div>
                        </div>
                    )
                })
            }
                </Carousel>
            </div>
        </div>
    )
}

export default Home;
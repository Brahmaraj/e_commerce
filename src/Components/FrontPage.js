import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import Accessories from "./Accessories";
import Cart from "./Cart";
import { DataProvider } from "./DataContext";
// import { FavItemsContext } from "./FavItems";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import Macbook from "./Macbook";
import Store from "./Store";
import "./style.css";

const FrontPage = () => {
    return (
        // <FavItemsContext>
        <DataProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/iphones" element={<Iphone />} />
                        <Route path="/ipads" element={<Ipad />} />
                        <Route path="/macbooks" element={<Macbook />} />
                        <Route path="/accessories" element={<Accessories />} />
                        {/* <Route path="/cart" element={<Cart />} /> */}
                    </Routes>
                    <Footer />
                </Router>
        </DataProvider>
        // </FavItemsContext>
    )
}

export default FrontPage;
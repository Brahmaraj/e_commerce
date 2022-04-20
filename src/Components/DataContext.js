import React, { createContext, useState } from "react";
import ipad1 from "./Products/Apple Ipad.png";
import ipad2 from "./Products/ipad_5th_gen.jpg";
import ipad3 from "./Products/ipad_2021.jpg";
import ipad4 from "./Products/ipad_air.jpeg";
import ipad5 from "./Products/ipad_air.jpg";
import ipad6 from "./Products/ipad_pro.png";
import ipad7 from "./Products/ipad_pro_2020.jpeg";
import ipad8 from "./Products/ipad-mini.png";

import iphone1 from "./Products/Apple iPhone 11.png";
import iphone2 from "./Products/iphone_11.png";
import iphone3 from "./Products/iphone_12.png";
import iphone4 from "./Products/iphone_12_purple.jpeg";
import iphone5 from "./Products/iphone_13.jpg";
import iphone6 from "./Products/iphone_13_blue.png";

import macbook1 from "./Products/Apple Macbook Air.png";
import macbook2 from "./Products/415ELavtbuL._SL1000_.png";
import macbook3 from "./Products/macbook_air_2019.png";
import macbook4 from "./Products/macbook_pro_2021.jpg";
import macbook5 from "./Products/apple-macbook-air-2020.jpg"

import smartwatch_magic from "./Products/Apple Smartwatch Magic.png";
import apple_watch from "./Products/Apple Watch 21-1.png";
import airpod from "./Products/apple_airpods.png";
import airpod_max from "./Products/airpods-max-hero-select-202011_FMT_WHH.png";
import homepod from "./Products/Apple_homepod-mini-white.png";
import ipod from "./Products/apple_iPod_2A.png";
import cam from "./Products/design-hero_2x.png";
import mac_mini from "./Products/New Apple Mac Mini.png";
import antenna from "./Products/MQHX2.png";
import cable from "./Products/52a2df80-98ec-4e1b-9cfc-71a68d7575b3_1.4fbf81e4bfa56bc8feffa82b5b15ca83.png";
import boatn from "./Web/boat_normal.jpg";
import boatr from "./Web/boat_rockerz.jpg";
import boatovere from "./Web/boat_overear.jpg";
import boatg from "./Web/boat_gold.jpg";
import mi_bt from "./Web/mi_bluetooth.jpeg";
import mi_overe from "./Web/mi_overear.jpeg";
import mi_bass from "./Web/mi_superbass.jpg";
import sony_b from "./Web/sony_bass.jpg";
import sony_nc from "./Web/sony_noise_cancellation.jpg";
import sony_one from "./Web/sony_onear.jpg";
import sony_wl from "./Web/sony_wireless.png";

export let DataContext = createContext();

export const DataProvider = (props) => {

    let [items, setItems] = useState([
        {
            category:"iPad",
            name:"Apple Ipad 2022",
            sub_category: "phone_more",
            company:"apple",
            image:ipad1,
            price:700,
            id:1
        },
        {
            category:"iPad",
            name:"Apple Ipad 5th Generation",
            sub_category: "phone_more",
            company:"apple",
            image:ipad2,
            price:900,
            id:2
        },
        {
            category:"iPad",
            name:"Apple Ipad 2021",
            sub_category: "phone_more",
            company:"apple",
            image:ipad3,
            price:600,
            id:3
        },
        {
            category:"iPad",
            name:"Apple Ipad Air",
            sub_category: "phone_more",
            company:"apple",
            image:ipad4,
            price:1100,
            id:4
        },
        {
            category:"iPad",
            name:"Apple Ipad Air 2020",
            sub_category: "phone_more",
            company:"apple",
            image:ipad5,
            price:900,
            id:5
        },
        {
            category:"iPad",
            name:"Apple Ipad Pro",
            sub_category: "phone_more",
            company:"apple",
            image:ipad6,
            price:1000,
            id:6
        },
        {
            category:"iPad",
            name:"Apple Ipad Pro 2020",
            sub_category: "phone_more",
            company:"apple",
            image:ipad7,
            price:700,
            id:7
        },
        {
            category:"iPad",
            name:"Apple Ipad Mini",
            sub_category: "phone_more",
            company:"apple",
            image:ipad8,
            price:500,
            id:8
        },
        {
            category:"iPhone",
            name:"Apple iPhone 11",
            sub_category: "phone_more",
            company:"apple",
            image:iphone1,
            price:900,
            id:9
        },
        {
            category:"iPhone",
            name:"Apple iPhone 11",
            sub_category: "phone_more",
            company:"apple",
            image:iphone2,
            price:900,
            id:10
        },
        {
            category:"iPhone",
            name:"Apple iPhone 12",
            sub_category: "phone_more",
            company:"apple",
            image:iphone3,
            price:1000,
            id:11
        },
        {
            category:"iPhone",
            name:"Apple iPhone 12 Purple",
            sub_category: "phone_more",
            company:"apple",
            image:iphone4,
            price:1000,
            id:12
        },
        {
            category:"iPhone",
            name:"Apple iPhone 13",
            sub_category: "phone_more",
            company:"apple",
            image:iphone5,
            price:1200,
            id:13
        },
        {
            category:"iPhone",
            name:"Apple iPhone 13",
            sub_category: "phone_more",
            company:"apple",
            image:iphone6,
            price:1200,
            id:14
        },
        {
            category:"Macbook",
            name:"Apple Macbook",
            sub_category: "phone_more",
            company:"apple",
            image:macbook1,
            price:1500,
            id:15
        },
        {
            category:"Macbook",
            name:"Apple Macbook 2022",
            sub_category: "phone_more",
            company:"apple",
            image:macbook2,
            price:2000,
            id:16
        },
        {
            category:"Macbook",
            name:"Apple Macbook 2019",
            sub_category: "phone_more",
            company:"apple",
            image:macbook3,
            price:1100,
            id:17
        },
        {
            category:"Macbook",
            name:"Apple Macbook 2021",
            sub_category: "phone_more",
            company:"apple",
            image:macbook4,
            price:1500,
            id:18
        },
        {
            category:"Macbook",
            name:"Apple Macbook 2020",
            sub_category: "phone_more",
            company:"apple",
            image:macbook5,
            price:1300,
            id:19
        },
        {
            category:"Accessories",
            sub_category: "smartwatch",
            company:"apple",
            name:"Smartwatch Magic",
            image:smartwatch_magic,
            price:800,
            id:20
        },
        {
            category:"Accessories",
            sub_category: "smartwatch",
            company:"apple",
            name:"Apple Watch",
            image: apple_watch,
            price:1000,
            id:21
        },
        {
            category:"Accessories",
            sub_category: "music",
            name:"Airpod",
            company:"apple",
            image:airpod,
            price:900,
            id:22
        },
        {
            category:"Accessories",
            sub_category: "music",
            name:"Airpod Max",
            company:"apple",
            image:airpod_max,
            price:700,
            id:23
        },
        {
            category:"Accessories",
            sub_category: "cable",
            name:"Antenna",
            company:"apple",
            image:antenna,
            price:300,
            id:24
        },
        {
            category:"Accessories",
            sub_category: "cable",
            name:"Apple Homepod",
            company:"apple",
            image:homepod,
            price:800,
            id:25
        },
        {
            category:"Accessories",
            sub_category: "music",
            name:"Apple iPod",
            company:"apple",
            image:ipod,
            price:500,
            id:26
        },
        {
            category:"Accessories",
            sub_category: "cable",
            name:"Mac Mini",
            company:"apple",
            image:mac_mini,
            price:800,
            id:27
        },
        {
            category:"Accessories",
            sub_category: "cable",
            name:"cables",
            company:"apple",
            image:cable,
            price:400,
            id:28
        },
        {
            category:"Accessories",
            sub_category: "cable",
            name:"Lens Camera",
            company:"apple",
            image:cam,
            price:400,
            id:29
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Boat Rockerz",
            company:"boat",
            image:boatr,
            price:400,
            id:30
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Boat Basic",
            company:"boat",
            image:boatn,
            price:300,
            id:31
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"MI BassHeads",
            company:"mi",
            image:mi_bass,
            price:450,
            id:32
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"MI Bluethooth",
            company:"mi",
            image:mi_bt,
            price:425,
            id:33
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"MI Overear",
            company:"mi",
            image:mi_overe,
            price:400,
            id:34
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Sony BassHeads",
            company:"sony",
            image:sony_b,
            price:500,
            id:35
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Sony Noise cancellation",
            company:"sony",
            image:sony_nc,
            price:800,
            id:36
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Sony On ear",
            company:"sony",
            image:sony_one,
            price: 500,
            id:37
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Boat Gold",
            company:"boat",
            image:boatg,
            price:900,
            id:38
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Boat Overear",
            company:"boat",
            image:boatovere,
            price:600,
            id:39
        },
        {
            category:"Accessories",
            sub_category: "headphone",
            name:"Sony Wireless",
            company:"sony",
            image:sony_wl,
            price:400,
            id:40
        }
    ]);

    let [fav, setFav] = useState([1,2]);
    console.log("context");
    console.log(fav)

    return(
        <DataContext.Provider value={[items, setItems, fav, setFav]}>
            {props.children}
        </DataContext.Provider>
    )
}
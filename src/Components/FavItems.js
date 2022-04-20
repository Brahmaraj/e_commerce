import React, { createContext, useState } from "react";

export let FavSetProvider = createContext();

export const FavItemsContext = (props) => {

    let favSet = new Set();

    let [fav, setFav] = useState(favSet);

    return(
        <FavSetProvider.Provider value={[fav, setFav]}>
            {props.children}
        </FavSetProvider.Provider>
    )
};

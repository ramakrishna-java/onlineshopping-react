import { useState } from "react";

const useItem=(initialItems, toUpper=false) =>{
    const[items, setItems] =useState(initialItems)

    const addItem=(itemName)=>{
        setItems(prevItem=>{
            return [...items, toUpper?itemName.toUpperCase():itemName]
        })
    }
    return [items, addItem]
}

export default useItem
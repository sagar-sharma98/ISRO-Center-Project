import { createContext } from "react";

export const CartContext = createContext({
    list: [],
    sortList: () => {}
})
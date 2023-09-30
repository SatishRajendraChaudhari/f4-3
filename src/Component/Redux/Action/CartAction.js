
import { ADD_TO_CART,REMOVE_TO_CART,LOAD_CART_FROM_LOCAL_STORAGE } from "./Action"


export const addToCart=(item_Id)=>{
 return{
    type:ADD_TO_CART,
    payload:item_Id,
 }
}

export const removeCart=(item_Id)=>{
  return{
    type:REMOVE_TO_CART,
    payload:item_Id
  }
}

export const addToLocalStorage=()=>{
    const cartItem=JSON.parse(localStorage.getItem("cart"))||[];
    return{
        type:LOAD_CART_FROM_LOCAL_STORAGE,
        payload:cartItem
    }
}
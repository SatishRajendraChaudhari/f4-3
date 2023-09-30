import { ADD_TO_CART,REMOVE_TO_CART,LOAD_CART_FROM_LOCAL_STORAGE } from "../Action/Action";
import React from 'react'
const initalState={
    cartitems:[],
}



function CartReducer( state=initalState,action) {
  switch(action.type){
    case ADD_TO_CART:
        const newItem=action.payload;
        const upDateCart=[...state.cartitems,newItem];
        localStorage.setItem("cart",JSON.stringify(upDateCart));
        return{
            ...state,
            cartitems:upDateCart
        }

        case REMOVE_TO_CART:
            const itemIdRemove=action.payload;
            const UpdateAfterRemove=state.cartitems.filter((item)=>item.id!==itemIdRemove);
            localStorage.setItem("cart",JSON.stringify(UpdateAfterRemove));
            return{
                ...state,
                cartitems:UpdateAfterRemove
            }

            case LOAD_CART_FROM_LOCAL_STORAGE:
                return{
                    ...state,
                    cartitems:action.payload
                }

                default:
                    return state
  }
} 

export default CartReducer;

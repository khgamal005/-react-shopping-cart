import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
  //   const updatedState = { ...state };
  //   const itemIndex = updatedState.items.findIndex(
  //     (item) => item.id === action.item.id
  //   );
  //     console.log(itemIndex ,updatedState)
  //   if (itemIndex>=0) {
  //     updatedState.items[itemIndex].amount += action.item.amount;
  //   } else {
  //     updatedState.items.push(action.item);
  //   }
  //   updatedState.totalAmount += action.item.amount * action.item.price;
  //   return updatedState;
  // }


  // ***************************************************
  let  updatedItems=[...state.items]
  const checking = state.items.find(el=>el.id===action.item.id)
  if(checking){
    updatedItems=state.items.map(el=>el.id===action.item.id?{...el,amount :el.amount +action.item.amount}:el)
  }else
  // { updatedItems =[...state.items,{...action.item}]}
            updatedItems = state.items.concat(action.item);


  return{
      items :updatedItems,
      totalAmount:state.totalAmount+action.item.amount*action.item.price
    }

  // if (action.type === 'ADD') {
  //   const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
  //     const existingCartItemIndex =state.items.findIndex(item=>item.id===action.item.id)
  //     const exitingCartItem=state.items[existingCartItemIndex]
  //     let updatedItems;
  //     if(exitingCartItem){
  //       const  updatedItem={
  //           ...exitingCartItem,
  //           amount:exitingCartItem.amount+action.item.amount
  //         }
  //         updatedItems=[...state.items]
  //         updatedItems[existingCartItemIndex]=updatedItem
  //     }else{
  //         updatedItems = state.items.concat(action.item);


  //     }
  //   return {
  //     items: updatedItems,
  //     totalAmount: updatedTotalAmount
  //   };
  
  // return defaultCartState;
  }
  if(action.type==="REMOVE"){
    let  updatedItems=[...state.items]
    const checking = updatedItems.find(el=>el.id===action.id)
      const updatedTotalAmount =state.totalAmount-checking.price
    if(checking.amount===1){
      updatedItems=state.items.filter(el=>el.id!== action.id)
    }else{
     checking.amount--
    }
    return {
      items :updatedItems,
      totalAmount:updatedTotalAmount
    }
  }

// &&&&&&&&&&&&&&&&&&&&&&

  // if (action.type === 'REMOVE') {
  //   const existingCartItemIndex = state.items.findIndex(
  //     (item) => item.id === action.id
  //   );
  //   const existingItem = state.items[existingCartItemIndex];
  //   const updatedTotalAmount = state.totalAmount - existingItem.price;
  //   let updatedItems;
  //   if (existingItem.amount === 1) {
  //     updatedItems = state.items.filter(item => item.id !== action.id);
  //   } else {
  //     const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
  //     updatedItems = [...state.items];
  //     updatedItems[existingCartItemIndex] = updatedItem;
  //   }

  //   return {
  //     items: updatedItems,
  //     totalAmount: updatedTotalAmount
  //   };


// }
if(action.type==='CLEAR'){
return defaultCartState;
}

}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const clearItemHandeler=()=>{
    dispatchCartAction({type :'CLEAR'})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItem:clearItemHandeler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
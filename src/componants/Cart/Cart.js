
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from './../../Store/cart-context';
import React ,{ useContext, useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';


const Cart = (props) => {
  const [isCheckout,setisCheckout]=useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);


  const ctxContext = useContext(CartContext)
  const totalAmount=`$${ctxContext.totalAmount.toFixed(2)}`
  const hasItems =ctxContext.items.length>0
  const cartItemRemoveHandler = (id) => {
    ctxContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    {ctxContext.addItem({...item, amount:1})}
  };
  const orderHandeler=()=>{
setisCheckout(true)
  }
  const actionButton=(
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        {hasItems &&<button className={classes.button} onClick={orderHandeler}>Order</button>}
      </div>
  )
  
    const orderUserHandeler=async (userData)=>{
      setIsSubmitting(true)
      await fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/orders.json',{
        method:'Post',
        body :JSON.stringify({
          user :userData,
          ordersitems:ctxContext.items
        }),
      })
      setIsSubmitting(false)
      setDidSubmit(true)
      ctxContext.clearItem()

    }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctxContext.items.map((item) => (
         <CartItem
         key={item.id}
         name={item.name}
         amount={item.amount}
         price={item.price}
         onRemove={cartItemRemoveHandler.bind(null, item.id)}
         onAdd={cartItemAddHandler.bind(null, item)}
       />
      ))}
    </ul>
  );
  const cartModalContent =<React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
     { isCheckout && <Checkout onCancel={props.onCloseCart} onConfirm={orderUserHandeler}/>}
     {!isCheckout&& actionButton }
     </React.Fragment>
      
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onCloseCart}>
    {!isSubmitting && !didSubmit&& cartModalContent}
    {isSubmitting &&  isSubmittingModalContent}
    {didSubmit &&  didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
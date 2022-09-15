import React,{useContext,useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import CartContext from './../../Store/cart-context';

export default function HeaderCartButton(props) {
  const ctxCart=  useContext(CartContext);

const [btnisHighLighter, setbtnisHighLighter] = useState(false)
const {items}=ctxCart
const buttonClasses=`${classes.button} ${btnisHighLighter? classes.bump :''} `
const numberOfCardItem = items.reduce((curNumber ,item)=>{
  return curNumber +item.amount
},0)
useEffect(()=>{
  if(items.length===0){
    return;
  }
  setbtnisHighLighter(true)
const timer =setTimeout(()=>{
  setbtnisHighLighter(false)

},300)
return(()=>{
  clearTimeout(timer)
})

},[items])

  return (
  <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCardItem}</span>

  </button>

  )
}

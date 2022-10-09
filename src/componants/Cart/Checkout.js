import { useRef ,useState} from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const isEmpty = value => value.trim()===''
  const isFiveChars = value => value.trim().length ===5
  const [formInputValidity, setformInputValidity] = useState({
    name :true,
    street:true,
    city:true,
    postolCode:true,
  })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();
   
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid=!isEmpty(enteredName)
    const enterdStreetIsValid=!isEmpty(enteredStreet)
    const enteredCityIsValid=!isEmpty(enteredCity)
    const enteredPostalIsValid=isFiveChars(enteredPostalCode)
    setformInputValidity({
      name :enteredNameIsValid,
      street :enterdStreetIsValid,
      city :enteredCityIsValid,
      postolCode :enteredPostalIsValid,
    })
  
    const formIsValid = enterdStreetIsValid && enteredNameIsValid &&enteredCityIsValid &&enteredPostalIsValid

    if(!formIsValid){
      return
    }
    props.onConfirm({
      name:enteredName,
      street:enteredStreet,
      city:enteredCity,
      postolCode :enteredPostalCode
    })
   
  };
  const classNamecontrol =`${classes.control } ${formInputValidity.name?'': classes.invalid }`
  const classStreetcontrol =`${classes.control } ${formInputValidity.street?'': classes.invalid }`
  const classCitycontrol =`${classes.control } ${formInputValidity.city?'': classes.invalid }`
  const classPostolCodecontrol =`${classes.control } ${formInputValidity.postolCode?'': classes.invalid }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classNamecontrol}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>please enter valid name</p>}
      </div>
      <div className={classStreetcontrol}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'  ref={streetInputRef}/>
        {!formInputValidity.street && <p>please enter valid street</p>}

      </div>
      <div className={classPostolCodecontrol}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputValidity.postolCode && <p>please enter valid postol</p>}

      </div>
      <div className={classCitycontrol}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
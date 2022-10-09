import React ,{ useEffect,useState} from 'react'
import Card from '../UI/Card'
import classes from './AvailabelMeals.module.css'
import MealItem from './MealsItem/MealItem'

function AvilabelMeals() {
const [meals ,setmeals]=useState([])
const [loading ,setloading]=useState(false)
const [errorhttp ,seterrorhttp]=useState(false)
const fetchMeals=async()=>{
  setloading(true)
  const res= await fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/Meals.json')
  if(!res.ok)  {
    throw new Error('faild to fetch')
  }

  const data =await res.json()
  const loadedMeals=[]
  for(const key in data){
    loadedMeals.push({
      id:key,
      name:data[key].name,
      description:data[key].description
      ,
      price:data[key].price,
    })
  }

  console.log(loadedMeals)
  setmeals(loadedMeals)
  setloading(false)
}


 
  useEffect(()=>{
    fetchMeals().catch(error=>{
      seterrorhttp(error.message)
      setloading(true)
    })
    
  },[])
  

  const mealslist=meals.map(meal=><MealItem key ={meal.id}
    id={meal.id}
     name={meal.name} 
     description={meal.description} 
     price={meal.price} />)
    
    
     let content = mealslist
     if(loading){
      content=<p>loading...</p>
     }
     if(errorhttp){
      content =<p className={classes.error}>{errorhttp}</p>
     }
  return (
    <section className={classes.meals}>
      <ul>
        <Card>
    {content}
        </Card>
      </ul>
    </section>
  )
}

export default AvilabelMeals
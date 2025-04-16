import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


//it changes the counter value on the  ui hooks concept
let [counter,setCounter]  = useState(15)

//let counter = 15
const addValue =()=>{
  //console.log("added",Math.random(),counter)
  //counter = counter+1
  if(counter<20){
    setCounter(counter+1)
  }
  else{
    setCounter(counter)
  }
  
  
}
const removeValue =()=>{
  //
  //counter = counter+1
  if(counter>0){
    setCounter(counter-1)
  }
  else{
    setCounter(counter)
  }
 
  
}
  return (
    <>
     
     <h1>chai aur react</h1>
     <h2>counter value : {counter}</h2>

     <button onClick={addValue}
     >add value:{counter}</button>
     <br />
     <button onClick={removeValue}
     >remove value:{counter}</button>
     <br />
     <footer>footer : {counter}</footer>
    </>
  )
}

export default App

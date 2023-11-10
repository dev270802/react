import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
   
    console.log(counter)
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
    console.log(counter)
  }
  return (
    <>
      <h1>Counter | Your Chai Count {counter}</h1>
      <button onClick={addValue} disabled={counter>=20}>Add Value</button>
      <button onClick={removeValue} disabled={counter<=0}>Remove Value</button>
    </>
  )
}

export default App

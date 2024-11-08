import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  function addValue(){
    counter++;
    setCounter(counter)
    console.log("value added "+counter);
  }
  function removeValue(){
    if(counter>0){
      counter--;
    setCounter(counter)
    console.log("value removed "+counter);
    }else{
        setCounter(0)
    }
    
  }
  return (
    <><div>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick = {addValue}>Add Value</button>
      <br/>
      <button onClick = {removeValue}>Remove Value</button>
      </div>
     </>  
  )
}

export default App

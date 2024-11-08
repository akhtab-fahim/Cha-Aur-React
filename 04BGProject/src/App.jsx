import React from 'react'
import {useState} from 'react'
function App() {
  const [color,setColor] = useState('black')
  

  return (
    <div className="w-full h-100 duration-200" style={{backgroundColor : color}}>
        <button onClick={()=>{ setColor("red")}} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
         Red
        </button>   
        <button onClick={()=>{ setColor("blue")}} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
         Blue
        </button> 
        <button onClick={()=>{ setColor("yellow")}} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
         Yellow
        </button> 
        </div>
  )
}

export default App

//tailwind which i coudnt uderstand
{/* <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" style={{backgroundColor: "white"}}>
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" style={{backgroundColor: "white"}}>
            Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" style={{backgroundColor: "white"}}>
            Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" style={{backgroundColor: "white"}}>
            Black
          </button>
          
        </div>
      </div>
    </div> */}
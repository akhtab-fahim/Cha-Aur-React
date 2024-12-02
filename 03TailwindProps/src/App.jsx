import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  const cardDetails = {
    name : "Fahim",
    title : "Ai",
    body : "Lorem*sddasdagarsvsfbfeqefwfesdf"
  }
  return (
    <>
      <h1 className='bg-orange-200 text-black p-4 rounded-xl text-4xl'>HaanJi</h1>
      <Card userInfo={cardDetails}/>
    </>
  )
}

export default App

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 rounded-md text-3xl text-orange-500 '>User : {userid}</div>
  )
}

export default User
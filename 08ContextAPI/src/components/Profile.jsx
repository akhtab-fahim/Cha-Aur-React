import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UseContext"

function Profile() {
  const {user} = useContext(UserContext)
  if(!user ) return <div>Pls Login</div>

  return <div>welcome {user.username}</div>
}

export default Profile
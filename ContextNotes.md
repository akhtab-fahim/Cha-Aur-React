# Context API
Its Like a **Global Variable** Which can be accessed by all elements 
1. Fitst We have to make ```context``` folder inside ```src``` folder
2. create ```UseContext.js``` file where we create context using ```createContext``` 

```javascript 
import React from "react";
//creating context
const UserContext = React.createContext()
export default UserContext;
```
3. Make a Context Provider 
```js
import React, { useState } from "react";
import UserContext from "./UseContext";


//creating a provider 

const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    //wraping and providing some value 
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children }
        </UserContext.Provider>
    )
}

export default UserContextProvider
```

3. By Wrapping the provider we can give values by ```value``` attribute

```js
    <UserContextProvider>
        <Login/>
        <Profile/>
    </UserContextProvider>
```

4. Using context in the **Components** 
#### Login Component
```js
    import React from 'react'
    import { useState,useContext } from 'react'
    import UserContext from '../context/UseContext'
    function Login() {
        const [username,setUsername] = useState('')
        const [pass,setPass] = useState('')

        const {setUser} = useContext(UserContext)

        const handleSubmit = (event) =>{
            event.preventDefault();
            setUser({username,pass})

        }



  return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder='username' />
            <input type="text"
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

```

#### Profile Component

```js
    import React from 'react'
    import { useState,useContext } from 'react'
    import UserContext from '../context/UseContext'
    function Login() {
        const [username,setUsername] = useState('')
        const [pass,setPass] = useState('')

        const {setUser} = useContext(UserContext)

        const handleSubmit = (event) =>{
            event.preventDefault();
            setUser({username,pass})

        }



    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder='username' />
            <input type="text"
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
    }

    export default Login
```
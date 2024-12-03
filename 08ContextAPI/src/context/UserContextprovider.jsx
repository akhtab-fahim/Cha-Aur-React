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
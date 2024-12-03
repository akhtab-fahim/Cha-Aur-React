import Reacts from "react"
import UserContextProvider from "./context/UserContextprovider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}



export default App

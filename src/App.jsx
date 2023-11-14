import { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import SiteRoutes from './SiteRoutes'



function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem("user") ?? null))

  },[])

  const handleLogin = () => {
    const user = {id:1, name: "onursir"}
    setUser(user)
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/")
  }

  const handleLogout = () => {
    localStorage.removeItem(user)
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout}/>
      <div className="container">
        <div className="row">
          <div className="com-sm-12">
           
          <SiteRoutes handleLogin={handleLogin} user={user} />
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App

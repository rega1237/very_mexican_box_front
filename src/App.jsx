import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignIn from './pages/login/SignIn'
import SignUp from './pages/login/SignUp'
import Index from './pages/index/Index'
import NavBar from './components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import UserContext from './components/store/userContext';
import Subscription from './pages/subscription/Subscription';
import UserAccount from './pages/user_account/UserAccount';
import FetchModal from './components/FetchModal/FetchModal';

function App() {
  const userCtx = useContext(UserContext);
  const [isLog, setIsLog] = useState(false)
  const [isUserFetched, setIsUserFetched] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  const fetchUser = async (id) => {
    const url = 'http://localhost:3000'

    // Start spinner
    handleFetching()

    // Fetch user
    const userFetch = await fetch(`${url}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),   
      }
    })
    
    // Fetch response Headers
    const userFetchHeaders = userFetch.headers
    
    // if userFetch is not ok, set error and stop spinner
    if(!userFetch.ok) {
      userCtx.setError(true, "Error al cargar el usuario", false)
      handleFetching()
    }
  
    // Set values in localStorage
    if(userFetchHeaders.get("access-token") != "") {
      localStorage.setItem("access-token", userFetchHeaders.get("access-token"));
    }
      
    localStorage.setItem("client", userFetchHeaders.get("client"));
    localStorage.setItem("uid", userFetchHeaders.get("uid"));
    
    // Parse response
    const response = await userFetch.json()

    // Set user in context
    userCtx.getUser(response.id, response.name, response.email, response.stripe_id)

    // Stop spinner
    setIsUserFetched(true)
    handleFetching()
  }

  useEffect(() => {
    const id = localStorage.getItem('id')
    const isLogged = localStorage.getItem('isLogged')

    if (isLogged == 'true') {
      fetchUser(id)
    }
  }, [])

  const handleFetching = () => {
    console.log('fetching')
    setIsFetching(prevIsFetching => !prevIsFetching)
  }

  const handleInAuthView = () => {
    setIsLog(true)
  }

  const handleOutAuthView = () => {
    setIsLog(false)
  }

  return (
    <>
      <Router>
        {!isLog && <NavBar isUserFetched={isUserFetched} removeNavBar={handleInAuthView} addNavBar={handleOutAuthView} />}
        <FetchModal isFetching={isFetching} />
        <Routes>
          <Route path="/signin" element={<SignIn addNavBar={handleOutAuthView} />} />
          <Route path="/signup" element={<SignUp addNavBar={handleOutAuthView} />} />
          <Route path="/useraccount" element={<UserAccount handleFetching={handleFetching} removeNavBar={handleInAuthView} isUserFetched={isUserFetched} />} />
          <Route path="/" element={<Index />} />
          <Route path="/suscripciones" element={<Subscription />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

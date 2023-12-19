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

function App() {
  const userCtx = useContext(UserContext);
  const [isLog, setIsLog] = useState(false)
  const [isUserFetched, setIsUserFetched] = useState(false)

  const fetchUser = async (id) => {
    try{
      await userCtx.getUser(id)
      setIsUserFetched(true)
    }catch(error){
      userCtx.setError(true, "Error al cargar el usuario", false)
      return error
    }
  }

  useEffect(() => {
    const id = localStorage.getItem('id')
    const isLogged = localStorage.getItem('isLogged')

    if (isLogged == 'true') {
      fetchUser(id)
    }
  }, [])

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
        <Routes>
          <Route path="/signin" element={<SignIn addNavBar={handleOutAuthView} />} />
          <Route path="/signup" element={<SignUp addNavBar={handleOutAuthView} />} />
          <Route path="/useraccount" element={<UserAccount removeNavBar={handleInAuthView} isUserFetched={isUserFetched} />} />
          <Route path="/" element={<Index />} />
          <Route path="/suscripciones" element={<Subscription />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

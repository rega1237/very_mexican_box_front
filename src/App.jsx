import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignIn from './pages/login/SignIn'
import SignUp from './pages/login/SignUp'
import Index from './pages/index/Index'
import NavBar from './components/NavBar/NavBar'
import UserContext from './components/store/userContext';
import Subscription from './pages/subscription/Subscription';

function App() {
  const userCtx = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const id = localStorage.getItem('id')
    const isLogged = localStorage.getItem('isLogged')

    if (isLogged == 'true') {
      userCtx.getUser(id);
    }
  }, [])

  const handleInAuthView = () => {
    setIsAuth(true)
  }

  const handleOutAuthView = () => {
    setIsAuth(false)
  }

  return (
    <>
      <Router>
        {!isAuth && <NavBar removeNavBar={handleInAuthView} addNavBar={handleOutAuthView} />}
        <Routes>
          <Route path="/signin" element={<SignIn addNavBar={handleOutAuthView} />} />
          <Route path="/signup" element={<SignUp addNavBar={handleOutAuthView} />} />
          <Route path="/" element={<Index />} />
          <Route path="/suscripciones" element={<Subscription />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

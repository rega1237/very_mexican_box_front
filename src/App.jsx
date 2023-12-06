import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignIn from './pages/login/SignIn'
import Index from './pages/index/Index'
import NavBar from './components/NavBar'

function App() {
  const [isAuth, setIsAuth] = useState(false)

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

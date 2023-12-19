import { useEffect, useContext, useState } from "react"
import UserContext from "../../components/store/userContext"
import AllUserSubscriptions from "./AllUserSubscriptions";
import { useNavigate } from 'react-router-dom';

const UserAccount = ({removeNavBar, isUserFetched}) => {
  const userCtx = useContext(UserContext)
  const navigate = useNavigate()

  const [isSubsLoaded, setIsSubsLoaded] = useState(false)

  const fetchSubscriptions = async () => {
    const id = localStorage.getItem('id')
    try {
      await userCtx.getUserSubscriptions(id)
    }
    catch(error){
      if(error.message === 401){
        localStorage.clear()
        userCtx.setError(true, "Inicia sesión para continuar", false)
        removeNavBar()
        navigate('/signin')
      } else {
        userCtx.setError(true, "Error al cargar las suscripciones", true)
      }
    }
  }

  useEffect(() => {
    try {
     if(isUserFetched || userCtx.isLogged){
        fetchSubscriptions()
        return
     } else if(!userCtx.isLogged){
        navigate('/')
        return
     }
    }
    catch (error) {
      console.log(error)
    }
  }, [isUserFetched])

  return (
    <div className="bg-pink h-full min-h-screen">
      <h1 className="text-center pt-16 pb-5 font-bold text-lg text-white">
        Bienvenido {userCtx.name}
      </h1>

      {userCtx.subscriptions.length > 0 ? (
        <>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-white text-lg">Tus suscripciones</h2>
        </div>
          <AllUserSubscriptions />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-white text-lg">No tienes suscripciones</h2>
        </div>
      )}
    </div>
  )
}

export default UserAccount
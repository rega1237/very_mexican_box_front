import { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import UserContext from "../../components/store/userContext"
import AllUserSubscriptions from "./AllUserSubscriptions";
import { useNavigate } from 'react-router-dom';

const UserAccount = ({isUserFetched, handleFetching}) => {
  const userCtx = useContext(UserContext)
  const navigate = useNavigate()

  const fetchUserSubs = async (id) => {
    const url = 'http://localhost:3000'

    // Start spinner
    handleFetching()

    try {
      // Fetch user
      const userSubsFetch = await fetch(`${url}/users/${id}/subscriptions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-token": localStorage.getItem("access-token"),
          "client": localStorage.getItem("client"),
          "uid": localStorage.getItem("uid"),   
        }
      })

      // Fetch response Headers
      const userSubsFetchHeaders = userSubsFetch.headers

      // if userFetch is not ok, set error and stop spinner
      if(!userSubsFetch.ok) {
        if(userSubsFetch.status === 401) {
          userCtx.setError(true, "Unauthorized", true)
          handleFetching()
          navigate('/signin')
          return Promise.reject("Unauthorized")
        }
        userCtx.setError(true, "Error to load the user", false)
        handleFetching()
        return Promise.reject("Error to load the user")
      }

      // Set values in localStorage
      if(userSubsFetchHeaders.get("access-token") != "") {
        localStorage.setItem("access-token", userSubsFetchHeaders.get("access-token"));
      }
        
      localStorage.setItem("client", userSubsFetchHeaders.get("client"));
      localStorage.setItem("uid", userSubsFetchHeaders.get("uid"));

      // Parse response
      const response = await userSubsFetch.json()

      // Set user in context
      userCtx.getUserSubscriptions(response)

      // Stop spinner
      handleFetching()
    } catch (error) {
      userCtx.setError(true, "Error to load the user", false)
      handleFetching()
      localStorage.clear()
      navigate('/signin')
      return Promise.reject("Error to load the user")
    }
  }

  useEffect(() => {
    try {
     if(isUserFetched || userCtx.isLogged){
        fetchUserSubs(userCtx.id)
        return
     } else if(!userCtx.isLogged){
        navigate('/')
        return
     }
    }
    catch (error) {
      console.error(error)
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
          <AllUserSubscriptions handleFetching={handleFetching} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-white text-lg">No tienes suscripciones</h2>
        </div>
      )}
    </div>
  )
}

UserAccount.propTypes = {
  isUserFetched: PropTypes.bool.isRequired,
  handleFetching: PropTypes.func.isRequired
}

export default UserAccount
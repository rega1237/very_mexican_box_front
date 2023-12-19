import { useEffect, useContext, useState } from "react"
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
      userCtx.setError(true, "Error al cargar el usuario", false)
      handleFetching()
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
    console.log(response)
    userCtx.getUserSubscriptions(response)

    // Stop spinner
    handleFetching()
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

export default UserAccount
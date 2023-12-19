import { useContext, useState } from 'react';
import UserContext from '../../components/store/userContext';
import logo from '../../assets/images/thumbnail_logo.png'

const UserSubscription = ({id, active, plan, box, name, city, state, zipCode, adressOne, adressTwo, handleFetching }) => {
  const userCtx = useContext(UserContext);

  const [isActive, setIsActive] = useState(active);
  const [isOpen, setIsOpen] = useState(false);

  const handleCancelSubscription = async (id, comment) => {
    const url = 'http://localhost:3000'
    handleFetching()
    const cancelFetch =  await fetch(`${url}/subscriptions/${id}/cancel_stripe_subscription`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),   
      },
      body: JSON.stringify({
        data: {
          active: false,
          comment: comment,
        }
      })
    })
    
    const cancelFetchHeaders = cancelFetch.headers

    if(!cancelFetch.ok) {
      return Promise.reject(new Error('Hubo un problema al cancelar la suscripción'));
    }

    if(cancelFetchHeaders.get("access-token") != "") {
      localStorage.setItem("access-token", cancelFetchHeaders.get("access-token"));
    }

    localStorage.setItem("client", cancelFetchHeaders.get("client"));
    localStorage.setItem("uid", cancelFetchHeaders.get("uid"));

    const response = await cancelFetch.json()
    
    userCtx.cancelSubscription(response)

    setIsActive(false);
    handleFetching()
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="py-2 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="p-4 bg-white w-1/2 rounded flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h4 className="font-medium text-sm text-black">{plan == 1 ? "Suscripción Mensual" : "Suscripción Anual"}</h4>
        </div>

        <div className="flex gap-5 items-center">
          <p className={`${isActive ? "bg-green-500" : "bg-gray-500"} px-5 py-2 font-medium text-white rounded-xl text-sm`}>{isActive ? "Activa" : "Cancelada"}</p>
          <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div className={`${isOpen ? "transition-all ease-in duration-500 opacity-100 h-auto overflow-visible shadow-xl" : "transition-all ease-out duration-500 opacity-0 h-0 overflow-hidden"}  w-1/2 bg-white p-4`}>
        <ul>
          <li>
            <p className="text-sm text-gray-500"><strong>Caja:</strong> {box}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Nombre:</strong> {name}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Ciudad:</strong> {city}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Estado:</strong> {state}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Código postal:</strong> {zipCode}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Dirección 1:</strong> {adressOne}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500"><strong>Dirección 2:</strong> {adressTwo}</p>
          </li>
        </ul>
        <button onClick={() => handleCancelSubscription(id,"no me gustan")} className={`${isActive ? "" : "hidden" } bg-pink p-2 text-sm text-white font-bold rounded mt-4 `}>Cancelar Suscripción</button>
      </div>
    </div>
  )
}

export default UserSubscription;
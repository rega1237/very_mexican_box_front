import tshirts from '../../../assets/images/tshirts_cta.png'
import { NavLink } from 'react-router-dom'

const TshirtsCta = () => {
  return (
    <div className="flex flex-wrap py-4 bg-gradient-to-r from-white from-60% to-[#EDECF2] to-70%">
      <div className='flex items-center lg:w-[40%]'>
        <div className='w-[70%] mx-auto text-center lg:text-left'>
          <h3 className='text-[1.5rem] lg:text-[2rem] font-bold self-center lg:text-left'>AL SUBSCRIBIRTE RECIBIRAS TAMBIEN UNA PLAYERA</h3>
          <NavLink to="/suscripciones" className="inline-block mt-6 rounded-full bg-pink text-white px-6 pb-2 pt-2.5 lg:text-[1.5rem] font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-white hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:text-pink focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:text-white dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            subscribirse
          </NavLink>
        </div>
      </div>
      <div className='flex mt-7 justify-end lg:w-[60%] lg:pr-6'>
        <img src={tshirts} alt="" />
      </div>
    </div>
  )
}

export default TshirtsCta
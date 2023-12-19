import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../store/userContext';

const LoggedComponentMobile = () => {
  const userCtx = useContext(UserContext);

  const logOutUser = () => {
    userCtx.logOut();
  }

  return (
    <div className='flex flex-col w-full lg:hidden'>
      <NavLink to="/" className="block w-full px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-bold bg-pink hover:bg-gray-50 hover:text-pink  rounded-xl" href="#">Mi Cuenta</NavLink>
      <button onClick={logOutUser}>Cerrar Sesión</button>
    </div>
    
  ) 
}

export default LoggedComponentMobile;
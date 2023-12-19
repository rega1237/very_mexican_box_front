import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../store/userContext';

const LoggedComponentDesktop = () => {
  const userCtx = useContext(UserContext);

  const logOutUser = () => {
    userCtx.logOut();
  }

  return (
    <div className='lg:flex gap-3 items-center hidden'>
      <NavLink to="/useraccount" className="lg:block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-bold bg-pink hover:bg-gray-50 hover:text-pink  rounded-xl" href="#">Mi Cuenta</NavLink>
      <button onClick={logOutUser}>Cerrar Sesión</button>
    </div>
  ) 
}

export default LoggedComponentDesktop;
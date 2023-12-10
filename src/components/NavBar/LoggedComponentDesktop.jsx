import { NavLink } from 'react-router-dom';

const LoggedComponentDesktop = () => {
  return (
    <NavLink to="/" className="hidden lg:block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-bold bg-pink hover:bg-gray-50 hover:text-pink  rounded-xl" href="#">Mi Cuenta</NavLink>
  ) 
}

export default LoggedComponentDesktop;
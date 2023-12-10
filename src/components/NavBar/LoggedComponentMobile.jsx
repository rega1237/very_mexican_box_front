import { NavLink } from 'react-router-dom';

const LoggedComponentMobile = () => {
  return (
    <div className='w-full'>
      <NavLink to="/" className="block lg:hidden w-full px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-bold bg-pink hover:bg-gray-50 hover:text-pink  rounded-xl" href="#">Mi Cuenta</NavLink>
    </div>
    
  ) 
}

export default LoggedComponentMobile;
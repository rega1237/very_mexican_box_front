import { NavLink } from 'react-router-dom';

const SignsBtnsDesktop = ({removeNavBar}) => {
  return(
    <>
      <NavLink to="/signin" onClick={removeNavBar} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-pink hover:text-white text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Iniciar Sesión</NavLink>
      <NavLink to="/signup" onClick={removeNavBar} className="hidden lg:inline-block py-2 px-6 bg-pink hover:bg-white hover:text-pink text-sm text-white font-bold rounded-xl transition duration-200" href="#">Registrarme</NavLink>
    </>
  )
}

export default SignsBtnsDesktop;
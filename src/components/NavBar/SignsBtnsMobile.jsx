import { NavLink } from "react-router-dom";

const SignBtnsMobile = ({removeNavBar}) => {
  return (
    <>
      <NavLink to="/signin" onClick={removeNavBar} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none text-pink bg-gray-50 hover:bg-pink hover:text-white rounded-xl" href="#">INICIAR SESIÓN</NavLink>
      <NavLink to="/signup" onClick={removeNavBar} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink hover:bg-gray-50 hover:text-pink  rounded-xl" href="#">REGISTRARME</NavLink>
    </ >
  )
}

export default SignBtnsMobile;
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/thumbnail_logo.png'

const NavBar = ({removeNavBar, addNavBar}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen(!isOpen);
	};

  return (
    <div className="bg-blue-500">
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
		<a className="text-3xl font-bold leading-none" href="#">
      <img className='w-[40%]' src={logo} alt="" />
		</a>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-pink p-3" onClick={handleToggleOpen}>
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><NavLink to="/" onClick={addNavBar} className="text-sm text-gray-400 hover:text-pink" href="#">Inicio</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-pink" href="#">Sobre Nosotros</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-pink" href="#">Subcripciones</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-pink" href="#">Contacto</a></li>
		</ul>
		<NavLink to="/signin" onClick={removeNavBar} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-pink hover:text-white text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Iniciar Sesión</NavLink>
		<a className="hidden lg:inline-block py-2 px-6 bg-pink hover:bg-white hover:text-pink text-sm text-white font-bold rounded-xl transition duration-200" href="#">Registrarme</a>
	</nav>
	<div className={`navbar-menu relative z-50 ${isOpen ? "" : "hidden"}`}>
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={handleToggleOpen}></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
					<img className='w-[40%]' src={logo} alt="" />
				</a>
				<button className="navbar-close" onClick={handleToggleOpen}>
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul id="mobile-links">
					<li className="mb-1">
						<NavLink to="/" onClick={addNavBar} className="active block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">INICIO</NavLink>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">SOBRE NOSOTROS</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">SUBSCRIPCIONES</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">CONTACTO</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<NavLink to="/signin" onClick={removeNavBar} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none text-pink bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">INICIAR SESIÓN</NavLink>
					<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink hover:bg-blue-700  rounded-xl" href="#">REGISTRARME</a>
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2023</span>
				</p>
			</div>
		</nav>
	</div>
</div>
  )
}

export default NavBar
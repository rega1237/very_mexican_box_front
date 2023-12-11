import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/thumbnail_logo.png'
import SignsBtnsDesktop from './SignsBtnsDesktop.jsx';
import SignBtnsMobile from './SignsBtnsMobile.jsx';
import UserContext from '../store/userContext.js'
import LoggedComponentDesktop from './LoggedComponentDesktop.jsx';
import LoggedComponentMobile from './LoggedComponentMobile.jsx';

const NavBar = ({removeNavBar, addNavBar}) => {
	const userCtx = useContext(UserContext);

	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen(!isOpen);
	};

  return (
    <div className="bg-white">
	<nav className="relative px-4 py-4 flex justify-between items-center">
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
			<li><NavLink to="/suscripciones" className="text-sm text-gray-400 hover:text-pink" href="#">Suscripciones</NavLink></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-pink" href="#">Contacto</a></li>
		</ul>
		{userCtx.isLogged ?  <LoggedComponentDesktop /> : <SignsBtnsDesktop removeNavBar={removeNavBar} />}
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
						<NavLink to="/suscripciones" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">SUSCRIPCIONES</NavLink>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-pink hover:text-white rounded" href="#">CONTACTO</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					{userCtx.isLogged ? <LoggedComponentMobile /> : <SignBtnsMobile removeNavBar={removeNavBar} />}
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

NavBar.propTypes = {
	removeNavBar: PropTypes.func.isRequired,
	addNavBar: PropTypes.func.isRequired
}

export default NavBar
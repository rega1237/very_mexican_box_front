import { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import x_icon from '../../assets/images/x_white.png';
import check_mark from '../../assets/images/check_green.png'
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../components/store/userContext.js';

const SignUp = ({addNavBar}) => {
  const [fetching, setFetching] = useState(false);

  let navigateTo = useNavigate();

  const userCtx = useContext(UserContext);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const loginBtn = useRef(null);
  const errorSpan = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('isLogged')) {
      successRegister();
    } else if (userCtx.error) {
      errorRegister(userCtx.errorMessage);
      userCtx.error = false;
    }
  }, [userCtx.error, userCtx.errorMessage, userCtx.isLogged, fetching]);

  const successRegister = () => {
    loginBtn.current.innerHTML = `<img width="30" height="30" src=${check_mark} alt="check-mark-emoji" alt=""/>`;
    
    setTimeout(() => {
      loginBtn.current.innerHTML = `Registrarme`;
    }, 1500);

    setTimeout(() => {
      addNavBar();
      navigateTo('/');
    }, 2000)
  }

  const errorRegister = (error) => {
    errorSpan.current.innerHTML = `<p class="text-red-500 text-center text-sm font-bold">${error}</p>`;
    loginBtn.current.innerHTML = `<img width="30" height="30" src=${x_icon} alt="check-mark-emoji" alt=""/>`;
    setTimeout(() => {
      loginBtn.current.innerHTML = `Registrarme`;
      errorSpan.current.innerHTML = '';
    }, 3000);
  }
  
  const resetForm = () => {
    fullNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    repeatPasswordRef.current.value = '';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginBtn.current.innerHTML = `<svg aria-hidden="true" role="status" class="mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                  </svg>
                                  Loading...`;
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;
    userCtx.signUp(fullName, email, password, repeatPassword)
    setFetching(userCtx.isLogged)
    resetForm();
  }

  return (
    <div className="h-screen md:flex">
      <div className="flex h-screen md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hola bienvenido!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Registro nuevo usuario</p>
          <span id='error' ref={errorSpan}></span>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input ref={fullNameRef} className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nombre Completo" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name=""
              id=""
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Constraseña"
              ref={passwordRef}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Repetir Constraseña"
              ref={repeatPasswordRef}
            />
          </div>
          <button
            id='submit'
            type="submit"
            ref={loginBtn}
            className="block w-full bg-black mt-4 py-2 rounded-2xl text-white font-semibold mb-2 focus:ring-4 focus:outline-none focus:ring-blue-300 flex justify-center items-center"
          >
            Registrarme
          </button>
          <NavLink to="/signin" className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Ya tienes una cuenta?
          </NavLink>
        </form>
      </div>
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-black hidden"
      >
      </div>
    </div>
  );
}

SignUp.propTypes = {
	addNavBar: PropTypes.func.isRequired
}

export default SignUp;
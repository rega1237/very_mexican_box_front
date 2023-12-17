import React, { useContext } from 'react'
import UserContext from '../../../components/store/userContext'

const CompletedMessage = ({ resetStep }) => {
  const userCtx = useContext(UserContext)

  const setErrorToFalse = () => {
    userCtx.setError(false, "");
    resetStep();
  }

  return (
    <>
    {!userCtx.error &&
      <div className='lg:col-span-6 text-center md:text-left'>
        <h1 className="text-2xl font-bold text-gray-800">
          ¡Gracias por tu preferencia!
        </h1>
        <p>En pocos días recibiras un correo con los datos del envio</p>

        <div className="inline-flex items-end gap-4 mt-5">
            <button className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Mi Cuenta
            </button>
          </div>
      </div>
    }

    {userCtx.error &&
      <div className='lg:col-span-6 text-center md:text-left'>
          <h1 className="text-2xl font-bold text-gray-800 ">
            {userCtx.errorMessage}
          </h1>

          <div className="inline-flex items-end gap-4 mt-5">
            <button onClick={setErrorToFalse} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Volver a intentar
            </button>
          </div>
      </div>
    }
    </>
  )
}

export default CompletedMessage
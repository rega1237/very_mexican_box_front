import logo from '../../assets/images/logo.png'

const FetchSpinner = () => {
  return(
    <div className="fixed z-40 w-full">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={logo} alt="logo" className="w-[300px]" />
        <div className="loader"></div>
        <p className='text-white font-bold text-xl mt-5'>Procesando...</p>
      </div>
    </div>
    
  )
}

export default FetchSpinner
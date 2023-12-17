import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import UserContext from '../../../components/store/userContext'
import logo from '../../../assets/images/logo.png'
import green_check from '../../../assets/images/green_check.png'
import red_check from '../../../assets/images/red_check.png'
import shipping from '../../../assets/images/shipping_form.png'
import SelectBoxes from './inputs_form/SelectBoxes'
import ShippingDetails from './inputs_form/ShippingDetails'
import CardForm from './inputs_form/CardForm'
import CompletedMessage from './CompletedMessage'

const stripe = loadStripe('pk_test_v5TS0gK6nOb0mYr4oia4Kcgw00Tu9d2FGN');

const FormModal = ({handleModal, plan}) => {
  const userCtx = useContext(UserContext)

  const [step, setStep] = useState(1)
  const [isCatrina, setCatrina] = useState(false)
  const [isFrida, setFrida] = useState(true)

  const [shippingName, setShippingName] = useState("")
  const [adressLine1, setAdressLine1] = useState("")
  const [adressLine2, setAdressLine2] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")

  const [cardName, setCardName] = useState("")

  const [isFetching, setFetching] = useState(false)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const resetStep = () => {
    setStep(1)
  }

  const handleCatrina = () => {
    setCatrina(!isCatrina)
    setFrida(false)
  }

  const handleFrida = () => {
    setFrida(!isFrida)
    setCatrina(false)
  }

  const handleFetch = () => {
    setFetching(!isFetching)
  }

  return (
    <Elements stripe={stripe}>
      <div className="bg-gray-300 overflow-scroll md:overflow-auto z-40 fixed inset-x-0 mx-auto inset-y-16 w-[85%] h-[85vh] rounded-lg">
        <button className="modal-close absolute top-3 md:top-5 right-6" onClick={handleModal}>
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className={`flex items-center w-full ${step === 3 || step === 4 ? "h-full" : "md:h-full"}`}>
          <div className="max-w-screen-lg mx-auto">
            <div className={`bg-white rounded shadow-lg ${step === 2 ? "mt-5" : "md:mt-0"} p-4 px-4 md:p-5 lg:p-[3rem] mb-4`}>
              <div className={!isFetching ? 'hidden' : 'flex flex-col items-center'}>
                <div>
                  <img className='w-[300px]' src={logo} alt="" />
                </div>
                <div className="loader"></div>
                <p className='text-pink font-bold p-5'>Procesando tu pedido...</p>
              </div>

              <div className={`${isFetching ? 'hidden' : ''} grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3`}>
                <div className="flex flex-col justify-center text-black gap-3 w-full h-full">
                  { step === 1 && <p className="hidden md:block text-lg">Selecciona tu box</p>}
                  { step === 2 && <p className="hidden md:block text-lg">Datos de Envio</p> }
                  { step === 3 && <p className="hidden md:block text-lg">Datos de Pago</p> }
                  { !(step === 4) && <img className='hidden md:block ' src={shipping} alt="shipping" /> }
                  { step === 4 && !userCtx.error && <img src={green_check} alt="green_check" /> }
                  { step === 4 && userCtx.error && <img src={red_check} alt="red_check" /> }
                </div>

                <div className={`lg:col-span-2 ${step != 3 ? "flex items-center justify-center" : ""}`}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                    { step === 1 && <SelectBoxes isCatrina={isCatrina} isFrida={isFrida} handleCatrina={handleCatrina} handleFrida={handleFrida} handleNextStep={handleNextStep} /> }
                    { step === 2 && <ShippingDetails handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} name={shippingName} setName={setShippingName} adressLineOne={adressLine1} setAdressLineOne={setAdressLine1} adressLineTwo={adressLine2} setAdressLineTwo={setAdressLine2} state={state} setState={setState} city={city} setCity={setCity} zipCode={zipCode} setZipCode={setZipCode} /> }
                    { step === 3 && <CardForm handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} isCatrina={isCatrina} cardName={cardName} setCardName={setCardName} name={shippingName} adressLineOne={adressLine1} adressLineTwo={adressLine2} state={state} city={city} zipCode={zipCode} handleFetch={handleFetch} plan={plan} /> }
                    { step === 4 && <CompletedMessage resetStep={resetStep} /> }
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  )
}

FormModal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  plan: PropTypes.number.isRequired
}

export default FormModal
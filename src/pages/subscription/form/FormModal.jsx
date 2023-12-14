import { useState } from 'react'
import shipping from '../../../assets/images/shipping_form.png'
import SelectBoxes from './inputs_form/SelectBoxes'
import ShippingDetails from './inputs_form/ShippingDetails'
import CardForm from './inputs_form/CardForm'

const FormModal = ({handleModal}) => {
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
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpMonth, setCardExpMonth] = useState("")
  const [cardExpYear, setCardExpYear] = useState("")
  const [cardCvc, setCardCvc] = useState("")

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleCatrina = () => {
    setCatrina(!isCatrina)
    setFrida(false)
  }

  const handleFrida = () => {
    setFrida(!isFrida)
    setCatrina(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${isCatrina ? "Catrina" : "Frida"}`)
    console.log(`Shipping Name: ${shippingName}`)
    console.log(`Adress Line 1: ${adressLine1}`)
    console.log(`Adress Line 2: ${adressLine2}`)
    console.log(`State: ${state}`)
    console.log(`City: ${city}`)
    console.log(`Zip Code: ${zipCode}`)
    console.log(`Card Name: ${cardName}`)
    console.log(`Card Number: ${cardNumber}`)
    console.log(`Card Exp Month: ${cardExpMonth}`)
    console.log(`Card Exp Year: ${cardExpYear}`)
    console.log(`Card CVC: ${cardCvc}`)
  }

  return (
    <div className="bg-gray-300 z-40 fixed inset-x-0 mx-auto inset-y-16 w-[85%] h-[85vh] rounded-lg">
      <button className="modal-close absolute top-5 right-6" onClick={handleModal}>
        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div className="flex items-center w-full h-full">
        <div className="max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-5 lg:p-[3rem] mb-4">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="hidden lg:flex lg:flex-col justify-center text-black gap-3 w-full h-full">
                  { step === 1 && <p>Selecciona una caja</p>}
                  { step === 2 && <p>Direccion</p> }
                  <p className="font-bold text-lg">Datos de Envio</p>
                  <img src={shipping} alt="shipping" />
                </div>

                <form className="lg:col-span-2" onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                  { step === 1 && <SelectBoxes isCatrina={isCatrina} isFrida={isFrida} handleCatrina={handleCatrina} handleFrida={handleFrida} handleNextStep={handleNextStep} /> }
                  { step === 2 && <ShippingDetails handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} name={shippingName} setName={setShippingName} adressLineOne={adressLine1} setAdressLineOne={setAdressLine1} adressLineTwo={adressLine2} setAdressLineTwo={setAdressLine2} state={state} setState={setState} city={city} setCity={setCity} zipCode={zipCode} setZipCode={setZipCode} /> }
                  { step === 3 && <CardForm handlePrevStep={handlePrevStep} cardName={cardName} cardNumber={cardNumber} cardExpMonth={cardExpMonth} cardExpYear={cardExpYear} cardCvc={cardCvc} setCardName={setCardName} setCardNumber={setCardNumber} setCardExpMonth={setCardExpMonth} setCardExpYear={setCardExpYear} setCardCvc={setCardCvc} /> }
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModal
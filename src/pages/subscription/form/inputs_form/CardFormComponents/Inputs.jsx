import { useContext } from "react"
import { CardNumberElement, useStripe, useElements, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"
import UserContext from '../../../../../components/store/userContext'

const Inputs = ({ handlePrevStep, handleNextStep, isCatrina, cardName, setCardName, name, adressLineOne, adressLineTwo, state, city, zipCode, handleFetch, plan }) => {
  const userCtx = useContext(UserContext);

  const stripe = useStripe()
  const elements = useElements()

  const cardNumberOptions = {
    placeholder: 'Ingrese el número de tarjeta',
  };

  const cardExpOptions = {
    placeholder: 'MM/AA',
  };

  const cardCvcOptions = {
    placeholder: 'CVC'
  }

  const generateToken = async () => {
    console.log("generando token...")
    if (!stripe || !elements) {
      return Promise.reject(new Error('Stripe.js has not yet loaded'));
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    return stripe.createToken(cardNumberElement, {
      name: cardName
    }).then(({ token }) => token).catch((error) => { console.log(error) });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const tokenPromise = generateToken();
      const token = await tokenPromise;

      const box = isCatrina ? 'Catrina' : 'Frida'
  
      await userCtx.newSubscription(token.id, userCtx.id, plan, box, name, city, adressLineOne, adressLineTwo, zipCode, state, true);
  
      await handleFetch();
      await handleNextStep();
    } catch (error) {
      userCtx.setError(true, "Error al crear la suscripción trata de nuevo");
      handleFetch();
      handleNextStep();
    }

  };

  return (
    <form onSubmit={submit} className="md:col-span-6">
      <div className=" mt-2 md:col-span-6">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Número de tarjeta
        </label>
        <CardNumberElement
          id="cardNumber"
          options={cardNumberOptions}
          className="block w-full mt-3 px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
        />
      </div>

      <div className="mt-2 md:col-span-6">
        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
          Nombre del titular
        </label>
        <input
          type="text"
          name="cardName"
          id="cardName"
          value={cardName}
          onChange={e => setCardName(e.target.value)}
          className="block w-full mt-3 px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Introduce el nombre del titular"
        />
      </div>

      <div className="mt-2 md:col-span-2">
        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">
          Fecha de expiración
        </label>
        <CardExpiryElement
          id="cardExpiry"
          options={cardExpOptions}
          className="block w-full mt-3 px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
        />
      </div>

      <div className="mt-2 md:col-span-2">
        <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700">
          CVC
        </label>
        <CardCvcElement
          id="cardCvc"
          options={cardCvcOptions}
          className="block w-full mt-3 px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
        />
      </div>

      <div className="md:col-span-6 text-right">
          <div className="inline-flex items-end gap-4 mt-5">
            <button onClick={handlePrevStep} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Atras
            </button>
            <button onClick={handleFetch} id='submit' type="submit" className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Realizar Pedido
            </button>
          </div>
      </div>
    </form>
  )
}

export default Inputs
import Header from './CardFormComponents/Header';
import Inputs from './CardFormComponents/Inputs';

const CardForm = ({ handlePrevStep, cardName, cardNumber, cardExpMonth, cardExpYear, cardCvc, setCardName, setCardNumber, setCardExpMonth, setCardExpYear, setCardCvc }) => {
  return (
    <>
      <Header cardName={cardName} cardNumber={cardNumber} cardExpMonth={cardExpMonth} cardExpYear={cardExpYear} cardCvc={cardCvc} />
      <Inputs handlePrevStep={handlePrevStep} cardName={cardName} cardNumber={cardNumber} cardExpMonth={cardExpMonth} cardExpYear={cardExpYear} cardCvc={cardCvc} setCardName={setCardName} setCardNumber={setCardNumber} setCardExpMonth={setCardExpMonth} setCardExpYear={setCardExpYear} setCardCvc={setCardCvc} />
    </>
  )
}

export default CardForm;
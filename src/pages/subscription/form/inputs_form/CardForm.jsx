import Header from './CardFormComponents/Header';
import Inputs from './CardFormComponents/Inputs';

const CardForm = ({ handlePrevStep, handleNextStep, isCatrina, cardName, setCardName, name, adressLineOne, adressLineTwo, state, city, zipCode, handleFetch, plan }) => {
  return (
    <>
      <Header />
      <Inputs handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} isCatrina={isCatrina} cardName={cardName} setCardName={setCardName} name={name} adressLineOne={adressLineOne} adressLineTwo={adressLineTwo} state={state} city={city} zipCode={zipCode} handleFetch={handleFetch} plan={plan} />
    </>
  )
}

export default CardForm;
import PropTypes from 'prop-types';
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

CardForm.propTypes = {
  handlePrevStep: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  isCatrina: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  setCardName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  adressLineOne: PropTypes.string.isRequired,
  adressLineTwo: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  handleFetch: PropTypes.func.isRequired,
  plan: PropTypes.number.isRequired
}

export default CardForm;
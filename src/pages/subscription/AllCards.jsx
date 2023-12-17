import CardSubscription from "./CardSubscription";
import Proptypes from "prop-types";

const AllCards = ({handleModalPlan}) => {
  const cards = [
    {
      title: "Suscripción Mensual",
      price: 25,
    },
    {
      title: "Suscripción Anual",
      price: 250,
    }
  ]

  return(
    <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-5 animate-slide-up">
      {
        cards.map((card, index) => (
          <CardSubscription handleModalPlan={() => handleModalPlan(index + 1)} title={card.title} price={card.price} id={index} key={index} />
        ))
      }
    </ div>
  )
}

AllCards.propTypes = {
  handleModalPlan: Proptypes.func.isRequired
}

export default AllCards;
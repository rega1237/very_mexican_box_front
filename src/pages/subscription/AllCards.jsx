import CardSubscription from "./CardSubscription";

const AllCards = ({handleModal}) => {
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
          <CardSubscription handleModal={handleModal} title={card.title} price={card.price} key={index} />
        ))
      }
    </ div>
  )
}

export default AllCards;
import { useState, useContext } from "react";
import UserContext from "../../components/store/userContext";
import TitleSub from "./TittleSub";
import AllCards from "./AllCards";
import Form from "./form/CompleteFormModal"

const Subscription = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [plan, setPlan] = useState(1)

  const userCtx = useContext(UserContext);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
    userCtx.setError(false, "", true);
  }

  const handleModalPlan = (id) => {
    setPlan(id)
    handleModal()
  }
  
  return (
    <section className="bg-subscription_bg bg-contain text-white pb-9">
      <Form modalIsOpen={modalIsOpen} handleModal={handleModal} plan={plan} />
      <TitleSub />
      <div>
        <AllCards handleModalPlan={handleModalPlan}  />
      </div>
    </section>
  )
}

export default Subscription;
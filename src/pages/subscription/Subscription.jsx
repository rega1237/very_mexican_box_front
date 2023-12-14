import { useState } from "react";
import TitleSub from "./TittleSub";
import AllCards from "./AllCards";
import Form from "./form/CompleteFormModal"

const Subscription = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  
  return (
    <section className="bg-black text-white pb-9">
      <Form modalIsOpen={modalIsOpen} handleModal={handleModal} />
      <TitleSub />
      <div>
        <AllCards handleModal={handleModal} />
      </div>
    </section>
  )
}

export default Subscription;
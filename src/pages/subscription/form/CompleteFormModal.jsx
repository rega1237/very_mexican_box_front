import {createPortal} from 'react-dom';
import BackDrop from './BackDrop';
import FormModal from './FormModal';

const CompleteFormModal = ({modalIsOpen, handleModal, plan}) => {
  return (
    <>
      {modalIsOpen && createPortal(<BackDrop handleModal={handleModal} />, document.getElementById('backdrop-root'))}
      {modalIsOpen && createPortal(<FormModal plan={plan} handleModal={handleModal} />, document.getElementById('subscription-root'))}
    </>
  )
}

export default CompleteFormModal
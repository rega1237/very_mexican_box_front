import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
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

CompleteFormModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  plan: PropTypes.number.isRequired
}

export default CompleteFormModal
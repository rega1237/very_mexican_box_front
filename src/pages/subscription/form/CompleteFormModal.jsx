import {useState} from 'react';
import {createPortal} from 'react-dom';
import BackDrop from './BackDrop';
import FormModal from './FormModal';

const CompleteFormModal = ({modalIsOpen, handleModal}) => {
  return (
    <>
      {modalIsOpen && createPortal(<BackDrop handleModal={handleModal} />, document.getElementById('backdrop-root'))}
      {modalIsOpen && createPortal(<FormModal handleModal={handleModal} />, document.getElementById('subscription-root'))}
    </>
  )
}

export default CompleteFormModal
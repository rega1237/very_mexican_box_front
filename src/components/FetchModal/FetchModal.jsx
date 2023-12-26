import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import FetchBack from './FetchBack';
import FetchSpinner from './FetchSpinner'

const FetchModal = ({isFetching}) => {
  return(
    <>
      {isFetching && createPortal(<FetchBack />, document.getElementById('backdrop-fecth'))}
      {isFetching && createPortal(<FetchSpinner />, document.getElementById('fetch-spinner'))}
    </>
  )
}

FetchModal.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default FetchModal
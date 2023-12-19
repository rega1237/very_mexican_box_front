import {createPortal} from 'react-dom';
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

export default FetchModal
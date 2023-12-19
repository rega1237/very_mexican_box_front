import {useContext} from 'react'
import UserContext from '../../components/store/userContext'
import UserSubscription from './UserSubscription'

const AllUserSubscriptions = ({handleFetching}) => {
  const userCtx = useContext(UserContext)

  return(
    <ul>
    { 
     userCtx.subscriptions.map((subscription) => (
       <li key={subscription.id}>
         <UserSubscription handleFetching={handleFetching} id={subscription.id} stripeID={subscription.stripe_id} active={subscription.active} box={subscription.box} plan={subscription.plan_id} name={subscription.shipping_name} city={subscription.shipping_city} state={subscription.shipping_state} adressOne={subscription.shipping_line1} adressTwo={subscription.shipping_line2} zipCode={subscription.shipping_postal_code} />
       </li>
     ))
     }
   </ul>
  )
}

export default AllUserSubscriptions
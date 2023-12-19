import { createContext } from "react";

/* eslint  no-unused-vars: 0 */

const UserContext = createContext({
  id: '',
  name: '',
  email: '',
  subscriptions: [],
  cards: [],
  isLogged: false,
  error: false,
  errorMessage: '',
  getUser: (id) => {},
  signIn: (email, password) => {},
  signUp: (name, email, password, confirm_password) => {},
  signOut: () => {},
  newSubscription: (card_token, user_id, plan_id, shipping_name, shipping_city, shipping_line1, shipping_line2, shipping_postal_code, shipping_state, change_default) => {},
  cancelSubscription: (subscription_id) => {},
  getUserSubscriptions: (user_id) => {},
  setError: (error, errorMessage) => {},
});

export default UserContext;
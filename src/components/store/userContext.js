import { createContext } from "react";

/* eslint  no-unused-vars: 0 */

const UserContext = createContext({
  id: '',
  name: '',
  email: '',
  subcriptions: [],
  cards: [],
  isLogged: false,
  getUser: (id) => {},
  signIn: (email, password) => {},
  signUp: (name, email, password, confirm_password) => {},
  signOut: () => {},
});

export default UserContext;
import { createContext } from "react";

const UserContext = createContext({
  id: '',
  name: '',
  email: '',
  subcriptions: [],
  cards: [],
  isLogged: false,
  signIn: (email, password) => {},
  signUp: (name, email, password, confirm_password) => {},
  signOut: () => {},
});

export default UserContext;
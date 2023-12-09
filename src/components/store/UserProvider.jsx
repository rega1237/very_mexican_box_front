import UserContext from "./userContext.js";
import { useReducer } from "react";

const url = "http://localhost:3000/auth";

const defaultUserState = {
  id: '',
  name: '',
  email: '',
  subscriptions: [],
  cards: [],
  isLogged: false,
  error: false,
  errorMessage: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        id: action.id,
        name: action.name,
        email: action.email,
        stripe_id: action.stripe_id,
        isLogged: action.isLogged,
        error: action.error,
      };
    case "SIGN_UP":
      return {
        ...state,
        id: action.id,
        name: action.name,
        email: action.email,
        stripe_id: action.stripe_id,
        isLogged: action.isLogged,
        error: action.error,
        errorMessage: action.errorMessage,
      };
    case "LOG_OUT":
      return {
        ...state,
        access_token: "",
        client: "",
        uid: "",
        isLogged: false,
      };
    case "ERROR":
      return {
        ...state,
        isLogged: action.isLogged,
        error: action.error,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const signInHandler = async (email, password) => {
    fetch(`${url}/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        const accessToken = response.headers.get("access-token");
        const client = response.headers.get("client");
        const uid = response.headers.get("uid");

        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("client", client);
        localStorage.setItem("uid", uid);


        return response.json();
      })
      .then((data) => {
        if(data.success === false) {
          console.log(data.errors[0])
          return Promise.reject(new Error(data.errors[0]));
        }

        return data
      })
      .then((data) => {
        localStorage.setItem("id", data.data.id);
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("stripe_id", data.data.stripe_id);
        localStorage.setItem("isLogged", true);

        dispatchUserAction({
          type: "SIGN_IN",
          id: data.data.id,
          name: data.data.name,
          email: data.data.email,
          stripe_id: data.data.stripe_id,
          isLogged: true,
          error: false,
          errorMessage: "",
        });
      })
      .catch((error) => {
        dispatchUserAction({
          type: "ERROR",
          isLogged: false,
          error: true,
          errorMessage: error.message,
        });
        console.error("Error:", error);
      });
  };

  const signUpHandler = (name, email, password, confirm_password) => {
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirm_password,
      }),
    })
      .then((response) => {
        const accessToken = response.headers.get("access-token");
        const client = response.headers.get("client");
        const uid = response.headers.get("uid");

        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("client", client);
        localStorage.setItem("uid", uid);

        return response.json()
      })
      .then((data) => {
        if(data.status === 'error') {
          console.log(data.errors.full_messages[0])
          return Promise.reject(new Error(data.errors.full_messages[0]));
        }

        return data
      })
      .then((data) => {
        localStorage.setItem("id", data.data.id);
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("stripe_id", data.data.stripe_id);
        localStorage.setItem("isLogged", true);

        dispatchUserAction({
          type: "SIGN_UP",
          id: data.data.id,
          name: data.data.name,
          email: data.data.email,
          stripe_id: data.data.stripe_id,
          isLogged: true,
          error: false,
          errorMessage: "",
        });
      })
      .catch((error) => {
        dispatchUserAction({
          type: "ERROR",
          error: true,
          errorMessage: error.message,
        });
        console.error("Error:", error);
      });
  };

  const logOutHandler = () => {
    fetch(`${url}/sign_out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        client: localStorage.getItem("client"),
        uid: localStorage.getItem("uid"),
      },
    })
      .then((response) => {
        localStorage.clear();

        dispatchUserAction({
          type: "LOG_OUT",
          accessToken: '',
          client: '',
          uid: '',
          isLogged: false,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const userContext = {
    id: userState.id,
    stripe_id: userState.stripe_id,
    name: userState.name,
    email: userState.email,
    subscriptions: userState.subscriptions,
    cards: userState.cards,
    isLogged: userState.isLogged,
    error: userState.error,
    errorMessage: userState.errorMessage,
    signIn: signInHandler,
    signUp: signUpHandler,
    logOut: logOutHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
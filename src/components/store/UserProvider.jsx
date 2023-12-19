import UserContext from "./userContext.js";
import { useReducer } from "react";
import PropTypes from 'prop-types';

const url = "http://localhost:3000";

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
    case "GET_USER":
      return {
        ...state,
        id: action.id,
        name: action.name,
        email: action.email,
        stripe_id: action.stripe_id,
        isLogged: action.isLogged,
        error: action.error,
      }
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
    case "NEW SUBSCRIPTION":
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.subscription],
      };
    case "GET SUBSCRIPTIONS":
      return {
        ...state,
        subscriptions: action.subscriptions,
      };
    case "CANCEL SUBSCRIPTION":
      return {
        ...state,
        subscriptions: state.subscriptions.map((subscription) => {
          if(subscription.id === action.subscription.id) {
            subscription.active = false
            return subscription
          } else {
            return subscription
          }
        })
      }
    default:
      return state;
  }
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const getUserHandler = (id) => {
    fetch(`${url}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),
      },
    })
      .then((response) => {
        if(response.headers.get("access-token") != "") {
          localStorage.setItem("access-token", response.headers.get("access-token"));
        }
        localStorage.setItem("client", response.headers.get("client"));
        localStorage.setItem("uid", response.headers.get("uid"));
        return response.json();
      }). then((data) => {
        if(data.errors) {
          return Promise.reject(new Error(data.errors[0]));
        }

        return data
      })
      .then((data) => {
        dispatchUserAction({
          type: "GET_USER",
          id: data.id,
          name: data.name,
          email: data.email,
          stripe_id: data.stripe_id,
          isLogged: true,
          error: false,
          errorMessage: "",
        });
      })
      .catch((error) => {
        localStorage.clear();
        localStorage.setItem("isLogged", false);
        dispatchUserAction({
          type: "ERROR",
          isLogged: false,
          error: true,
          errorMessage: error.message,
        });
        console.error("Error:", error);
      });
  }

  const getUserSubscriptions = async (user_id) => {
    const subFetch = await fetch(`${url}/users/${user_id}/subscriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),   
      }
      })
    
    const subFetchHeaders = subFetch.headers
    
    if(!subFetch.ok) {
      if(subFetch.status === 401) {
        dispatchUserAction({
          type: "ERROR",
          isLogged: false,
          error: true,
          errorMessage: "Hubo un problema por favor vuelve a iniciar sesión",
        });
        return Promise.reject(new Error('401'));
      }
      return Promise.reject(new Error('Hubo un problema al cargar las suscripcines'));
    }

    if(subFetchHeaders.get("access-token") != "") {
      localStorage.setItem("access-token", subFetchHeaders.get("access-token"));
    }
    
    localStorage.setItem("client", subFetchHeaders.get("client"));
    localStorage.setItem("uid", subFetchHeaders.get("uid"));


    const response = await subFetch.json()

    dispatchUserAction({
      type: "GET SUBSCRIPTIONS",
      subscriptions: response,
    });
  }

  const signInHandler = async (email, password) => {
    fetch(`${url}/auth/sign_in`, {
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

        if(accessToken != "") {
          localStorage.setItem("access-token", response.headers.get("access-token"));
        }

        localStorage.setItem("client", client);
        localStorage.setItem("uid", uid);


        return response.json();
      })
      .then((data) => {
        if(data.success === false) {
          return Promise.reject(new Error(data.errors[0]));
        }

        return data
      })
      .then((data) => {
        localStorage.setItem("isLogged", true);
        localStorage.setItem("id", data.data.id);
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
    fetch(`${url}/auth`, {
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
        const access_token = response.headers.get("access-token");
        const client = response.headers.get("client");
        const uid = response.headers.get("uid");

        if(access_token != "") {
          localStorage.setItem("access-token", response.headers.get("access-token"));
        }

        localStorage.setItem("client", client);
        localStorage.setItem("uid", uid);

        return response.json()
      })
      .then((data) => {
        if(data.status === 'error') {
          return Promise.reject(new Error(data.errors.full_messages[0]));
        }

        return data
      })
      .then((data) => {
        localStorage.setItem("isLogged", true);
        localStorage.setItem("id", data.data.id);
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
    fetch(`${url}/auth/sign_out`, {
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

        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const newSubscription = async (card_token, user_id, plan_id, box, shipping_name, shipping_city, shipping_line1, shipping_line2, shipping_postal_code, shipping_state, change_default) => {
    const subFetch = await fetch(`${url}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),   
      },
      body: JSON.stringify({
        data: {
              card_token: card_token,
              user_id: user_id,
              plan_id: plan_id,
              box: box,
              shipping_city: shipping_city,
              shipping_line1: shipping_line1,
              shipping_line2: shipping_line2,
              shipping_postal_code: shipping_postal_code,
              shipping_state: shipping_state,
              shipping_name: shipping_name,
              change_default: change_default
        }
      })
    })

    const subFetchHeaders = subFetch.headers

    if(!subFetch.ok) {
      return Promise.reject(new Error('Hubo un problema al crear la suscripción'));
    }

    if(subFetchHeaders.get("access-token") != "") {
      localStorage.setItem("access-token", subFetchHeaders.get("access-token"));
    }

    localStorage.setItem("client", subFetchHeaders.get("client"));
    localStorage.setItem("uid", subFetchHeaders.get("uid"));

    const response = await subFetch.json()

    dispatchUserAction({
      type: "NEW SUBSCRIPTION",
      subscription: response,
    });

    return response
  }

  const cancelSubscription = async (subscription_id, comment) => {
    const subFetch = await fetch(`${url}/subscriptions/${subscription_id}/cancel_stripe_subscription`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),   
      },
      body: JSON.stringify({
        data: {
          active: false,
          comment: comment,
        }
      })
    })

    const subFetchHeaders = subFetch.headers

    if(!subFetch.ok) {
      return Promise.reject(new Error('Hubo un problema al cancelar la suscripción'));
    }

    if(subFetchHeaders.get("access-token") != "") {
      localStorage.setItem("access-token", subFetchHeaders.get("access-token"));
    }

    localStorage.setItem("client", subFetchHeaders.get("client"));
    localStorage.setItem("uid", subFetchHeaders.get("uid"));

    const response = await subFetch.json()

    dispatchUserAction({
      type: "CANCEL SUBSCRIPTION",
      subscription: response,
    });
  }

  const setError = (error, errorMessage, isLogged) => {
    dispatchUserAction({
      type: "ERROR",
      error: error,
      errorMessage: errorMessage,
      isLogged: isLogged,
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
    getUser: getUserHandler,
    newSubscription: newSubscription,
    cancelSubscription: cancelSubscription,
    getUserSubscriptions: getUserSubscriptions,
    setError: setError,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserProvider;
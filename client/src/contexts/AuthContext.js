import React, { createContext, useReducer, useContext } from "react";
import reducer, { LOGIN, LOGOUT } from "../reducers/authReducer";

const AuthContext = createContext();
const { Provider } = AuthContext;

const initialState = {
  user: null
};

function AuthProvider( { value = initialState, ...props } ) {
  const [ state, dispatch ] = useReducer( reducer, value );

  // these are the functions that child components can use
  // these functions all call dispatch
  const login = user => {
    dispatch({
      type: LOGIN,
      payload: user
    });
  }

  const logout = () => {
    dispatch( { type: LOGOUT } );
  }

  // always ...state + all functions
  const providerValue = {
    ...state,
    login,
    logout
  }

  return <Provider value={ providerValue } { ...props } />;
}

function useAuthContext() {
  return useContext( AuthContext );
}

export { AuthProvider, useAuthContext };

import React, { createContext, useReducer, useContext } from "react";
import reducer, { LOGIN, LOGOUT } from "../reducers/authReducer";
import api from "../utils/API";

const AuthContext = createContext();
const { Provider } = AuthContext;

const initialState = {
  user: null
};

function AuthProvider( { value = initialState, ...props } ) {
  const [ state, dispatch ] = useReducer( reducer, value );

  // these are the functions that child components can use
  // these functions all call dispatch
  const login = async(user) => {
      try {
        const {data} = await api.loginUser(user)
        dispatch({
          type: LOGIN,
          payload: data
      });
      }catch(err){
          console.log("Error with create login request to API!", err);
      }
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

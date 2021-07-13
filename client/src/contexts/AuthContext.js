import React, { createContext, useReducer, useContext, useEffect } from "react";
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
    dispatch({
      type: LOGIN,
      payload: user
    });
  }

  const setFavoriteKitties = async(favoriteKitties) => {
    dispatch({
      type: 'SET_FAVORITE_KITTIES',
      payload: favoriteKitties
    });
  }

  const logout = () => {
    dispatch( { type: LOGOUT } );
  }

  useEffect( () => {
    ( async() => {
      const response = await api.checkAuth();
      if (response.status === 200) {
        login(response.data);
      }
    } )();
  }, [] );

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

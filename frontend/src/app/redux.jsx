import React, { createContext, useReducer, useContext } from 'react';

export const Actions = {
  SET_USER: 'set-user',
  SET_TOKEN: 'set-token',
};
// initial state

const initialState = {
  user: null,
  token: null,
};

// create context
const Context = createContext();

// root reducer
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_USER:
      return { ...state, user: action.payload.user };
    case Actions.SET_TOKEN:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

// context provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// useContext

export const useRedux = () => useContext(Context);

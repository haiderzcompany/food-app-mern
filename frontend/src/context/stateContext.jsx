import React, { createContext, useContext, useReducer } from 'react';
export const Action = {
  SET_USER: 'set_user',
};
export const stateReducer = (state, action) => {
    switch (action.type) {
        case Action.SET_USER:
            return 
  }
};

// create context

const StateContext = createContext();

// create provider

const StateProvider = ({ children }) => {
  const [state, dipatchState] = useReducer(stateReducer, appState);
  return <StateContext.Provider>{children}</StateContext.Provider>;
};

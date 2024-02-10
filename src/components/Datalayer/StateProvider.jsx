import { createContext, useContext, useReducer } from "react";

//Prepares data layer
export const StateContext = createContext();

//Wrap our app and provide data layer
// eslint-disable-next-line react/prop-types
export const StateProvider = ({ reducer, initialState, children }) => (
  // The value prop of the provider is set to the result of calling the useReducer hook with the provided reducer and initialState. This hook returns the current state and a dispatch function.
  // This means that the state and dispatch functions will be available to all the components wrapped within this provider.
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components

//Pull information from the data layer

// This is a custom hook named useStateValue that doesn't take any arguments.
// Inside the hook, the useContext function is used to access the value of the StateContext, which holds the state and dispatch functions.
// This hook allows components to easily access the global state and dispatch actions to modify the state.
export const useStateValue = () => useContext(StateContext);

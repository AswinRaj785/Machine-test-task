import React, { createContext, useContext, useReducer } from 'react'

export const context = createContext()

export const Provider = ({ reducer, initialState, children }) => (
    <context.Provider value={useReducer(reducer, initialState)}>
        {children}
    </context.Provider>

)

export const useGlobalValue = () => useContext(context);

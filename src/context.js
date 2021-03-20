import React, { createContext, useState } from 'react'
 
export const DevilContext = createContext() // izvoz za komponente
 
const DevilProvider = ({children}) => {
  
  
  return (
    <DevilContext.Provider
      value={'hello'}
    >
      {children}
    </DevilContext.Provider>
  )
}
 
export {DevilProvider} // izvoz za index.js
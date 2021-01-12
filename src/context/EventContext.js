import React, {useState, createContext, useContext } from 'react'

const eventContext = createContext()

export const EventContextProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <eventContext.Provider value={{
            isFormOpen,
            setIsFormOpen 
        }}>
            {children}
        </eventContext.Provider>
    )

}

export const useContextValue = () => {
    return useContext(eventContext)
}
import React, {useState, createContext, useContext } from 'react'
import { sampleData } from '../assets/SampleData'

const eventContext = createContext()

export const EventContextProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [samplData, setSampleData] = useState(sampleData)
    return (
        <eventContext.Provider value={{
            isFormOpen,
            setIsFormOpen,
            samplData,
            setSampleData
        }}>
            {children}
        </eventContext.Provider>
    )

}

export const useContextValue = () => {
    return useContext(eventContext)
}
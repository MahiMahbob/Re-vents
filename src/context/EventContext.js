import React, {useState, createContext, useContext } from 'react'
import { sampleData } from '../assets/SampleData'

const eventContext = createContext()

export const EventContextProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [samplData, setSampleData] = useState(sampleData)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const controlSelectedEvent = event => {
        setSelectedEvent(event)
        setIsFormOpen(true)
    }
    const controlFormOpen = () => {
        setSelectedEvent(null)
        setIsFormOpen(true)
    }
    const formValueUpdate = (item) => {
        const val = samplData.map(evt => evt.id === item.id ? item : evt)
        setSampleData(val) 
        setSelectedEvent(null)
    }

    const deleteEvent = (id) => {
        setSampleData(samplData.filter(evt => evt.id !== id)) 
    }

    return (
        <eventContext.Provider value={{
            isFormOpen,
            setIsFormOpen,
            samplData,
            setSampleData,
            selectedEvent,
            setSelectedEvent,
            controlSelectedEvent,
            controlFormOpen,
            formValueUpdate,
            deleteEvent
        }}>
            {children}
        </eventContext.Provider>
    )

}

export const useContextValue = () => {
    return useContext(eventContext)
}
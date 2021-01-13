import React from 'react'
import { useContextValue } from '../../context/EventContext'
import EventListItem from './EventListItem'

export default function EventList() {
    const {samplData} = useContextValue()
    return (
        <>
            {
                samplData.map(event => <EventListItem events={event} key={event.id} />)
            }
        </>
    )
}

import React, { useState } from 'react'
import { sampleData } from '../../assets/SampleData'
import EventListItem from './EventListItem'

export default function EventList() {
    const [samplData] = useState(sampleData)
    return (
        <>
            {
                samplData.map(event => <EventListItem events={event} key={event.id} />)
            }
        </>
    )
}

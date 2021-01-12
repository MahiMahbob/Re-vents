import React from 'react'
import { useContextValue } from '../../context/EventContext'
import EventForm from '../event-form/EventForm'
import EventList from '../eventlist/EventList'
import { DashboardContainer,EventRightColumn,EventLeftColumn } from './EventDashStyle'

export default function EventDashboard() {
    const {isFormOpen} = useContextValue()
    return (
        <DashboardContainer>
            <EventRightColumn>
                <EventList />
            </EventRightColumn>
            <EventLeftColumn>
                {isFormOpen && <EventForm />}
            </EventLeftColumn>
        </DashboardContainer>
    )
}

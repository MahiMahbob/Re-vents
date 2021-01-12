import React from 'react'
import EventForm from '../event-form/EventForm'
import EventList from '../eventlist/EventList'
import { DashboardContainer,EventRightColumn,EventLeftColumn } from './EventDashStyle'

export default function EventDashboard() {
    return (
        <DashboardContainer>
            <EventRightColumn>
                <EventList />
            </EventRightColumn>
            <EventLeftColumn>
                <EventForm />
            </EventLeftColumn>
        </DashboardContainer>
    )
}

import React from 'react'
import EventList from '../eventlist/EventList'
import { DashboardContainer,EventRightColumn,EventLeftColumn } from './EventDashStyle'

export default function EventDashboard() {
    return (
        <DashboardContainer>
            <EventRightColumn>
                <EventList />
            </EventRightColumn>
            <EventLeftColumn>
                ffff
            </EventLeftColumn>
        </DashboardContainer>
    )
}

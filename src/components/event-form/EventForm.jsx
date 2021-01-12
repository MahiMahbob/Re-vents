import React from 'react'
import { useContextValue } from '../../context/EventContext'
import { FormContainer,Form,Input, Button,ButtonGroup} from './FormStyle'

export default function EventForm() {
    const {setIsFormOpen} = useContextValue()
    return (
        <FormContainer>
            <p>Create New Event</p>
            <Form>
                <Input type='text' placeholder='Event Title' />
                <Input type='text' placeholder='Category' />
                <Input type='text' placeholder='Description' />
                <Input type='text' placeholder='City' />
                <Input type='text' placeholder='Venue' />
                <Input type='Date' placeholder='Date' />
                <ButtonGroup>
                     <Button cancel onClick={() => setIsFormOpen(false)}>Cancel</Button>
                     <Button>Create Event</Button>
                </ButtonGroup>
            </Form>
        </FormContainer>
    )
}


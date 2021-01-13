import cuid from 'cuid'
import React, { useState } from 'react'
import { useContextValue } from '../../context/EventContext'
import { FormContainer,Form,Input, Button,ButtonGroup} from './FormStyle'

export default function EventForm() {
    const {setIsFormOpen,samplData,setSampleData, selectedEvent,formValueUpdate} = useContextValue()

    const initialValue = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [formVal, setFormVal] = useState(initialValue)

    function handleSubmit(e){
        e.preventDefault()
        selectedEvent ? formValueUpdate({...selectedEvent, ...formVal}) :
        setSampleData([...samplData, {...formVal, id: cuid(), hostedBy: 'Nora', hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg', attendees: []}])
        setIsFormOpen(false)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormVal({...formVal, [name]: value})
        
    }
    
    return (
        <FormContainer onSubmit={handleSubmit}>
            {selectedEvent ? 'Edit Event' : <p>Create New Event</p>}
            <Form>
                <Input type='text' name='title' value={formVal.title} onChange={handleChange} placeholder='Event Title' required />
                <Input type='text' name='category' value={formVal.category} onChange={handleChange} placeholder='Category' />
                <Input type='text' name='description' value={formVal.description} onChange={handleChange} placeholder='Description' />
                <Input type='text' name='city' value={formVal.city} onChange={handleChange} placeholder='City' />
                <Input type='text' name='venue' value={formVal.venue} onChange={handleChange} placeholder='Venue' />
                <Input type='Date' name='date' value={formVal.date} onChange={handleChange} placeholder='Date' />
                <ButtonGroup>
                     <Button cancel onClick={() => setIsFormOpen(false)}>Cancel</Button>
                     <Button>Create Event</Button>
                </ButtonGroup>
            </Form>
        </FormContainer>
    )
}


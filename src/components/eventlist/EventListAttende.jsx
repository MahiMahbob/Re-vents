import React from 'react'
import { Item } from './EventListStyle'

export default function EventListAttende({attende}) {
    return (
        <Item>
            <img src={attende.photoURL} alt='item' />
        </Item>
    )
}

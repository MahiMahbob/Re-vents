import React from "react";
import {
  Segment,
  ItemImage,
  ItemGroup,
  ItemContent,
  DateItem,
  ItemSegment,
} from "./EventListStyle";
import { MdAlarm, MdPlace } from "react-icons/md";
import EventListAttende from "./EventListAttende";
import { useContextValue } from "../../context/EventContext";

export default function EventListItem({ event }) {
  const {controlSelectedEvent,deleteEvent} = useContextValue()

  const {
    title,
    date,
    description,
    hostPhotoURL,
    venue,
    attendees,
    hostedBy,
  } = event;

  return (
    <ItemSegment>
      <ItemGroup>
        <ItemImage>
          <img src={hostPhotoURL} alt="item" />
        </ItemImage>
        <ItemContent>
          <h1>{title}</h1>
          <p>Hosted By {hostedBy}</p>
        </ItemContent>
      </ItemGroup>
      <DateItem>
        <span>
          <MdAlarm /> {date}
          <MdPlace /> {venue}
        </span>
      </DateItem>
      <Segment>
          {
           attendees.map(attende => <EventListAttende key={attende.id} attende={attende}/>)   
          }
      </Segment>
      <Segment>
        <div>{description}</div>
        <button onClick={() => controlSelectedEvent(event)}>View</button>
        <button style={{backgroundColor: 'red'}} onClick={() => deleteEvent(event.id)}>Delete</button>
      </Segment>
    </ItemSegment>
  );
}

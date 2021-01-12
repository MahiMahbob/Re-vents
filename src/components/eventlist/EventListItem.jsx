import React from "react";
import { Segment,ItemImage,ItemGroup, ItemContent,DateItem, ItemSegment } from "./EventListStyle";
import User from '../../assets/user.jpg'
import { MdAlarm, MdPlace } from "react-icons/md";
import EventListAttende from "./EventListAttende";

export default function EventListItem() {
  return (
    <ItemSegment>
        <ItemGroup>
            <ItemImage>
                <img src={User} alt="item" />
            </ItemImage>
            <ItemContent>
                <h1>Event Title</h1>
                <p>Hosted By Nora</p>
            </ItemContent>
        </ItemGroup>
        <DateItem>
            <span>
                <MdAlarm /> Date
                <MdPlace /> Place
            </span>
        </DateItem>
        <Segment>
            <EventListAttende />
            <EventListAttende />
            <EventListAttende />
        </Segment>
        <Segment>
            <div>Description</div>
            <button>View</button>
        </Segment>
    </ItemSegment >
  );
}

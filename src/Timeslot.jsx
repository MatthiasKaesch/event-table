import React from 'react'
import './Timeslot.scss'

const Timeslot = ({ id, time, events, rooms, isGlobal }) => {
  return (
    <div className="panels_maingrid">
      <h2 className="timeslot">{time}</h2>
      <div className="panels_wrapper">
        {events.map((event) => {
          return (
            <section
              className={`panel_container ${event.title ? '' : 'empty'}  ${
                isGlobal ? 'global' : ''
              }`}
            >
              {event.tag && (
                <p
                  className="panel_tag"
                  aria-label="Event type: {{event.type}}"
                >
                  {event.tag}
                </p>
              )}

              <h3 className="panel_title">{event.title}</h3>

              {event.description && (
                <p className="panel_description">{event.description}</p>
              )}

              {event.speakers?.filter((speaker) => speaker.trim() !== '')
                .length > 0 && (
                <p className="panel_speakers">{event.speakers.join(', ')}</p>
              )}

              {!isGlobal && (
                <p className="panel_roomInfo">
                  Room: {rooms[event.roomNumber].name}
                </p>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Timeslot

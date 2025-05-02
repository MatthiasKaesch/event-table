import React from 'react'
import './Timeslot.scss'
import DoorIcon from '../../assets/icons/door.svg?react'
import IconHandler from './IconHandler'

const Timeslot = ({ time, events, rooms, isGlobal }) => {
  return (
    <div className="panels_maingrid">
      <h2 className="timeslot">{time}</h2>
      <div className="panels_wrapper">
        {events.map((event) => {
          return (
            <section
              tabIndex={`${event.title ? 1 : -1}`}
              key={event.id}
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

              {isGlobal && <IconHandler identifier={event.tag} />}

              <h3 className="panel_title">{event.title}</h3>

              {event.description && (
                <p className="panel_description">{event.description}</p>
              )}

              {event.speakers?.filter((speaker) => speaker.trim() !== '')
                .length > 0 && (
                <div className="panel_speakers">
                  <p className="panel_speakers__text title">Speakers:</p>
                  <p className="panel_speakers__text">
                    {event.speakers.join(', ')}
                  </p>
                </div>
              )}

              {!isGlobal && (
                <div className="panel_roomInfo">
                  <DoorIcon />
                  <p className="panel_roomInfo__name">
                    {rooms[event.roomNumber].name}
                  </p>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Timeslot

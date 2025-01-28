import React from 'react'

const Timeslot = ({ id, time, events, rooms }) => {
  return (
    <div className="maingrid">
      <h2 className="griditem timeslot">{time}</h2>

      {events.map((event) => {
        return (
          <div className="panel_wrapper">
            <section
              className={`panel_container${event.title ? '' : '__empty'}`}
            >
              <div className="panel_grid">
                {event.tag && (
                  <p
                    className="panel_tag"
                    aria-label="Event type: {{event.type}}"
                  >
                    {event.tag}
                  </p>
                )}
              </div>

              <h3 className="panel_title">{event.title}</h3>

              <p>{event.description}</p>

              {event.speakers &&
                event.speakers.map((speaker) => (
                  <p className="panel_speakers">{speaker}</p>
                ))}
              <p className="panel_roomInfo">
                Room: {rooms[event.roomNumber].name}
              </p>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Timeslot

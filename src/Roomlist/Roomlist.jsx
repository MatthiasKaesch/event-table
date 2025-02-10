import React from 'react'
import './Roomlist.scss'

const Roomlist = ({ rooms }) => {
  return (
    <ul role="list" className="list maingrid_rooms" id="rooms">
      {rooms.map((room) => {
        return (
          <li className="roomlist_item griditem" key={room.name}>
            {room.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Roomlist

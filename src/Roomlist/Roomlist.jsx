import React from 'react'
import './Roomlist.scss'

const Roomlist = ({ rooms }) => {
  return (
    <ul role="list" className="rooms_list">
      {rooms.map((room) => {
        return (
          <li className="rooms_list__item" key={room.name}>
            {room.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Roomlist

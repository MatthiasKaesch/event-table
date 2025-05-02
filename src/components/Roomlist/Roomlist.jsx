import React from 'react'
import DoorIcon from '../../assets/icons/door.svg?react'
import './Roomlist.scss'

const Roomlist = ({ rooms }) => {
  return (
    <ul role="list" className="rooms_list">
      {rooms.map((room, index) => {
        return (
          <li className="rooms_list__item" key={room.name}>
            {index !== 0 && <DoorIcon />}
            <p>{room.name}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Roomlist

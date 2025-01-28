import rooms from '../data/roomlist.json'
import timeSlotsData from '../data/timeslots.json'
import './App.css'

import Timeslot from './Timeslot'

function App() {
  console.clear()
  // Convert timeslots object to an array
  const timeslots = Object.entries(timeSlotsData).map(([key, value]) => ({
    id: key,
    ...value,
  }))

  return (
    <div className="wrapper">
      <h1>Hello World</h1>
      <ul className="list maingrid_rooms" id="rooms">
        {rooms.map((room) => {
          return <li className="roomlist_item griditem">{room.name}</li>
        })}
      </ul>

      {timeslots.map((data) => {
        return (
          <Timeslot
            id={data.id}
            time={data.timeslot}
            events={data.events}
            rooms={rooms}
          />
        )
      })}
    </div>
  )
}

export default App

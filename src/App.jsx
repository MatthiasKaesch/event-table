import rooms from './data/roomlist.json'
import timeSlotsData from './data/timeslots.json'
import './global_styling/normalize.css'
import './App.scss'

import Header from './Header/Header'
import Roomlist from './Roomlist/Roomlist'
import Timeslot from './Timeslot/Timeslot'

function App() {
  // Convert timeslots object to an array

  const timeslots = Object.entries(timeSlotsData).map(([key, value]) => ({
    id: key,
    ...value,
  }))

  return (
    <div className="wrapper">
      <Header />
      <Roomlist rooms={rooms} />

      {timeslots.map((data) => {
        return (
          <Timeslot
            key={data.id}
            time={data.timeslot}
            events={data.events}
            rooms={rooms}
            isGlobal={data.isGlobalEvent}
          />
        )
      })}
    </div>
  )
}

export default App

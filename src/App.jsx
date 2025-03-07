import rooms from './data/roomlist.json'
import timeSlotsData from './data/timeslots.json'
import './styling/normalize.css'
import './styling/global.css'
import './App.scss'

import Header from './components/Header/Header'
import Roomlist from './components/Roomlist/Roomlist'
import Timeslot from './components/Timeslot/Timeslot'
import ScrollDownButton from './components/ScrollDownButton/ScrollDownButton'

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
      <ScrollDownButton />
    </div>
  )
}

export default App

import React from 'react'

import WelcomeIcon from '../../assets/icons/welcome.svg?react'
import CoffeeIcon from '../../assets/icons/coffee.svg?react'
import LunchIcon from '../../assets/icons/lunch.svg?react'
import TogetherIcon from '../../assets/icons/together.svg?react'

const Icons = {
  welcome: WelcomeIcon,
  coffee: CoffeeIcon,
  lunch: LunchIcon,
  together: TogetherIcon,
}

const IconHandler = ({ identifier }) => {
  const Icon = Icons[identifier]
  return Icon ? (
    <Icon className="event_icon" aria-hidden="true" focusable="false" />
  ) : null
}

export default IconHandler

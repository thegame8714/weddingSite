import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => (
  <ul className="main-nav">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/event">Event</Link>
    </li>
    {
      //<li>Confirm Presence</li>
      //<li>Dietary Requirements</li>
    }
  </ul>
)

export default MainNav

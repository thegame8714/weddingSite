import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './translation/sentences'

class Event extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.event_title} />
        </h1>
        <ul className="event-list">
          <li>
            17:00 <FormattedMessage {...messages.guests_arrive} />
          </li>
          <li>
            17:30 <FormattedMessage {...messages.wedding_starts} />
          </li>
          <li>
            18:00 <FormattedMessage {...messages.aperitif} />
          </li>
          <li>
            19:00 <FormattedMessage {...messages.dinner} />
          </li>
          <li>
            21:00 <FormattedMessage {...messages.music} />
          </li>
        </ul>
      </div>
    )
  }
}

export default Event

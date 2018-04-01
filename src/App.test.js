import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IntlProvider } from 'react-intl'
const messages = require('./translation/en.json')

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <IntlProvider locale="en" messages={messages}>
        <App />
      </IntlProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

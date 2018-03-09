import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import de from 'react-intl/locale-data/de'

addLocaleData([...en, ...it, ...de, ...es])

const language = navigator.languages[0].substr(0, 2)

const messages = require(`./translation/${language}.json`)

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
)

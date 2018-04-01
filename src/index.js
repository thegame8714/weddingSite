import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import Home from './Home'
import Event from './Event'
import AppWrapper from './AppWrapper'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import de from 'react-intl/locale-data/de'
import { BrowserRouter, Route } from 'react-router-dom'

addLocaleData([...en, ...it, ...de, ...es])
var language
if (navigator.languages) {
  language = navigator.languages[0].substr(0, 2)
} else {
  language = navigator.language.substr(0, 2)
}

const messages = require(`./translation/${language}.json`)

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <BrowserRouter>
      <AppWrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/event" component={Event} />
        {
          //<Route path="/confirmation" component={Confirmation} />
        }
      </AppWrapper>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
)

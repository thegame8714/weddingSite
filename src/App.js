import React, { Component } from 'react'
import Form from './Form'
import './App.css'
import BankAccount from './BankAccount'
import axios from 'axios'
import { FormattedMessage } from 'react-intl'
import messages from './translation/sentences'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showBankAccount: false,
      nameNotFound: false
    }

    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.apiCall = this.apiCall.bind(this)
  }

  apiCall(name, code) {
    return axios.request({
      method: 'post',
      url: 'http://api.giadazanotti.com/addGift',
      data: {
        name,
        code
      },
      responseType: 'json'
    })
  }

  onSubmitClick(name, code) {
    return this.apiCall(name, code)
      .then(() => {
        this.setState({
          showBankAccount: true,
          nameNotFound: false
        })
      })
      .catch(() => {
        this.setState({
          nameNotFound: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="img_wrapper">
            <img src={require('./images/us.jpg')} alt="us" />
            <img
              src={require('./images/villadistriano_lavilla_03-1.jpg')}
              alt="villaDiStriano"
            />
            <img src={require('./images/ny_love.jpg')} alt="ny_love" />
            <img
              src={require('./images/dubai_gnagna_bella.jpg')}
              alt="usDubai"
            />
          </div>
        </header>
        <div className="main_content">
          <div className="main_content_title">
            <FormattedMessage {...messages.title} />
          </div>
          <div className="main_content_text">
            <p>
              <FormattedMessage {...messages.welcome_text} />
            </p>
            <p>
              <FormattedMessage {...messages.we_cant_wait} />
            </p>
            <p>
              <FormattedMessage {...messages.dreamy_honeymoon} />
            </p>
            <p>
              <FormattedMessage {...messages.contribute} />
            </p>
          </div>
          <div className="main_content_thank_you_message">
            <FormattedMessage {...messages.thank_you} />
          </div>
          {this.state.nameNotFound && <span>WROONG!!!</span>}
          {this.state.showBankAccount ? (
            <BankAccount />
          ) : (
            <Form onSubmitClick={this.onSubmitClick} />
          )}
        </div>
      </div>
    )
  }
}

export default App

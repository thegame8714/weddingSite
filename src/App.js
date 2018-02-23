import React, { Component } from 'react'
import Form from './Form'
import logo from './logo.svg'
import './App.css'
import BankAccount from './BankAccount'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showBankAccount: false
    }

    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.apiCall = this.apiCall.bind(this)
  }

  apiCall(name, code) {
    return axios.request({
      method: 'post',
      url: 'http://api.giadazanotti.com/checkNameAndCode',
      data: {
        name,
        code
      },
      responseType: 'json'
    })
  }

  onSubmitClick(name, code) {
    return this.apiCall(name, code).then(response => {
      this.setState({
        showBankAccount: true
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.showBankAccount ? (
          <BankAccount />
        ) : (
          <Form onSubmitClick={this.onSubmitClick} />
        )}
      </div>
    )
  }
}

export default App

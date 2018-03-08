import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './translation/sentences'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: undefined,
      code: undefined
    }

    this.handleInputNameChange = this.handleInputNameChange.bind(this)
    this.handleInputCodeChange = this.handleInputCodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleInputCodeChange(e) {
    this.setState({
      code: e.target.value
    })
  }

  handleSubmit(e) {
    const { name, code } = this.state
    e.preventDefault()
    this.props.onSubmitClick(name, code)
  }

  render() {
    return (
      <form className="main_content_form">
        <div className="main_content_form_item">
          <label htmlFor="fullName">
            <FormattedMessage {...messages.name} />
          </label>
          <input
            name="fullName"
            type="text"
            data-test-input-name
            onChange={this.handleInputNameChange}
          />
        </div>
        <div className="main_content_form_item">
          <label htmlFor="secretCode">
            <FormattedMessage {...messages.secret_code} />
          </label>
          <input
            name="secretCode"
            type="password"
            data-test-input-code
            onChange={this.handleInputCodeChange}
          />
        </div>
        <div>
          <button
            type="submit"
            data-test-submit-button
            onClick={this.handleSubmit}
            className="main_content_button"
          >
            <FormattedMessage {...messages.go_to_payment_page} />
          </button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmitClick: PropTypes.func.isRequired
}

export default Form

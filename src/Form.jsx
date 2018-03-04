import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: undefined,
      code: undefined
    }

    this.handleInputNameChange = this.handleInputNameChange.bind(this)
    this.handleInputCodeChange = this.handleInputCodeChange.bind(this)
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

  render() {
    const { name, code } = this.state
    return (
      <form className="main_content_form">
        <div className="main_content_form_item">
          <label htmlFor="fullName">Name:</label>
          <input
            name="fullName"
            type="text"
            data-test-input-name
            onChange={this.handleInputNameChange}
          />
        </div>
        <div className="main_content_form_item">
          <label htmlFor="secretCode">Secret code:</label>
          <input
            name="secretCode"
            type="text"
            data-test-input-code
            onChange={this.handleInputCodeChange}
          />
        </div>
        <div>
          <button
            type="submit"
            data-test-submit-button
            onClick={() => this.props.onSubmitClick(name, code)}
            className="main_content_button"
          >
            Go to payment page
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

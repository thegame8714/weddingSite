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
      <form>
        <input
          name="fullName"
          type="text"
          data-test-input-name
          onChange={this.handleInputNameChange}
        />
        <input
          name="fullName"
          type="text"
          data-test-input-code
          onChange={this.handleInputCodeChange}
        />
        <button
          type="submit"
          data-test-submit-button
          onClick={() => this.props.onSubmitClick(name, code)}
        >
          Go to payment page
        </button>
      </form>
    )
  }
}

export default Form

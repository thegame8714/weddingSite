import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Form from './Form'
import { mount } from 'enzyme'
import sinon from 'sinon'
// import BankAccount from './BankAccount'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render the field for the name', () => {
    const appWrapper = mount(<App />)

    expect(appWrapper.find('[data-test-input-name]').length).toBe(1)
  })

  it('should render the field for the security code', () => {
    const appWrapper = mount(<App />)

    expect(appWrapper.find('[data-test-input-code]').length).toBe(1)
  })

  it('should call the sendToAPI function when user clicks on the submit button', () => {
    const sendToAPISpy = sinon.spy()
    const formWrapper = mount(<Form onSubmitClick={sendToAPISpy} />)

    const inputNameField = formWrapper.find('[data-test-input-name]')
    inputNameField.simulate('change', { target: { value: 'Fabio Salimbeni' } })

    const inputCodeField = formWrapper.find('[data-test-input-code]')
    inputCodeField.simulate('change', { target: { value: '12345' } })

    formWrapper.find('[data-test-submit-button]').simulate('click')

    expect(sendToAPISpy.calledOnce).toBe(true)
    expect(sendToAPISpy.calledWith('Fabio Salimbeni', '12345')).toBeTruthy()
  })

  it.only('should render the bank account where to send the money if the code and name are right', async () => {
    const onSubmitClickStub = sinon
      .stub(App.prototype, 'apiCall')
      .returns(new Promise((res, err) => res()))

    const appWrapper = mount(<App />)
    const inputNameField = appWrapper.find('[data-test-input-name]')
    inputNameField.simulate('change', { target: { value: 'Fabio Salimbeni' } })

    const inputCodeField = appWrapper.find('[data-test-input-code]')
    inputCodeField.simulate('change', { target: { value: '12345' } })

    appWrapper.find('[data-test-submit-button]').simulate('click')

    await new Promise(resolve => setImmediate(resolve()))

    appWrapper.update()

    expect(appWrapper.find('.bank-account').length).toBe(1)
    onSubmitClickStub.restore()
  })
})

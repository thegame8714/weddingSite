import renderer from 'react-test-renderer'
import React from 'react'
import Home from './Home'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Form from './Form'
const messages = require('./translation/en.json')

describe('Home component', () => {
  it('should render the home component', () => {
    const tree = renderer
      .create(
        <IntlProvider locale="en" messages={messages}>
          <Home />
        </IntlProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the Form component', () => {
    const homeWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <Home />
      </IntlProvider>
    )

    expect(homeWrapper.find(Form).length).toBe(1)
  })

  it('should render the field for the name', () => {
    const appWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <Home />
      </IntlProvider>
    )

    expect(appWrapper.find('[data-test-input-name]').length).toBe(1)
  })

  it('should render the field for the security code', () => {
    const appWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <Home />
      </IntlProvider>
    )

    expect(appWrapper.find('[data-test-input-code]').length).toBe(1)
  })

  it('should call the sendToAPI function when user clicks on the submit button', () => {
    const sendToAPISpy = sinon.spy()
    const formWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <Form onSubmitClick={sendToAPISpy} />
      </IntlProvider>
    )

    const inputNameField = formWrapper.find('[data-test-input-name]')
    inputNameField.simulate('change', { target: { value: 'Fabio Salimbeni' } })

    const inputCodeField = formWrapper.find('[data-test-input-code]')
    inputCodeField.simulate('change', { target: { value: '12345' } })

    formWrapper.find('[data-test-submit-button]').simulate('click')

    expect(sendToAPISpy.calledOnce).toBe(true)
    expect(sendToAPISpy.calledWith('Fabio Salimbeni', '12345')).toBeTruthy()
  })

  it('should render the bank account where to send the money if the code and name are right', async () => {
    const onSubmitClickStub = sinon
      .stub(Home.prototype, 'apiCall')
      .returns(new Promise((res, err) => res()))

    const appWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <Home />
      </IntlProvider>
    )
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

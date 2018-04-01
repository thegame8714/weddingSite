import { mount } from 'enzyme'
import React from 'react'
import AppWrapper from './AppWrapper'
import { IntlProvider } from 'react-intl'
import messages from './translation/en.json'

describe('AppWrapper component', () => {
  it('should render its own children', () => {
    const appWrapperTree = mount(
      <AppWrapper>
        <div data-test-div>Test</div>
      </AppWrapper>
    )

    expect(appWrapperTree.render().find('[data-test-div="true"]').length).toBe(
      1
    )
    expect(
      appWrapperTree
        .render()
        .find('[data-test-div="true"]')
        .text()
    ).toMatch('Test')
  })

  it('should change the class of the image after 2s', done => {
    const appWrapper = mount(
      <IntlProvider locale="en" messages={messages}>
        <AppWrapper>
          <div>Test</div>
        </AppWrapper>
      </IntlProvider>
    )
    expect(
      appWrapper
        .find('img')
        .first()
        .hasClass('image-visible')
    ).toBe(true)

    setTimeout(() => {
      appWrapper.update()
      expect(
        appWrapper
          .find('.image')
          .at(1)
          .hasClass('image-visible')
      ).toBe(true)
      expect(
        appWrapper
          .find('.image')
          .first()
          .hasClass('image-visible')
      ).toBe(false)
      done()
    }, 2500)
  })
})

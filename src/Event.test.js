import renderer from 'react-test-renderer'
import React from 'react'
import Event from './Event'

describe('Event component', () => {
  it('should render the event page', () => {
    const tree = renderer.create(<Event />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

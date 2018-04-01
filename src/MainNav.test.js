import React from 'react'
import renderer from 'react-test-renderer'
import MainNav from './MainNav'
// import { Router } from 'react-router-dom'

describe.skip('MainNav component', () => {
  it('should show render the main menu', () => {
    const tree = renderer.create(<MainNav />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import NotFound from './notfound'
import {shallow} from 'enzyme'

it('shows 404 message', () => {
  var component = shallow(<NotFound/>)
  expect(component.find('h1')).toHaveLength(1)
  expect(component.find('h1').text()).toBe('404 Not Found')
})

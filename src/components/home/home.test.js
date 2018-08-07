import React from 'react'
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router'
import {Link} from 'react-router-dom'
import Home from './home'

const render = code => {
  return mount(
    <MemoryRouter>
      <Home code={code}/>
    </MemoryRouter>
  )
}

it('renders a link', () => {
  var component = render()
  expect(component.find(Link)).toHaveLength(1)
})

it('has a link to the league', () => {
  var component = render('123')
  expect(component.find(Link).prop('to')).toEqual('/league/123')
})

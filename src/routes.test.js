import React from 'react'
import { mount } from 'enzyme'

import Home from './components/home/home'
import League from './components/league/league'
import NotFound from './components/notfound/notfound'
import { MemoryRouter } from 'react-router'
import Routes from './routes'

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  )
describe('#routes', () => {
  it('renders home page on initial route', () => {
    const component = renderRoutes('/')

    expect(component.find(Home)).toHaveLength(1)
  })
  it('renders about page for league', () => {
    const component = renderRoutes('/league')

    expect(component.find(League)).toHaveLength(1)
  })
  it('renders notfound page for bad url', () => {
    const component = renderRoutes('/randomurl')

    expect(component.find(NotFound)).toHaveLength(1)
  })
})

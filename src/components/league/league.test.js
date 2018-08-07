import React from 'react'
import {mount} from 'enzyme'
import League from './league'

const render = props => {
  const defaultProps = {
    match: {
      params: {
        code: '12'
      }
    }
  }
  const componentProps = Object.assign(defaultProps, props)
  return mount(
    <League {...componentProps} />
  )
}

it('it renders the league code', () => {
  var component = render({match: {params: {code: '999'}}})
  expect(component.find('h1').text()).toEqual('This is League 999')
})

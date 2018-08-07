import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

it('works with enzyme', () => {
  let props = {
    'children': <h1>Hello</h1>
  }
  shallow(<App {...props}/>)
})
